'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ReservationForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch('/api/reserve', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error('Failed to submit reservation');
      }

      // Encode the data to pass it to the success page
      const query = new URLSearchParams(data as any).toString();
      router.push(`/success?${query}`);
    } catch (err: any) {
      setError(err.message || 'An error occurred');
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '2rem' }}>
      {error && <div style={{ color: 'red', fontSize: '0.875rem' }}>{error}</div>}
      
      <div className="grid-2">
        <div className="form-group">
          <label className="form-label" htmlFor="date">Date of Arrival</label>
          <input type="date" id="date" name="date" className="form-input" required />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="time">Time Preference</label>
          <input type="time" id="time" name="time" className="form-input" required />
        </div>
      </div>

      <div className="grid-2">
        <div className="form-group">
          <label className="form-label" htmlFor="guests">Number of Scholars</label>
          <select id="guests" name="guests" className="form-input" required>
            <option value="1">1 Person (Solitary)</option>
            <option value="2">2 People (Discourse)</option>
            <option value="3">3 People</option>
            <option value="4">4 People</option>
            <option value="5+">5+ People (Gathering)</option>
          </select>
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="name">Patron Name</label>
          <input type="text" id="name" name="name" className="form-input" placeholder="Entry Name" required />
        </div>
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="email">Email Address (For Confirmation)</label>
        <input type="email" id="email" name="email" className="form-input" placeholder="example@manuscript.com" required />
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="phone">WhatsApp Number</label>
        <input type="tel" id="phone" name="phone" className="form-input" placeholder="+ Contact number" required />
      </div>

      <button type="submit" className="btn-primary" disabled={isSubmitting}>
        {isSubmitting ? 'Reserving...' : 'Reserve Table'}
      </button>
      
      <p style={{ textAlign: 'center', fontSize: '0.7rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: '0.5rem' }}>
        A confirmation scroll will be sent to your digital inbox.
      </p>
    </form>
  );
}
