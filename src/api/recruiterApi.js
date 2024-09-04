import axios from 'axios';

export const registerRecruiter = async (formData) => {
  try {
    const response = await axios.post('https://recruiter-registration-63-backend.onrender.com/api/recruiters/register', formData);
    return response.data;
  } catch (error) {
    if (error.response) {
      // handle server-side errors
      console.error(error.response.status, error.response.statusText);
    } else if (error.request) {
      // handle network errors
      console.error(error.request);
    } else {
      // handle client-side errors
      console.error(error.message);
    }
    throw new Error('Registration failed');
  }
};