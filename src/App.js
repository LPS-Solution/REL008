import React,{useEffect, useState} from 'react';
import './App.css';
import MyBar from './MyBar';
import MyCard from './MyCard';
// let data = require('./attractions.json')


function App() {
  const [data, setData] = useState([])
  useEffect(()=>{
      fetch("https://www.melivecode.com/api/attractions")
      .then(res => res.json())
      .then(result => {
        console.log(result)
        setData(result)})
  },[])
  return (
    <>
    <MyBar />
    {data.map(item => (
      <MyCard key={item.id} name={item.name} coverimage={item.coverimage} detail={item.detail} />

    ))}
    
    </>
    
  );
}

export default App;
