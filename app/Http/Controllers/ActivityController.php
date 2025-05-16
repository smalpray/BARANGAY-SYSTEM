<?php

namespace App\Http\Controllers;

use App\Models\Activity;
use App\Models\ActivityCategory;
use App\Models\ActivityNumberOfBooking;
use App\Models\ActivityResource;
use App\Models\ActivityUpload;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ActivityController extends Controller
{
    // GET /activities
    public function index()
    {
        return response()->json(Activity::with(['activity_uploads', 'activity_categories', 'activity_resources'])->get());
    }

    // POST /activities
    public function store(Request $request)
    {

        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'product_code' => 'required|string|max:255',
            'description1' => 'nullable|string',
            'description2' => 'nullable|string',
            'email_message' => 'nullable|string',
            'cancellation' => 'nullable|string',
            'tax_description' => 'nullable|string',
            // 'age_group' => 'required|string|in:adult,child,senior', // adjust as needed
            'advance_from' => 'required|string',
            'advance_to' => 'required|string',
            'duration' => 'required|string',
            'buffer_time_from' => 'required|string',
            'buffer_time_to' => 'required|string',
            'deposit' => 'required|numeric',
            'tax_price' => 'required|numeric',
            'per_person' => 'required|numeric',
            'per_package' => 'required|numeric',
            'per_private' => 'required|numeric',
            'per_public' => 'required|numeric',
            // 'minimum' => 'required|integer|min:1',
            // 'maximum' => 'required|integer|min:1',
            'isTax' => 'nullable',
            'isVisible' => 'nullable',
            'monday_from' => 'required|string',
            'monday_to' => 'required|string',
            'tuesday_from' => 'required|string',
            'tuesday_to' => 'required|string',
            'wednesday_from' => 'required|string',
            'wednesday_to' => 'required|string',
            'thursday_from' => 'required|string',
            'thursday_to' => 'required|string',
            'friday_from' => 'required|string',
            'friday_to' => 'required|string',
            'saturday_from' => 'required|string',
            'saturday_to' => 'required|string',
            'sunday_from' => 'required|string',
            'sunday_to' => 'required|string',
        ]);
        $activity = Activity::create($validated);

        $ageGroups = $request->input('age_groups');
        if ($ageGroups && is_array($ageGroups)) {
            foreach ($ageGroups as $group) {
                ActivityNumberOfBooking::create([
                    'activity_id' => $activity->id,
                    'age_group' => $group['name'],
                    'min' => $group['min'],
                    'max' => $group['max'],
                ]);
            }
        }

        $this->handleFileUploads($request, 'files', $activity);
        if ($request->resources) {
            foreach ($request->resources as $key => $value) {
                ActivityResource::create([
                    'activity_id' => $activity->id,
                    'resource_id' => $value,
                ]);
            }
        }
        if ($request->categories) {
            foreach ($request->categories as $key => $value) {
                ActivityCategory::create([
                    'activity_id' => $activity->id,
                    'category_id' => $value,
                ]);
            }
        }




        return response()->json('success', 200);
    }

    private function handleFileUploads(Request $request, string $fileType, Activity $activity)
    {
        if ($request->hasFile($fileType)) {
            $files = $request->file($fileType);
            foreach ($files as $file) {
                // Store the file in S3
                $path = $file->store('Personal-' . date("Y"), 's3'); // Store in year-based folder
                $url = Storage::disk('s3')->url($path); // Get file URL from S3

                // Save file information in the FileUpload model
                ActivityUpload::create([
                    'activity_id' => $activity->id, // Link the file to the application using its ID
                    'file' => $url, // Save the file URL
                ]);
            }
        }
    }
    // GET /activities/{id}
    public function show(Request $request, $id)
    {
        $activity = Activity::where('product_code', '=', $id)->first();

        $date = Carbon::createFromFormat('m-d-Y', $request->date);
        $day = strtolower($date->format('l'));

        $from = Carbon::createFromFormat('H:i', $activity[$day . '_from']);
        $to = Carbon::createFromFormat('H:i', $activity[$day . '_to']);


        $start = Carbon::parse($activity->buffer_time_from, 'GMT');
        $end = Carbon::parse($activity->buffer_time_to, 'GMT');

        $buffer  = $start->diffInMinutes($end);

        if ($to->lessThan($from)) {
            $to->addDay(); // Handle overnight shifts
        }

        $slots = [
            'morning' => [],
            'afternoon' => [],
            'evening' => [],
        ];

        $duration = (int) $activity->duration;


        $current = $from->copy();
        while ($current < $to) {
            $sessionEnd = $current->copy()->addMinutes($duration);

            // If session end goes beyond available time, stop
            if ($sessionEnd > $to) {
                break;
            }

            $hour = (int) $current->format('H');

            if ($hour >= 5 && $hour < 12) {
                $slots['morning'][] = $current->format('H:i') . ' - ' . $sessionEnd->format('H:i');
            } elseif ($hour >= 12 && $hour < 17) {
                $slots['afternoon'][] = $current->format('H:i') . ' - ' . $sessionEnd->format('H:i');
            } elseif ($hour >= 17 && $hour < 21) {
                $slots['evening'][] = $current->format('H:i') . ' - ' . $sessionEnd->format('H:i');
            }
            $slots['buffer_time']=$buffer;
            // Move to the next slot start (add session + buffer)
            $current = $sessionEnd->copy()->addMinutes($buffer);
        }

        return response()->json($slots);
    }






    // PUT /activities/{id}
    public function update(Request $request, $id)
    {
        $activity = Activity::findOrFail($id);

        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'product_code' => 'required|string|max:255',
            'description1' => 'nullable|string',
            'description2' => 'nullable|string',
            'email_message' => 'nullable|string',
            'cancellation' => 'nullable|string',
            'tax_description' => 'nullable|string',
            'age_group' => 'required|string|in:adult,child,senior', // adjust as needed
            'advance_from' => 'required|string',
            'advance_to' => 'required|string',
            'duration' => 'required|string',
            'buffer_time' => 'required|string',
            'deposit' => 'required|numeric',
            'tax_price' => 'required|numeric',
            'per_person' => 'required|numeric',
            'per_package' => 'required|numeric',
            'per_private' => 'required|numeric',
            'per_public' => 'required|numeric',
            'minimum' => 'required|integer|min:1',
            'maximum' => 'required|integer|min:1',
            'isTax' => 'nullable|boolean',
            'isVisible' => 'nullable|boolean',
            'monday_from' => 'required|string',
            'monday_to' => 'required|string',
            'tuesday_from' => 'required|string',
            'tuesday_to' => 'required|string',
            'wednesday_from' => 'required|string',
            'wednesday_to' => 'required|string',
            'thursday_from' => 'required|string',
            'thursday_to' => 'required|string',
            'friday_from' => 'required|string',
            'friday_to' => 'required|string',
            'saturday_from' => 'required|string',
            'saturday_to' => 'required|string',
            'sunday_from' => 'required|string',
            'sunday_to' => 'required|string',
        ]);

        $activity->update($validated);

        return response()->json($activity);
    }

    // DELETE /activities/{id}
    public function destroy($id)
    {
        $activity = Activity::findOrFail($id);
        $activity->delete();

        return response()->json(['message' => 'Activity deleted successfully.']);
    }
}
