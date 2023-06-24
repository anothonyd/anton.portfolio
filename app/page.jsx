"use client";

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { About, Contact, Experience, Feedbacks, Hero, Tech, Works, NavBar } from "../components";
import BarLoader from "react-spinners/BarLoader";
const Page = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000)
  }, [])

  return (
    <>
      {
        loading ?


          <div className='loader'>
            <BarLoader
              loading={loading}
              color={'#fff'}
              size={450}
              aria-label="Loading Spinner"
            />
          </div>

          :

          <main className='relative z-0 bg-primary'>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
              className='bg-cover bg-no-repeat bg-center z-10'>
              <NavBar />
              <Hero />
            </motion.div>
            <About />
            <Experience />
            <Tech />
            <Works />
            <Feedbacks />
            <div className='relative z-0'>
              <Contact />
            </div>
          </main>
      }
    </>
  );
};

export default Page;
