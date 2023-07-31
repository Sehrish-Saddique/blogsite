import React,{useEffect,useState} from "react";
 

export default function Viewusers() {
    const style={
        border:'1px solid black',
        padding:'10px',
        margin:'10px',
        background:'red',
    }
    const [data,setData]=useState([]);
    useEffect(()=>{
        async function fetchData(){
            const res=await fetch('http://localhost:4001/getusers');
            const data=await res.json();
            console.log(data);
            setData(data);
        }
        fetchData();
    
    },[])
return(
    <>
    <div style={style}>
        <h1>View Users</h1>
        <p>HEllo</p>
        {data.map((item)=>(
             <div style={style}>
                {/* src={`http://localhost:4001/images/${item.profileimage}`} */}
                <h1>{item.Name}</h1>
                <h1>{item.Email}</h1>
                <h1>{item.Password}</h1>
                <img src={`http://localhost:4001/${item.Image}`} alt="image"/>
                <p>Bye</p>
            </div>
        ))
            }
    </div>
    </>
)}