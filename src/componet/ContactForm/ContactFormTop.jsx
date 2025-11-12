import React from 'react'
import ContactFormTopLeft from './ContactFormTopLeft'
import ContactFormTopRight from './ContactFormTopRight'

const ContactFormTop = ({ contactInfo, setContactInfo }) => {
  return (
    <div className='flex h-screen w-full'>
      <ContactFormTopLeft />
      <ContactFormTopRight contactInfo={contactInfo} setContactInfo={setContactInfo} />
    </div>
  )
}

export default ContactFormTop