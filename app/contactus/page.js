'use client'

import { useState, useEffect } from 'react'
import emailjs from 'emailjs-com'
import AOS from "aos";
import "aos/dist/aos.css";
import Appbar from '../components/Appbar'
import Footer from '../components/Footer'
import Swal from 'sweetalert2'

export default function Example() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSent, setIsSent] = useState(false)

  // Handles input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  // Function to send email
  const handleSubmit = (e) => {
    e.preventDefault()

    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields')
      return
    }

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    }

    emailjs
      .send('service_vx8ef78', 'template_oui0qp7', templateParams, 'RDHalmvjBpaWtLEPi')
      .then(() => {
        setIsSent(true)
        setFormData({ name: '', email: '', message: '' })
        Swal.fire({
          icon: "success",
          title: "Your message has been sent",
          
        })
      })
      .catch((error) => {
        console.error('Error sending email:', error)
        Swal.fire({
          icon: "error",
          title: "Sending Failed",
        })
      })
  }

  useEffect(() => {
    AOS.init({ duration: 800, once: true }); // Initialize AOS
  }, []);

  return (
    <>
      <Appbar />
      <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
        <section data-aos="fade-up" className="py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-24">
              <div className="flex items-center lg:mb-0 mb-10">
                <div>
                  <h2 className="text-gray-900 font-manrope text-4xl font-semibold leading-10 mb-9 lg:text-left text-center">
                    Reach Out To Us
                  </h2>
                  <form onSubmit={handleSubmit}>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full h-14 shadow-sm text-gray-600 text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none py-2 px-4 mb-8"
                      placeholder="Name"
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full h-14 shadow-sm text-gray-600 text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none py-2 px-4 mb-8"
                      placeholder="Email"
                      required
                    />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full h-48 shadow-sm resize-none text-gray-600 text-lg font-normal leading-7 rounded-2xl border border-gray-200 focus:outline-none px-4 py-4 mb-8"
                      placeholder="Message"
                      required
                    ></textarea>
                    <button
                      type="submit"
                      className="w-full h-12 text-center text-white text-base font-semibold leading-6 rounded-full bg-indigo-600 shadow transition-all duration-700 hover:bg-indigo-800"
                    >
                      {isSent ? 'Sent!' : 'Submit'}
                    </button>
                  </form>
                </div>
              </div>
              <div className="lg:max-w-xl w-full h-[600px] flex items-center justify-center bg-cover bg-no-repeat bg-[url('https://pagedone.io/asset/uploads/1696245837.png')]">
                <div className="lg:w-96 w-auto h-auto bg-white shadow-xl lg:p-6 p-4">
                  <h1 className="text-lg text-center font-semibold mb-2">Contacts</h1>
                  <a href="tel:+639770936971" className="flex items-center mb-6">
                    <h5 className="text-black text-base font-normal leading-6 ml-5">+63 977 093 6971</h5>
                  </a>
                  <a href="mailto:stefanieasaytono@gmail.com" className="flex items-center mb-6">
                    <h5 className="text-black text-base font-normal leading-6 ml-5">stefanieasaytono@gmail.com</h5>
                  </a>
                  <a href="#" className="flex items-center mb-6">
                    <h5 className="text-black text-base font-normal leading-6 ml-5">Cavite, Philippines</h5>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
