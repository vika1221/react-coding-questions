import React, { useState, useEffect } from "react";

export default function GetMethod() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res);
        if (!res.ok) {
          throw new Error("Network response was not ok!!!");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
        console.log(data);
      })
      .catch((error) => console.log("Error :", error));
  }, []);
  return (
    <div>
      {loading ? (
        <p>Loading... Please wait!!!</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>TITLE</th>
              <th>MESSAGE</th>
            </tr>
          </thead>
          <tbody>
          {
            data.map((list,index)=>(
                <tr>
              <td>{list.id}</td>
              <td>{list.title}</td>
              <td>{list.body}</td>
            </tr>
            ))
          }
            
          </tbody>
        </table>
      )}
    </div>
  );
}
