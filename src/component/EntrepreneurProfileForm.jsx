import React, { useState } from 'react';
import Navbar2 from './Navbar2'

const EntrepreneurProfileForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    companyName: '',
    website: '',
    linkedin: '',
    twitter: '',
    facebook: '',
    description: '',
    profileImage: null, // For storing the uploaded image
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setFormData({ ...formData, [name]: files[0] }); // Store the selected file
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Log form data (including the image file)
    console.log('Form Data Submitted:', formData);
    
    // Here you can add code to send the data to your backend or Firebase
    // For example, you might want to upload the image to Firebase Storage first
  };

  return (
    <>
    <Navbar2
    title='NanoNest'   
    msg='Message'   
    notification='Notification'
    menu='Menu'
    button ='Profile'
    />

    <div className="container my-5">
      <h2 className="text-center text-warning">Entrepreneur Profile</h2>
      <form onSubmit={handleSubmit}>
        {/* Other form fields remain the same */}

        <div className="mb-3">
          <label htmlFor="profileImage" className="form-label">Profile Image</label>
          <input
            type="file"
            className="form-control"
            id="profileImage"
            name="profileImage"
            accept="image/*"
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="companyName" className="form-label">Company Name</label>
          <input
            type="text"
            className="form-control"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="website" className="form-label">Website</label>
          <input
            type="url"
            className="form-control"
            id="website"
            name="website"
            value={formData.website}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="linkedin" className="form-label">LinkedIn Profile</label>
          <input
            type="url"
            className="form-control"
            id="linkedin"
            name="linkedin"
            value={formData.linkedin}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="twitter" className="form-label">Twitter Profile</label>
          <input
            type="url"
            className="form-control"
            id="twitter"
            name="twitter"
            value={formData.twitter}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="facebook" className="form-label">Facebook Profile</label>
          <input
            type="url"
            className="form-control"
            id="facebook"
            name="facebook"
            value={formData.facebook}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
          ></textarea>
        </div>

        <button type="submit" className="btn btn-warning">Submit</button>
      </form>
    </div>
    </>
  );
};

export default EntrepreneurProfileForm;
