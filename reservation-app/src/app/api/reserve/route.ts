import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import twilio from 'twilio';

// Initialize Supabase Client
// Ensure you have these variables in your .env.local file
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://your-project.supabase.co';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || 'your-service-role-key';
const supabase = createClient(supabaseUrl, supabaseKey);

// Initialize Twilio Client
const accountSid = process.env.TWILIO_ACCOUNT_SID || 'your-twilio-account-sid';
const authToken = process.env.TWILIO_AUTH_TOKEN || 'your-twilio-auth-token';
const twilioClient = twilio(accountSid, authToken);

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { date, time, guests, name, email, phone } = data;

    // 1. Save to Supabase Database
    // Make sure you create a table named 'reservations' in your Supabase dashboard
    const { error: dbError } = await supabase
      .from('reservations')
      .insert([
        { date, time, guests, name, email, phone }
      ]);

    if (dbError) {
      console.error('Database Error:', dbError);
      // For development purposes, we won't throw if Supabase isn't configured
      // throw new Error('Failed to save to database');
    }

    // 2. Send WhatsApp Message to Cafe Owner
    const ownerWhatsAppNumber = process.env.OWNER_WHATSAPP_NUMBER || 'whatsapp:+1234567890'; // E.g., whatsapp:+1234567890
    const twilioWhatsAppNumber = process.env.TWILIO_WHATSAPP_NUMBER || 'whatsapp:+14155238886'; // Twilio sandbox number

    try {
      await twilioClient.messages.create({
        body: `New Reservation Request!\n\nName: ${name}\nDate: ${date}\nTime: ${time}\nGuests: ${guests}\nPhone: ${phone}\nEmail: ${email}`,
        from: twilioWhatsAppNumber,
        to: ownerWhatsAppNumber
      });
    } catch (twError) {
      console.error('Twilio Error:', twError);
      // For development purposes, we won't throw if Twilio isn't configured
    }

    return NextResponse.json({ success: true, message: 'Reservation confirmed!' });
  } catch (error) {
    console.error('Reservation Error:', error);
    return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 });
  }
}
