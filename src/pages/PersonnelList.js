import React, { useState, useEffect } from "react";
import "./PersonnelList.css";
import Card from "components/Card/Card";

const Personnel = () => {
  const [employee, setEmployee] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [empPerPage] = useState(4);

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      const url = "https://randomuser.me/api/?results=28";
      const response = await fetch(url);
      const data = await response.json();
      setEmployee(data.results);
    };

    fetchPosts();
  }, []);

  const indexOfLastEmp = currentPage * empPerPage;
  const indexOfFirstEmp = indexOfLastEmp - empPerPage;
  const currentEmp = employee.slice(indexOfFirstEmp, indexOfLastEmp);
  const handleClick = (page) => setCurrentPage(page);

  return (
    <div className="personnel">
      <div className="header-personnel">
        <div className="tittle">
          <h1 style={{ color: "#23C7C6" }}>PERSONNEL LIST</h1>
          <h2 style={{ color: "grey" }}> List of all personnels</h2>
        </div>
        <div className="search">
          <input
            className="search-column"
            placeholder="Find Personnels"
            type="text"
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
          <button className="button">
            ADD PERSONNEL <span className="button-tittle">+</span>
          </button>
        </div>
      </div>

      <div className="card">
        {currentEmp
          .filter((employee) => {
            if (searchTerm == "") {
              return employee;
            } else if (
              employee.name.first
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
            ) {
              return employee;
            }
          })
          .map((employee, i) => {
            return (
              <div>
                <Card key={i} employee={employee} />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "20px",
                    marginBottom: "30px",
                  }}
                ></div>
              </div>
            );
          })}
      </div>
      <div className="pagination">
        <ul>
          {currentPage === 1 ? (
            <li style={{ color: "#bbbbbb" }}>Previous Page</li>
          ) : (
            <li onClick={handleClick.bind(null, currentPage - 1)}>
              Previous Page
            </li>
          )}
          {currentPage === employee.length / 4 ? (
            <li style={{ color: "#bbbbbb" }}>Next Page</li>
          ) : (
            <li onClick={handleClick.bind(null, currentPage + 1)}>Next Page</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Personnel;
