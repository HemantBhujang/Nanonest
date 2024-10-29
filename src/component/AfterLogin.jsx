import React, { useEffect, useState } from 'react';
import { database } from './Firebase'; // Firebase setup
import { ref, get } from 'firebase/database';
import { useNavigate } from 'react-router-dom';
import Navbar2 from './Navbar2';
import IndustyCard from './IndustyCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

const AfterLogin = ({ title, content, wave }) => {
  const navigate = useNavigate();
  const [entrepreneurData, setEntrepreneurData] = useState([]);

  useEffect(() => {
    const fetchEntrepreneurData = async () => {
      const entrepreneurRef = ref(database, '/entrepreneurs');
      const snapshot = await get(entrepreneurRef);

      if (snapshot.exists()) {
        const data = snapshot.val();
        const formattedData = Object.keys(data).map(key => ({
          id: key,  // Keep the unique Firebase ID
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

  const handleProfileClick = (id) => {
    navigate(`/profile/${id}`); // Use the ID to navigate
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
      <div className="container text-start my-5">
        <h1 style={{ fontSize: '8vmin' }} className="my-3">{title}</h1>
        <h3 style={{ fontSize: '4vmin', color: '#F9BC6E' }}>{content}</h3>
      </div>
      <img src={wave} alt="Wave Image" className="Start" width="100%" />
      <h1 style={{ textAlign: 'center' }}>Explore Startup Raising Now!!</h1>
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        style={{ padding: '20px' }}
        modules={[Navigation, Pagination]}
      >
        {entrepreneurData.length > 0 ? (
          entrepreneurData.map((entrepreneur) => (
            <SwiperSlide key={entrepreneur.id}>
              <IndustyCard
                id={entrepreneur.id} // Pass the ID to the card
                name={entrepreneur.name}
                companyName={entrepreneur.companyName}
                description={entrepreneur.description}
                onClick={() => handleProfileClick(entrepreneur.id)} // Handle profile click
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
