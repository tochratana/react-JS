import axios from "axios";
import React, { userEffect, useState } from "react";

export function Search_filter() {
  const [data, setData] = useState([]);
  userEffect(() => {
    axios
      .get("https://api.github.com/users")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  });
  return (
    <div>
      <div>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d, i) => (
            <tr>
              <td>{d.id}</td>
              <td>{d.login}</td>
            </tr>
          ))}
        </tbody>
      </div>
    </div>
  );
}
