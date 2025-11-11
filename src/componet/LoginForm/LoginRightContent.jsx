import React from 'react'

const LoginRightContent = ({ user, setUser }) => {

  const handleInputChange = (event) => {
    setUser((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  }
  const handleFormSubmit = (event) => {
    event.preventDefault();
    setUser({
      email: "",
      newpassword: "",
    })
    console.log(user);
  }

  return (
    <form className='h-[90%] w-1/2 mx-10 my-5 flex flex-col justify-between' onSubmit={handleFormSubmit}>
      <div className='flex flex-col justify-between h-1/4 mt-12 '>
        <h1 className='font-medium text-2xl tracking-wide capitalize'>Get Started</h1>
        <p className='text-gray-400'>welcome to RahulStudio - Let's get started</p>
        <hr className='text-gray-400 mr-10' />
      </div>
      <div className='flex flex-col h-3/4 gap-2 mt-10'>
        <label htmlFor="email" className='text-gray-400'>Your email</label>
        <input
          type="text"
          name='email'
          required
          autoComplete='off'
          value={user.email}
          onChange={handleInputChange}
          placeholder="Enter Your Email"
          className='border border-gray-500 rounded-sm mr-10 h-10 px-3 focus:outline-none' />

        <label htmlFor="password" className='text-gray-400'>Create new password</label>
        <input
          type="password"
          name="newpassword"
          autoComplete='off'
          required
          value={user.newpassword}
          onChange={handleInputChange}
          placeholder='Enter password'
          className='border border-gray-500 rounded-sm mr-10 h-10 px-3 focus:outline-none' />
      </div>
      <button className=' bg-amber-600 rounded-lg px-4 py-3 mr-10 mb-3 cursor-pointer'>Create new account</button>
    </form>
  )
}

export default LoginRightContent;