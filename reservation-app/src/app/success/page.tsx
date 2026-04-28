'use client';

import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { Suspense } from 'react';

function SuccessContent() {
  const searchParams = useSearchParams();
  
  const date = searchParams.get('date') || 'Soon';
  const time = searchParams.get('time') || '00:00';
  const guests = searchParams.get('guests') || '1';

  // Format date to e.g. "October 14th"
  const formattedDate = date !== 'Soon' ? new Date(date).toLocaleDateString('en-US', { month: 'long', day: 'numeric' }) : date;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', position: 'relative' }}>
      
      {/* Red Ribbon */}
      <div style={{ position: 'relative', width: '40px', height: '60px', backgroundColor: '#8b0000', marginBottom: '1rem' }}>
        <div style={{ position: 'absolute', bottom: '-20px', left: 0, width: 0, height: 0, borderLeft: '20px solid #8b0000', borderRight: '20px solid #8b0000', borderBottom: '20px solid transparent' }}></div>
      </div>
      
      <p style={{ letterSpacing: '0.1em', fontWeight: 600, color: '#8b0000', marginBottom: '1rem', marginTop: '1rem' }}>CONFIRMED</p>
      
      <h1 style={{ fontSize: '3.5rem', fontStyle: 'italic', color: '#8b0000', marginBottom: '3rem' }}>Thank you for your reservation!</h1>
      
      <div style={{ width: '100%', maxWidth: '800px', height: '400px', position: 'relative', borderRadius: '12px', overflow: 'hidden', marginBottom: '3rem', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
        <Image 
          src="https://anush-sureandren.github.io/Philosoffee/assets/images/img_hero_coffee.jpg" 
          alt="Coffee cup" 
          fill 
          style={{ objectFit: 'cover' }}
          unoptimized
        />
      </div>

      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center', width: '100%', maxWidth: '900px', marginBottom: '3rem' }}>
        
        {/* Box 1 */}
        <div style={{ flex: '1', minWidth: '200px', backgroundColor: '#f2ede2', padding: '2rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
          <div style={{ color: '#8b0000', marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
          </div>
          <p className="form-label">DATED FOR</p>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: '#1d1c15' }}>{formattedDate}</h3>
          <p style={{ color: 'var(--text-secondary)' }}>at {time}</p>
        </div>

        {/* Box 2 */}
        <div style={{ flex: '1', minWidth: '200px', backgroundColor: '#f2ede2', padding: '2rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
          <div style={{ color: '#8b0000', marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
          </div>
          <p className="form-label">GUEST COUNT</p>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: '#1d1c15' }}>Table for {guests}</h3>
          <p style={{ color: 'var(--text-secondary)' }}>Main Library Wing</p>
        </div>

        {/* Box 3 */}
        <div style={{ flex: '1', minWidth: '200px', backgroundColor: '#f2ede2', padding: '2rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
          <div style={{ color: '#8b0000', marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
          </div>
          <p className="form-label">STATION</p>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: '#1d1c15' }}>Philosoffee HQ</h3>
          <p style={{ color: 'var(--text-secondary)' }}>The Scholarly Roastery</p>
        </div>
      </div>

      <p style={{ maxWidth: '600px', marginBottom: '3rem', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
        A confirmation has been sent to your digital manuscript (email).<br/>We look forward to your presence.
      </p>

      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <button className="btn-primary" style={{ width: 'auto' }}>ADD TO CALENDAR</button>
        <button className="btn-outline" style={{ width: 'auto' }}>MODIFY BOOKING</button>
      </div>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <main className="container" style={{ padding: '4rem 2rem' }}>
      <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '200px', height: '100%', backgroundColor: 'rgba(242, 237, 226, 0.4)', zIndex: -1 }}></div>
      <Suspense fallback={<div>Loading...</div>}>
        <SuccessContent />
      </Suspense>
    </main>
  );
}
