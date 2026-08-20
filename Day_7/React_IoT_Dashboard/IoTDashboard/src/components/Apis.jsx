import {useEffect, useState, } from 'react'
import axios from 'axios'

const Apis = () => {
  const [data, setData] = useState(null);
  useEffect(()=>{
    const getUsers = async()=>{
      try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users');
        setData(res.data);
        console.log(res.data);
      } catch (error) {
        console.log("API call failed...", error);
      }
    }
    getUsers();
  }, [])

  if(data===null || data===undefined){
    return
    <>
      <p>Data loading</p>
    </>
  }

  return (
    <div className='w-dvw h-full bg-gray-500 flex flex-col flex-wrap py-2 px-5 gap-1 overflow-x-hidden scrollbar-none justify-center items-center'>{
      data.map((user)=>(
      <div key={user.id}
      className='p-2 bg-gray-200 hover:bg-gray-100 hover:text-gray-800 hover:scale-105 hover:rounded-xl transition-all ease-in-out h-fit w-fit text-xs rounded-sm flex flex-col gap-1 '>
        <p>User Name: {user.username}</p>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        <p>Company: {user.company.name}</p>
        <p>Address: {user.address.city}</p>
      </div>
    )
    )
    }</div>
  )
}

export default Apis