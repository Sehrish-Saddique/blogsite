import React, { useEffect, useState } from "react";

export default function Viewblog() {
  const style = {
    border: "1px solid black",
    padding: "10px",
    margin: "10px",
    background: "green",
  };

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch("http://localhost:4001/getblog");
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
        <h1>View Blogs</h1>
        {data.length === 0 ? (
          <p>No Blogs available.</p>
        ) : (
          data.map((item) => (
            <div style={style}>
              {/* src={`http://localhost:4001/images/${item.profileimage}`} */}
              <h1>{item.Text}</h1>
              <p>Bye</p>
            </div>
          ))
        )}
      </div>
    </>
  );
}
