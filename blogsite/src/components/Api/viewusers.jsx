import React, { useEffect, useState } from "react";
 
export default function ViewUsers() {
  const style = {
    border: "1px solid black",
    padding: "10px",
    margin: "10px",
    background: "pink",
  };

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch("http://localhost:4001/getusers");
        const data = await res.json();
        console.log(data);
        setData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    }

    getData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div style={style}>
        <h1>View Users</h1>
        {data.length === 0 ? (
          <p>No users available.</p>
        ) : (
          data.map((item) => (
            <div key={item.id} style={style}>
              {/* src={`http://localhost:4001/images/${item.Image}`} */}
              <h1>{item.Name}</h1>
              <h1>{item.Email}</h1>
              <h1>{item.Password}</h1>
              <img src={`http://localhost:4001/images/${item.Image}`} alt="User Avatar" />
              <p>Bye</p>
            </div>
          ))
        )}
      </div>
    </>
  );
}
