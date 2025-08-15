import React, { useState } from 'react';
import Layout from '../../layout';
import Input from '@/app/_components/input';
import Select from '@/app/_components/select';
import TabsResidentSection from './sections/tabs-resident-section';

function ProfileResidentForm () {
  const [formData, setFormData] = useState({
    // Basic Info
    
    voters: '',
    dateOfBirth: '',
    placeOfBirth: '',
    pwd: '',
    singleParent: '',
    firstName: '',
    middleName: '',
    lastName: '',
    suffix: '',
    gender: 'Male',
    civilStatus: 'Single',
    religion: '',
    nationality: '',
    // Other Info (Address)
    municipality: '',
    zip: '',
    barangay: '',
    houseNumber: '',
    street: '',
    address: '',
    contactNumber: '',
    emailAddress: '',
    // Guardian
    fatherName: '',
    motherName: '',
    guardianName: '',
    guardianContact: '',
    // Account
    username: '',
    password: '',
    confirmPassword: ''
  });


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };




  return (
  <>
  </>
  );
}

export default function Page() {
  return (
    <Layout>
      <TabsResidentSection />
    </Layout>
  );
}

      
