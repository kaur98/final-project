import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'; // Importing routing components from react-router-dom
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import ToursPage from './pages/ToursPage';

// Main App component that sets up the routing for the application
export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        {/* Define routes for different pages in the application */}
        <Route path="/tours">
          <ToursPage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/contact-us">
          <ContactPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
