import { useState, useEffect } from "react";
import { db, } from '../firebase';
import { ref, onValue, } from "firebase/database";


const Dashboard = () => {
  const [sensor, setSensor] = useState({
    temprature: null,
    humidity: null,
    gas: null,
  });

  useEffect(()=>{
    const sensorRef = ref(db, sensorData);

    onValue(sensorRef, (snapshot)=>{
      if(snapshot.exists()){
        setSensor(snapshot.val());
      }
    });

  },[]);


  return (
    <>
    <h1>Dashboard</h1>
    </>
  )
}

export default Dashboard