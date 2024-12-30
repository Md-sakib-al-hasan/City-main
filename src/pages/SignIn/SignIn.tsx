import React, { useState } from 'react';
import sigine from "../../assets/Siginepage/3432203.jpg";

const SignInPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'student', // default role
    studentId: '',
    teacherId: '',
  });

  const [showIdField, setShowIdField] = useState(false); // To show/hide ID input

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      const selectedRole = checked ? name : '';
      setFormData({ ...formData, role: selectedRole });
      setShowIdField(true);
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="flex sm:h-screen w-full max-w-[1280px] mx-auto items-center flex-col md:flex-row">
      
      {/* Left Side - Image */}
      <div className="w-full md:w-1/2 bg-cover bg-center flex items-center pb-20 sm:block ">
        <img src={sigine} alt="Sign In" className="object-cover w-full h-full" />
      </div>

      {/* Right Side - Sign In Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center pb-20">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="w-full focus: px-4 py-2 border rounded-md focus:outline-none focus:ring-0 focus:ring-[#131d3b]"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-0 focus:ring-[#131d3b]"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-0 focus:ring-[#131d3b]"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex items-center mb-4">
            <input
              id="student"
              name="student"
              type="checkbox"
              className="mr-2 accent-[#ff4f01]"
              checked={formData.role === 'student'}
              onChange={handleChange}
            />
            
            <label htmlFor="student" className="text-sm font-medium">Student</label>
             <div>
 
             </div>
            <input
              id="teacher"
              name="teacher"
              type="checkbox"
              className="ml-4 mr-2 accent-[#ff4f01] "
              checked={formData.role === 'teacher'}
              onChange={handleChange}
            />
            <label htmlFor="teacher" className="text-sm font-medium">Teacher</label>
          </div>

          {showIdField && (
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1" htmlFor="id">
                {formData.role === 'student' ? 'Student ID' : 'Teacher ID'}
              </label>
              <input
                id="id"
                name={formData.role === 'student' ? 'studentId' : 'teacherId'}
                type="text"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-0 focus:ring-[#131d3b]"
                placeholder={formData.role === 'student' ? 'Enter your Student ID' : 'Enter your Teacher ID'}
                value={formData.role === 'student' ? formData.studentId : formData.teacherId}
                onChange={handleChange}
                required
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-[#ff4f01] text-white font-bold py-2 rounded-md hover:bg-[#131d3b] focus:outline-none focus:ring-2 focus:ring-[#131d3b]"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;
