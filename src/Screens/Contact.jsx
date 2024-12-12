import { useState } from 'react';

export default function ContactMe() {
  // State to manage form data and validation
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle form data change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    const validationErrors = {};

    if (!formData.name) {
      validationErrors.name = 'Name is required';
    }
    if (!formData.email) {
      validationErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = 'Please enter a valid email';
    }
    if (!formData.message) {
      validationErrors.message = 'Message is required';
    }

    setErrors(validationErrors);

    // If no validation errors, simulate successful form submission
    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitted(true);
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    }
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg max-w-2xl mx-auto mt-10">
      
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-6">Contact</h2>
      {isSubmitted && (
        <div className="bg-green-100 text-green-700 p-4 rounded-md mb-6">
          Thank you for reaching out! I will get back to you soon.
        </div>
      )}
      <form onSubmit={handleSubmit}>
        {/* Name Field */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-lg font-semibold">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg mt-2"
            placeholder="Enter your name"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-lg font-semibold">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg mt-2"
            placeholder="Enter your email"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        {/* Message Field */}
        <div className="mb-4">
          <label htmlFor="message" className="block text-lg font-semibold">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg mt-2"
            placeholder="Write your message here"
            rows="4"
          />
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}
