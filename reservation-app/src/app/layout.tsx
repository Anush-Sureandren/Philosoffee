import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Philosoffee | Reserve a Seat",
  description: "Reserve a seat at Philosoffee Roastery",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header style={{ textAlign: 'center', padding: '1rem', borderBottom: '1px solid var(--border-color)', backgroundColor: 'var(--bg-color)' }}>
          <h1 style={{ fontSize: '1.2rem', fontWeight: 600, letterSpacing: '0.1em', color: 'var(--text-secondary)' }}>
            Philosoffee
          </h1>
        </header>
        {children}
      </body>
    </html>
  );
}
