import React, { useState, useEffect } from "react";
import "./PersonnelList.css";
import Card from 'components/Card/Card'
import axios from 'axios';

import Posts from 'components/Pagination/Post';
import Pagination from 'components/Pagination/Pagination';

const Personnel = () => {
  const [employee, setEmployee] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);


  // async componentDidMount(){
  //   const url = 'https://randomuser.me/api/?results=4'
  //   const response = await fetch(url)
  //   const data = await response.json()
  //   this.setState({employee: data.results})
  //   console.log(this.state.employee)
  // }

  useEffect(() => {
    const fetchPosts = async () => {
      const url = 'https://randomuser.me/api/?results=28'
    const response = await fetch(url)
    const data = await response.json()
    setEmployee(data.results)
    };

    fetchPosts();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = employee.slice(indexOfFirstPost, indexOfLastPost);
  //const paginate = pageNumber => setCurrentPage(pageNumber);

  const handleClick = page => setCurrentPage(page)

  
    return (
      <div className="personnel">
      <div className ="header-personnel">
        <div className="tittle">
          <h1 style={{color:"#23C7C6"}}>PERSONNEL LIST</h1>
          <h2 style={{color:"grey"}}> List of all personnels</h2>
        </div>
        <div className="search">
            <input className="search-column" placeholder="Find Personnels"></input>
            <button className="button">ADD PERSONNEL <span className="button-tittle">+</span></button>
        </div>
      </div>
      {console.log(employee.length/4)}

      <div className="card">
      {currentPosts.map((employee, i) => {
        
            return (
              <div>
                <Card key={i} employee={employee} />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "20px",
                    marginBottom: "30px"
                  }}
                >
                </div>
              </div>
            );
          })}
      </div>
      <div className= "pagination">
        <ul>
          {currentPage === 1 ? <li style={{color: "#bbbbbb"}}>Previous Page</li> : <li onClick={handleClick.bind(null, currentPage -1)}>Previous Page</li> }
          {currentPage === employee.length/4 ? <li style={{color: "#bbbbbb"}}>Next Page</li> : <li onClick={handleClick.bind(null, currentPage +1)}>Next Page</li> }
        </ul>
      {/* <Pagination
        postsPerPage={postsPerPage}
        totalPosts={employee.length}
        paginate={paginate}
      /> */}
      </div>
      </div>
    );
  }

export default Personnel;
