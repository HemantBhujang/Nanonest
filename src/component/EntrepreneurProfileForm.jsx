import React, { useState } from 'react';
import Navbar2 from './Navbar2';
import { ref as databaseRef, set } from 'firebase/database'; // Correct import for ref
import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage'; // Correct import for storage ref
import { database, storage } from './Firebase'; // Import your Firebase configuration

const PopupMessage = ({ message, onClose }) => (
  <div className="modal show" tabIndex="-1" style={{ display: 'block' }}>
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-body">
          <p>{message}</p>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-warning" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  </div>
);

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

  const [uploadStatus, setUploadStatus] = useState(''); // To provide feedback to the user
  const [showPopup, setShowPopup] = useState(false); // State to handle popup visibility
  const [popupMessage, setPopupMessage] = useState(''); // State to hold popup message

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setFormData({ ...formData, [name]: files[0] }); // Store the selected file
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploadStatus('Uploading...'); // Notify the user about the upload process
    
    try {
      let profileImageUrl = '';
      
      // If the user has uploaded an image
      if (formData.profileImage) {
        const imageRef = storageRef(storage, `profileImages/${formData.profileImage.name}`);
        const snapshot = await uploadBytes(imageRef, formData.profileImage); // Upload the image
        profileImageUrl = await getDownloadURL(snapshot.ref); // Get the image URL
      }
      
      // Add the data to Firebase Realtime Database (including the image URL)
      const userRef = databaseRef(database, 'entrepreneurs/' + formData.name); // Use the user's name or unique ID
      await set(userRef, {
        name: formData.name,
        email: formData.email,
        companyName: formData.companyName,
        website: formData.website,
        linkedin: formData.linkedin,
        twitter: formData.twitter,
        facebook: formData.facebook,
        description: formData.description,
        profileImageUrl, // Save the image URL
      });

      setUploadStatus('Form submitted successfully!');
      setPopupMessage('Form submitted successfully!'); // Set the message for the popup
      setShowPopup(true); // Show the popup
      
      // Clear form after successful submission
      setFormData({
        name: '',
        email: '',
        companyName: '',
        website: '',
        linkedin: '',
        twitter: '',
        facebook: '',
        description: '',
        profileImage: null,
      });
  
    } catch (error) {
      console.error('Error uploading data:', error);
      setUploadStatus('Error submitting the form, please try again.');
      setPopupMessage('Error submitting the form, please try again.'); // Set error message
      setShowPopup(true); // Show popup for error
    }
  };

  // Function to close the popup
  const closePopup = () => {
    setShowPopup(false);
  };
  
  return (
    <>
      <Navbar2
        title='NanoNest'   
        msg='Message'   
        notification='Notification'
        menu='Menu'
        button='Profile'
      />

      <div className="container my-5">
        <h2 className="text-center text-warning">Entrepreneur Profile</h2>
        <form onSubmit={handleSubmit}>
          {/* Profile Image Field */}
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

          {/* Other form fields */}
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

        {/* Display submission status */}
        {uploadStatus && <p className="mt-3">{uploadStatus}</p>}
      </div>

      {/* Popup message */}
      {showPopup && <PopupMessage message={popupMessage} onClose={closePopup} />}
    </>
  );
};

export default EntrepreneurProfileForm;
