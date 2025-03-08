import React, { useState, useEffect } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false); // Track loading state
  const [success, setSuccess] = useState(false); // Track submission success

  // Load success state from localStorage on component mount
  useEffect(() => {
    const savedSuccess = localStorage.getItem('formSuccess');
    if (savedSuccess === 'true') {
      setSuccess(true);
    }

    // Prompt user on page reload if form was previously submitted
    if (savedSuccess === 'true') {
      const resubmit = window.confirm('Do you want to resubmit the form?');
      if (!resubmit) {
        setSuccess(false);
        localStorage.removeItem('formSuccess');
      }
    }
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission with basic validation
  const handleSubmit = (e) => {
    e.preventDefault();

    let formErrors = {};

    // Validate form fields
    if (!formData.name) formErrors.name = 'Name is required';
    if (!formData.email) formErrors.email = 'Email is required';
    if (!formData.message) formErrors.message = 'Message is required';

    // If there are validation errors, set the error state
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    // Set loading state to true when form submission starts
    setLoading(true);

    // Simulate form submission (e.g., make API request here)
    setTimeout(() => {
      // Simulate successful form submission
      console.log('Form submitted', formData);

      // Set the success state and stop loading
      setSuccess(true);
      setLoading(false);

      // Store success state in localStorage
      localStorage.setItem('formSuccess', 'true');

      // Clear form fields after submission
      setFormData({ name: '', email: '', message: '' });
      setErrors({}); // Clear errors
    }, 2000); // Simulate a 2-second API request delay
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold text-center mb-10 text-[#242a56] ">Request Free Consultation</h2>
      <div className="max-w-2xl mx-auto p-10 bg-white shadow-lg">
        {success ? (
          <div className="text-center text-gray-700">
            <p className='py-32'>Thanks for contacting us! We will be in touch with you shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                placeholder="Your Name*"
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-3 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-red-700 bg-stone-100"
                required
              />
              {errors.name && <span className="text-red-500 text-sm mt-2">{errors.name}</span>}
            </div>

            <div className="mb-4">
              <input
                placeholder="Your Email*"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-3 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-red-700 bg-stone-100"
                required
              />
              {errors.email && <span className="text-red-500 text-sm mt-2">{errors.email}</span>}
            </div>

            <div className="mb-4">
              <textarea
                placeholder="Your Message*"
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3 py-10 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-red-700 bg-stone-100"
                required
              />
              {errors.message && <span className="text-red-500 mt-2">{errors.message}</span>}
            </div>

            <button
              type="submit"
              className="py-3 mt-4 text-white rounded bg-[#6878d6] hover:bg-blue-800 transition duration-200 px-8"
            >
              {loading ? 'Sending...' : 'SUBMIT'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
