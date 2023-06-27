

import React, { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    const delayTime = 1; // Set the desired delay time in milliseconds

    const redirectTimeout = setTimeout(() => {
      window.location.href = "/dashboard"; // Replace with your Laravel route URL
    }, delayTime);

    return () => {
      clearTimeout(redirectTimeout);
    };
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-gray-900"></div>
<<<<<<< HEAD

=======
      
>>>>>>> ee4a7bfee60673656826a5456f510b5392b3360d
    </div>
  );
};

export default Home;
