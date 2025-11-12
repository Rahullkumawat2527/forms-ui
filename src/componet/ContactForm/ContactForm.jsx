import React from 'react'
import ContactFormTop from './ContactFormTop'
import { useState } from 'react'

const ContactForm = () => {

  const [contactInfo, setContactInfo] = useState({
    username: "",
    email: "",
    webiste: "",
    message: "",
  })

  return (
    <div className='h-screen w-full bg-linear-to-r from-blue-50 to-yellow-50'>
      <ContactFormTop contactInfo = {contactInfo} setContactInfo = {setContactInfo}/>
    </div>
  )
}

export default ContactForm