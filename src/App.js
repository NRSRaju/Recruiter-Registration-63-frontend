import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RegistrationForm from './components/RegistrationForm';

const App = () => {
  return (
    <div className="App">
      <h1>Recruiter Registration</h1>
      <RegistrationForm />
      <ToastContainer />
    </div>
  );
};

export default App;
