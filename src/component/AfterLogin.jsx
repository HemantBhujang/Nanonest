import React, { useEffect, useState } from 'react';
import { database } from './Firebase'; // Import the initialized database
import { ref, get } from 'firebase/database';
import Navbar2 from './Navbar2';
import IndustyCard from './IndustyCard';

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import core Swiper styles
import 'swiper/css/navigation'; // Import the Navigation module styles
import 'swiper/css/pagination'; // Import the Pagination module styles
import { Navigation, Pagination } from 'swiper/modules'; // Updated imports for Swiper modules

const AfterLogin = ({ title, content, wave }) => {
  const [entrepreneurData, setEntrepreneurData] = useState([]);

  useEffect(() => {
    // Fetch entrepreneur data from Firebase
    const fetchEntrepreneurData = async () => {
      const entrepreneurRef = ref(database, '/entrepreneurs');
      const snapshot = await get(entrepreneurRef);

      if (snapshot.exists()) {
        const data = snapshot.val();
        const formattedData = Object.keys(data).map(key => ({
          name: data[key].name,
          companyName: data[key].companyName,
          description: data[key].description
        }));
        setEntrepreneurData(formattedData);
      } else {
        console.log('No data available');
      }
    };

    fetchEntrepreneurData();
  }, []);

  return (
    <>
      <Navbar2
        title="NanoNest"
        msg="Message"
        notification="Notification"
        menu="Menu"
        button="Profile"
      />
      <div className="container text-start my-5">
        <h1 style={{ fontSize: '8vmin' }} className="my-3">{title}</h1>
        <h3 style={{ fontSize: '4vmin', color: '#F9BC6E' }}>{content}</h3>
      </div>
      <img src={wave} alt="Wave Image" className="Start" width="100%" />
      <h1 style={{ textAlign: 'center' }}>Explore Startup Raising Now!!</h1>
      <div className="btn-group dropend" style={{ marginLeft: '90%' }}>
        <button type="button" className="btn btn-warning dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
          Dropend
        </button>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">Investors</a></li>
          <li><a className="dropdown-item" href="#">Entrepreneur</a></li>
          <li><a className="dropdown-item" href="#">Other</a></li>
        </ul>
      </div>

      {/* Swiper Slider for Entrepreneur Cards */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3} // Adjust this value to show multiple cards
        navigation
        pagination={{ clickable: true }}
        style={{ padding: '20px' }}
        modules={[Navigation, Pagination]} // Use Swiper's modules here
      >
        {entrepreneurData.length > 0 ? (
          entrepreneurData.map((entrepreneur, index) => (
            <SwiperSlide key={index}>
              <IndustyCard
                name={entrepreneur.name}
                subheader={entrepreneur.companyName}
                content={entrepreneur.description}
              />
            </SwiperSlide>
          ))
        ) : (
          <p>No entrepreneurs available</p>
        )}
      </Swiper>
    </>
  );
};

export default AfterLogin;
