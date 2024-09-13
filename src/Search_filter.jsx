import axios from "axios";
import React, { useEffect, useState } from "react";

export function Search_filter() {
  const [data, setData] = useState([]); // Store all users from API
  const [records, setRecords] = useState([]); // Store filtered users for display
  const [showDropdown, setShowDropdown] = useState(false); // Control dropdown visibility
  const [searchTerm, setSearchTerm] = useState(""); // Store the search term

  // Fetch the users data from the API on component mount
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/users")
      .then((res) => {
        setData(res.data); // Store all data in the state
        setRecords(res.data.slice(0, 5)); // Initially show only 5 records
      })
      .catch((err) => console.log("Error fetching data:", err));
  }, []);

  // Filter records based on the search term
  const filter = (event) => {
    const value = event.target.value.toLowerCase(); // Get search value
    setSearchTerm(value); // Update search term in state
    const filteredRecords = data.filter((user) =>
      user.login.toLowerCase().includes(value)
    );
    setRecords(filteredRecords.slice(0, 5)); // Display only first 5 records
  };

  // Handle search button click to show the dropdown
  const handleSearchClick = () => {
    if (searchTerm.trim() !== "") {
      setShowDropdown(true); // Show dropdown if search term is not empty
    }
  };

  return (
    <div>
      <label htmlFor="search"></label>
      <input
        type="text"
        placeholder="Search by name"
        onChange={filter} // Filter on input change
        value={searchTerm} // Bind input to state
      />
      <button onClick={handleSearchClick}>Search</button>

      {/* Only display the dropdown if showDropdown is true and we have records */}
      {showDropdown && records.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {records.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.login}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
