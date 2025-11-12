import React from 'react'

const ContactFormTopRight = ({ contactInfo, setContactInfo }) => {


  const handleInputChange = (event) => {
    setContactInfo((prev) => ({ ...prev, [event.target.name]: event.target.value }
    ))
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setContactInfo({
      username: "",
      email: "",
      website: "",
      message: "",
    })
    console.log(contactInfo);

  }

  return (

    <form className='w-[50%] flex flex-col gap-5 p-5 mt-15 ' onSubmit={handleFormSubmit}>

      <input
        type="text"
        placeholder='name'
        name="username"
        autoComplete='off'
        required
        value={contactInfo.username}
        onChange={handleInputChange}
        className='outline-none border border-gray-300 bg-white h-9 px-3 w-2/4 rounded capitalize' />

      <input
        type="email"
        placeholder='email'
        name="email"
        autoComplete='off'
        required
        value={contactInfo.email}
        onChange={handleInputChange}
        className='outline-none border border-gray-300 bg-white h-9 px-3 w-2/4 rounded capitalize' />

      <input
        type="text"
        placeholder='website'
        name="website"
        autoComplete='off'
        required
        value={contactInfo.website}
        onChange={handleInputChange}
        className='outline-none border border-gray-300 bg-white h-9 px-3 w-2/4 rounded capitalize' />

      <textarea
        type="text"
        placeholder="message"
        name="message"
        autoComplete='off'
        required
        value={contactInfo.message}
        onChange={handleInputChange}
        className='outline-none border border-gray-300 bg-white h-25 px-3 pt-2 w-2/4 resize-none rounded capitalize placeholder:-mb-60' />


      <button className='bg-linear-to-r from-purple-400 to-orange-300 text-white text-xl w-2/4 h-9 rounded cursor-pointer hover:bg-linear-to-l from-purple-700 to-orange-600 text-2xl'>Submit</button>
    </form>

  )
}

export default ContactFormTopRight