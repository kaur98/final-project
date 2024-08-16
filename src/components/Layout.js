// Pavan Gajjar 8890300
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div>
      {/* Renders the Navbar, the content passed as children, and the Footer */}
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
