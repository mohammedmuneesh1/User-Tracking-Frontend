import React, { useState } from 'react';
import { UserCircle, Mail, Phone } from 'lucide-react';
import axios from 'axios';
import axiosInstance from '../utils/axiosInstance';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    mobile: '',
    email: ''
  });
  const [loading,setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.username.trim()) {
      alert('Please enter your username');
      return;
    }
    
    if (!formData.mobile.trim()) {
      alert('Please enter your mobile number');
      return;
    }
    
    if (!formData.email.trim()) {
      alert('Please enter your email');
      return;
    }
    console.log("inside registration form",)
    setLoading(true);
    const response = await axiosInstance.post('/user/registration',{
        name: formData.username,
        phone: Number(formData.mobile),
        email: formData.email
    });
    setLoading(false);
   if(response?.status === 200){
    alert("Registration successful.");
   }
   else{
    alert("Registration failed. Please try after sometimes");
   }

    // const response = await axios.post(`${process.env.REACT_APP_API_URL}/user/registration`,{
    //     name: formData.username,
    //     mobile: formData.mobile,
    //     email: formData.email
    // });
    console.log("this is the response",response)

    // If all validations pass
    // alert('Registration successful!');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Create an Account</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <div className="relative">
              <UserCircle className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                id="username"
                name="username"
                type="text"
                placeholder="Enter your username"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg   outline-none transition duration-200"
                value={formData.username}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">
              Mobile Number
            </label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                id="mobile"
                name="mobile"
                type="tel"
                placeholder="Enter your mobile number"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg   outline-none transition duration-200"

                value={formData.mobile}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg   outline-none transition duration-200"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-900 transition duration-200 font-medium"
          >
           {loading? "Registering...":"Register"} 
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;