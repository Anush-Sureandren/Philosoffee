import ReservationForm from '@/components/ReservationForm';
import Image from 'next/image';

export default function Home() {
  return (
    <main style={{ padding: '4rem 0' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'start' }}>
          
          {/* Left Column */}
          <div>
            <div style={{ width: '40px', height: '48px', backgroundColor: '#8b0000', marginBottom: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 19V6C4 4.89543 4.89543 4 6 4H18V19" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                <path d="M6 4V19" stroke="white" strokeWidth="2"/>
                <path d="M14 8H8" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                <path d="M14 12H8" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            
            <h1 style={{ fontSize: '3rem', lineHeight: '1.1', marginBottom: '1.5rem', color: '#8b0000' }}>
              A Seat for Your Thoughts.
            </h1>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '3rem' }}>
              Select a niche in our manuscript-lined walls. Whether for a solitary study session or an intellectual discourse over artisan roasts.
            </p>
            
            <div style={{ width: '100%', height: '350px', position: 'relative', borderRadius: '8px', overflow: 'hidden' }}>
              <Image 
                src="https://anush-sureandren.github.io/Philosoffee/assets/Banglore%20Photos/Book%20Shelfs.webp" 
                alt="Library shelves" 
                fill 
                style={{ objectFit: 'cover' }} 
                unoptimized
              />
            </div>
          </div>

          {/* Right Column (Form) */}
          <div style={{ backgroundColor: '#f2ede2', padding: '3rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
            <ReservationForm />
          </div>
        </div>

        {/* Bottom Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: '4rem' }}>
          
          <div style={{ backgroundColor: '#f2ede2', padding: '2rem', borderRadius: '8px' }}>
            <div style={{ color: '#8b0000', marginBottom: '1rem' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>
            </div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#1d1c15' }}>The Reading Nook</h3>
            <p style={{ fontSize: '0.9rem' }}>Isolated corner with dim light, perfect for deep focus.</p>
          </div>

          <div style={{ backgroundColor: '#f2ede2', padding: '2rem', borderRadius: '8px' }}>
            <div style={{ color: '#8b0000', marginBottom: '1rem' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            </div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#1d1c15' }}>The Discourse Table</h3>
            <p style={{ fontSize: '0.9rem' }}>Large round table under the chandelier for lively debates.</p>
          </div>

          <div style={{ backgroundColor: '#f2ede2', padding: '2rem', borderRadius: '8px' }}>
            <div style={{ color: '#8b0000', marginBottom: '1rem' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
            </div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#1d1c15' }}>The Observation Desk</h3>
            <p style={{ fontSize: '0.9rem' }}>Window seating overlooking the cobbled streets of the city.</p>
          </div>

        </div>

        <div style={{ textAlign: 'center', marginTop: '4rem', padding: '2rem 0', borderTop: '1px solid var(--border-color)' }}>
          <p style={{ fontStyle: 'italic', marginBottom: '1rem' }}>"Coffee is the common man's gold, and like gold, it brings to every person the feeling of luxury and nobility."</p>
          <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em' }}>PHILOSOFFEE © 2024</p>
        </div>
      </div>
    </main>
  );
}
