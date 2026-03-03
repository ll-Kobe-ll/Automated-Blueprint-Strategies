export const runtime = 'nodejs';

import { google } from 'googleapis';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    // Honeypot anti-spam check
    if (formData.get("honeypot")) {
      return NextResponse.json({ success: false, spam: true });
    }

    const values = [
      new Date().toISOString(),  // Timestamp
      formData.get('business'),  // Business Type
      formData.get('bottleneck'),// Bottleneck
      formData.get('revenue'),   // Monthly Revenue
      formData.get('readiness'), // Readiness
      formData.get('followup'),  // Preferred Contact Method
      formData.get('email'),     // Email
      formData.get('phone'),     // Phone
    ];

    const auth = new google.auth.GoogleAuth({
      credentials: JSON.parse(process.env.GOOGLE_CREDENTIALS!),
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    const sheetId = process.env.GOOGLE_SHEET_ID!;

    await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: 'Sheet1!A1',
      valueInputOption: 'USER_ENTERED',
      requestBody: { values: [values] },
    });

    return NextResponse.json({ success: true });

  } catch (err) {
    if (err instanceof Error) {
      console.error('Form submission error:', err.message);
      return NextResponse.json({ success: false, error: err.message }, { status: 500 });
    }

    console.error('Unknown submission error:', err);
    return NextResponse.json({ success: false, error: 'Unknown error' }, { status: 500 });
  }
}
