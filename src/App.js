import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import HomePage from './pages/HomePage';
import EstimationPage from './pages/EstimationPage';
import FaqPage from './pages/FaqPage';
import ContactPage from './pages/ContactPage';
import LegalPage from './pages/LegalPage';
import ServicesPage from './pages/ServicesPage';

import './App.css';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/estimer' component={EstimationPage} />
        <Route path='/faq' component={FaqPage} />
        <Route path='/contact' component={ContactPage} />
        <Route path='/legal' component={LegalPage} />
        <Route path='/services' component={ServicesPage} />

        <Redirect to='/' />
      </Switch>
    </Router>
  )
}
