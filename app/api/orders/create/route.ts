import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { generateOrderNumber } from '@/lib/razorpay';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      serviceId,
      serviceName,
      packageName,
      packagePrice,
      billingCycle,
      subtotal,
      discount,
      gst,
      total,
    } = body;

    // Get user from auth header
    const authHeader = request.headers.get('authorization');
    
    // Create order in database
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    const orderNumber = generateOrderNumber();

    const { data: order, error } = await supabase
      .from('orders')
      .insert({
        order_number: orderNumber,
        service_id: serviceId,
        service_name: serviceName,
        package_name: packageName,
        package_price: packagePrice,
        is_subscription: true,
        billing_cycle: billingCycle,
        subtotal: subtotal,
        discount_amount: discount,
        gst_amount: gst,
        total_amount: total,
        payment_status: 'pending',
        status: 'active',
      })
      .select()
      .single();

    if (error) throw error;

    // In production, create Razorpay order
    // const Razorpay = require('razorpay');
    // const razorpay = new Razorpay({
    //   key_id: process.env.RAZORPAY_KEY_ID,
    //   key_secret: process.env.RAZORPAY_KEY_SECRET,
    // });
    
    // const razorpayOrder = await razorpay.orders.create({
    //   amount: total * 100, // Convert to paise
    //   currency: 'INR',
    //   receipt: orderNumber,
    // });

    return NextResponse.json({
      orderId: order.id,
      orderNumber: orderNumber,
      razorpayOrderId: 'rzp_test_' + Date.now(), // Mock for now
      success: true,
    });
  } catch (error: any) {
    console.error('Order creation error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to create order' },
      { status: 500 }
    );
  }
}

