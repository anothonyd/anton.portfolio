'use client'

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import emailjs from '@emailjs/browser';

import { styles } from "../app/styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";



const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // p-cHEcxvZ3DgdtB-I
    // template_5hgsucg
    // service_bgl8r9f
    emailjs.send(
      'service_bgl8r9f',
      'template_5hgsucg',
      {
        from_name: form.name,
        to_name: 'Anthony',
        from_email: form.email,
        to_email: 'anothony3247@gmail.com',
        message: form.message,
      },
      'p-cHEcxvZ3DgdtB-I'
    )
      .then(() => {
        setLoading(false);
        alert('Thank you. I will get back to you as soon as possible.');

        setForm({
          name: '',
          email: '',
          message: '',
        })
      }, (error) => {
        setLoading(false);

        console.log(error);

        alert('something went wrong');
      })
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2x1"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label
            className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6
            placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label
            className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6
            placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label
            className="flex flex-col">
            <span className="text-white font-medium mb-4">Leave a Message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want say?"
              className="bg-tertiary py-4 px-6
            placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 w-fit text-white shadow-md shadow-primary outlined-none border-none font-bold rounded-xl"
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>

      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact');