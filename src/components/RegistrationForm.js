import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { FaUser, FaEnvelope, FaKey, FaRegAddressCard } from 'react-icons/fa';
import { Form, Input, Button, FormGroup, Label } from './StyledComponents';
import { registerRecruiter } from '../api/recruiterApi';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    address: '',
    gstNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateGSTNumber = (gstNumber) => {
    const gstRegex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;
    return gstRegex.test(gstNumber);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateGSTNumber(formData.gstNumber)) {
      toast.error('Invalid GST number format.');
      return;
    }

    try {
      await registerRecruiter(formData);
      toast.success('Registration successful!');
       // Clear the form fields
       setFormData({
        name: '',
        email: '',
        password: '',
        address: '',
        gstNumber: '',
      });
    } catch (error) {
      toast.error('Registration failed. Please try again.');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label><FaUser /> Name</Label>
        <Input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </FormGroup>
      <FormGroup>
        <Label><FaEnvelope /> Email</Label>
        <Input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </FormGroup>
      <FormGroup>
        <Label><FaKey /> Password</Label>
        <Input type="password" name="password" value={formData.password} onChange={handleChange} required />
      </FormGroup>
      <FormGroup>
        <Label><FaRegAddressCard /> Address</Label>
        <Input type="text" name="address" value={formData.address} onChange={handleChange} required />
      </FormGroup>
      <FormGroup>
        <Label>GST Number</Label>
        <Input type="text" name="gstNumber" value={formData.gstNumber} onChange={handleChange} required />
      </FormGroup>
      <Button type="submit">Register</Button>
    </Form>
  );
};

export default RegistrationForm;
