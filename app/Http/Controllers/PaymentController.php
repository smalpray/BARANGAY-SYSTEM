<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Stripe\Checkout\Session;
use Stripe\Stripe;

class PaymentController extends Controller
{
    public function checkout()
    {
        return view('checkout');
    }

    public function pay_card(Request $request)
    {
        Stripe::setApiKey(config('services.stripe.secret'));

        $session = Session::create([
            'payment_method_types' => ['card'],
            'line_items' => [[
                'price_data' => [
                    'currency' => 'usd',
                    'product_data' => [
                        'name' => 'Bow Product',
                        'images' => ["https://blue-waves.site/equipments/equipments1.jpg","https://blue-waves.site/equipments/equipments2.jpg"]
                    ],
                    'unit_amount' => 10000, // $100.00
                ],
                'quantity' => 1,
            ]],
            'mode' => 'payment',
            'success_url' => route('homepage'),
            'cancel_url' => route('homepage'),
        ]);

        return redirect($session->url);
    }

    public function success()
    {
        return 'Payment successful!';
    }

    public function cancel()
    {
        return 'Payment cancelled!';
    }
}
