import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div>
      <Header />
      <motion.div
        className="h-[225px] w-full bg-accent text-white pt-[125px] pb-[145px] relative mb-12 lg:mb-28"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold text-center">About Us</h1>
      </motion.div>
      <motion.div
        className="h-[500px] w-full flex items-center justify-center bg-gradient-to-r from-green-500 bg-accent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="text-white text-lg max-w-md text-center p-8">
          <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
          <p>
            Windows are no longer just objects to fill openings; they are expected to perform various functions. At Nalanda Industries, we are committed to delivering top-notch quality and superior performance. Our products, including WPC doors, wooden doors, uPVC windows, and door frames, are crafted with precision and attention to detail, ensuring durability and reliability. We strive to provide our customers with the best value for their investment.
          </p>
        </div>
      </motion.div>
      <motion.div
        className="h-[500px] w-full flex items-center justify-center bg-gradient-to-l from-pink-500 to-red-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="bg-accent text-white text-lg max-w-md text-center p-8">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p>
            Our mission is to revolutionize the door and window industry by providing innovative, high-quality solutions that exceed our customers' expectations. We aim to create aesthetically pleasing and technologically advanced products that enhance the beauty, comfort, and security of homes and commercial spaces. Through continuous research, development, and customer feedback, we strive to stay at the forefront of the industry and contribute to the sustainable growth of the construction sector.
          </p>
        </div>
      </motion.div>
      <motion.div
        className="h-[500px] w-full flex items-center justify-center from-red-500 bg-[rgba(144,57,57,0.88)] "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <div className="text-white text-lg  text-center p-8">
          <h2 className="text-3xl font-bold mb-4">Our Values</h2>
          <p>
            Our core values define who we are as a company and guide our actions and decisions. Integrity and transparency are at the heart of everything we do. We are committed to ethical business practices, honesty, and open communication with our customers, partners, and employees. We value innovation and continuous improvement, constantly seeking new ways to enhance our products and services. Sustainability is another key value that drives us to minimize our environmental impact and contribute positively to the communities we serve.
          </p>
        </div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default About;
