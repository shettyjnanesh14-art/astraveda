import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { serviceId, serviceName, packageName, packagePrice, billingCycle, features } = body;

    // Create checkout session ID
    const checkoutId = `checkout_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

    // In production, save checkout session to database
    // const supabase = createClient(
    //   process.env.NEXT_PUBLIC_SUPABASE_URL!,
    //   process.env.SUPABASE_SERVICE_ROLE_KEY!
    // );

    // await supabase.from('checkout_sessions').insert({
    //   id: checkoutId,
    //   service_id: serviceId,
    //   service_name: serviceName,
    //   package_name: packageName,
    //   package_price: packagePrice,
    //   billing_cycle: billingCycle,
    //   features: features,
    // });

    return NextResponse.json({ checkoutId, success: true });
  } catch (error: any) {
    console.error('Checkout creation error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to create checkout' },
      { status: 500 }
    );
  }
}

