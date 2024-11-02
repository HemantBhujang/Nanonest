import React, { useState, useEffect } from 'react';
import Navbar2 from './Navbar2';
import { ref as databaseRef, set, get } from 'firebase/database';
import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import { database, storage, auth } from './Firebase'; // Import your Firebase configuration including auth
import { onAuthStateChanged } from 'firebase/auth';

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
    profileImage: null,
  });

  const [uploadStatus, setUploadStatus] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  // Fetch current user from Firebase Auth and prefill form
  useEffect(() => {

    const currentUser = auth.currentUser;

    if (currentUser) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        name: currentUser.displayName || '', // Prefill name if available
        email: currentUser.email || '', // Prefill email
      }));
    }
  

    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        // Fetch additional user data from the database
        const userRef = databaseRef(database, 'entrepreneurs/' + currentUser.uid); // Assuming uid is used as a key
        const snapshot = await get(userRef);
        
        if (snapshot.exists()) {
          const userData = snapshot.val();
          setFormData({
            ...formData,
            name: userData.name || currentUser.displayName || '',
            email: currentUser.email || '',
            companyName: userData.companyName || '',
            website: userData.website || '',
            linkedin: userData.linkedin || '',
            twitter: userData.twitter || '',
            facebook: userData.facebook || '',
            description: userData.description || '',
            profileImage: null, // Profile image is usually not stored here
          });
        }
      }
    });

    return () => unsubscribe(); // Cleanup subscription on unmount
  }, []);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploadStatus('Uploading...');
    
    try {
      let profileImageUrl = '';
      
      // Get the current user
      const currentUser = auth.currentUser;
  
      if (!currentUser) {
        setPopupMessage('Please log in to submit the form.');
        setShowPopup(true);
        return;
      }
  
      // If the user has uploaded an image
      if (formData.profileImage) {
        const imageRef = storageRef(storage, `profileImages/${currentUser.uid}`);
        const snapshot = await uploadBytes(imageRef, formData.profileImage);
        profileImageUrl = await getDownloadURL(snapshot.ref);
      }
  
      // Use the current user's uid as the key
      const userRef = databaseRef(database, `entrepreneurs/${currentUser.uid}`);
      
      // Set the data (this will overwrite existing data at this path)
      await set(userRef, {
        name: formData.name,
        email: formData.email,
        companyName: formData.companyName,
        website: formData.website,
        linkedin: formData.linkedin,
        twitter: formData.twitter,
        facebook: formData.facebook,
        description: formData.description,
        profileImageUrl,
      });
  
      setUploadStatus('Form submitted successfully!');
      setPopupMessage('Form submitted successfully!');
      setShowPopup(true);
  
      // Clear form data after submission
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
      setPopupMessage('Error submitting the form, please try again.');
      setShowPopup(true);
    }
  };
  
  
  // Function to close the popup
  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <Navbar2
        title="NanoNest"
        msg="Message"
        notification="Notification"
        menu="Menu"
        button="Profile"
      />

      <div className="container my-5">
        <h2 className="text-center text-warning">Entrepreneur Profile</h2>
        <form onSubmit={handleSubmit}>
          {/* Profile Image Field */}
          <div className="mb-3">
            <label htmlFor="profileImage" className="form-label">Profile Image<span className="text-danger">*</span></label>
            <input
              type="file"
              className="form-control"
              id="profileImage"
              name="profileImage"
              accept="image/*"
              onChange={handleChange}
              required
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
            <label htmlFor="email" className="form-label">Email<span className="text-danger">*</span></label>
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
            <label htmlFor="companyName" className="form-label">Company Name<span className="text-danger">*</span></label>
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
            <label htmlFor="website" className="form-label">Website <span className="text-danger">*</span></label>
            <input
              type="url"
              className="form-control"
              id="website"
              name="website"
              value={formData.website}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="linkedin" className="form-label">LinkedIn Profile<span className="text-danger">*</span></label>
            <input
              type="url"
              className="form-control"
              id="linkedin"
              name="linkedin"
              value={formData.linkedin}
              onChange={handleChange}
              required
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
            <label htmlFor="description" className="form-label">Description<span className="text-danger">*</span></label>
            <textarea
              className="form-control"
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              required
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
