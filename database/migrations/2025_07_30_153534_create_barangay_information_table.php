<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('barangay_information', function (Blueprint $table) {
            $table->id();
            $table->string('official_id')->nullable();
            $table->string('first_name')->nullable();
            $table->string('middle_name')->nullable();
            $table->string('last_name')->nullable();
            $table->string('suffix')->nullable();
            $table->string('birth_date')->nullable();
            $table->string('birth_place')->nullable();
            $table->string('gender')->nullable();
            $table->string('age')->nullable();
            $table->string('civil_status')->nullable();
            $table->string('religion')->nullable();
            $table->string('nationality')->nullable();
            $table->string('municipality')->nullable();
            $table->string('zip')->nullable();
            $table->string('barangay')->nullable();
            $table->string('house_number')->nullable();
            $table->string('street')->nullable();
            $table->string('address')->nullable();
            $table->string('email_address')->nullable();
            $table->string('contact_number')->nullable();
            $table->string('fathers_name')->nullable();
            $table->string('mothers_name')->nullable();
            $table->string('guardian')->nullable();
            $table->string('guardian_contact')->nullable();
            $table->string('image')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('barangay_information');
    }
};
