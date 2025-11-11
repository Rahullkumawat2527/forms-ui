import React from 'react'
import LoginLeftContent from './LoginLeftContent'
import LoginRightContent from './LoginRightContent'
import { useState } from 'react'

const LoginForm = () => {
  
  const[user,setUser] = useState({
    email : "",
    newpassword : "",
  })

  return (
    <div className='h-screen w-full bg-amber-950 flex items-center justify-center'>
v        <div className='bg-white w-[70%] h-[90%] rounded-lg flex justify-between'>
              <LoginLeftContent/>
              <LoginRightContent user = {user} setUser = {setUser}/>
</div>
    </div>
  )
}

export default LoginForm