import React from 'react'
import { useNavigate, } from 'react-router'

const Registration = () => {
  const navigate = useNavigate();

  return (
    <div className='w-full h-full flex flex-col gap-2 p-5 bg-white'>
      <div>
        <form action="" 
        className='flex flex-col gap-2 p-2 border rounded-2xl'>
          <input type="text" placeholder="Full Name" name="full_name" required/>
          <input type="text" placeholder="UserName" name="user_name" required/>
          <input type="date" id="dob" placeholder="Date of Birth" name="dob" required/>
          <input type="text" placeholder="Address" name="address" required/>
          <input type="email" placeholder="Email" name="mail" required/>
          <input type="tel" placeholder="Phone Number" pattern="\+?[0-9\s\-\(\)]+{10}"  name="phone" required/>
          <input type="password" placeholder="Password" name="password" required/>

          <button type="submit"
          className='rounded-2xl border w-fit h-fit p-1'>Register</button>
        </form>
      </div>

      <div 
      className='w-50 h-10 '>
        <p onClick={()=>{
          navigate('/login')
        }}>Have Account Already? Login</p>
      </div>
    </div>
  )
}

export default Registration