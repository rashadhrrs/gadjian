import React from "react";
import "./Card.css";

function Card({ employee }) {
  const dob = employee.dob.date;
  const birthdayDD = dob.slice(8, 10);
  const birthdayMM = dob.slice(5, 7);
  const birthdayYYYY = dob.slice(0, 4);
  return (
    <div className="Card">
      <div className="Card-name">
        Personnel ID:{" "}
        <span
          style={{
            color: "#23C7C6",
          }}
        >
          {employee.login.username}
        </span>
      </div>
      <div className="Card-img">
        <img src={employee.picture.large} alt="" />
      </div>
      <div className="Card-info">
        <div className="Card-data">
          <p className="title">Name</p>
          <p>
            {employee.name.first} {employee.name.last}
          </p>
        </div>
        <div className="Card-data">
          <p className="title">Telephone</p>
          <p>{employee.phone}</p>
        </div>
        <div className="Card-data">
          <p className="title">Birthday</p>
          <p>
            {birthdayDD}-{birthdayMM}-{birthdayYYYY}
          </p>
        </div>
        <div className="Card-data">
          <p className="title">Email</p>
          <p>{employee.email}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
