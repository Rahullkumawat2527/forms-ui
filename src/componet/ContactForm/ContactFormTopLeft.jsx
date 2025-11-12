import React from 'react'
import 'remixicon/fonts/remixicon.css'

const ContactFormTopLeft = () => {
    return (
        <div className='flex flex-col gap-10 w-[50%]  px-15 py-8 mt-15'>
            <div className='w-[80%] flex flex-col gap-3'>
                <h1 className='text-2xl'>Contact Us</h1>
                <p className='text-gray-600'>We are committed to processing the information in order to contact you and talk about your project</p>
            </div>
            <div className='flex flex-col gap-3 capitalize'>
                <p>Email : rahullkumaw@gmail.com</p>
                <p>Address : 4076 ashok nagar rampura</p>
                <p>Mobile Number : +91 9134738382</p>

            </div>
        </div>
    )
}

export default ContactFormTopLeft