import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import ToursPage from './pages/ToursPage';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
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
