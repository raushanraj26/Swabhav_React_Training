import React from "react";
import axios from "axios";
import { useState } from "react";
import { getAllUsers } from "../service/Student";
const DataCalling = () => {
  const [users, setUsers] = useState([]);
  const readData = async () => {
    // ----------------Fetch API-----------------
    // const response = await fetch("https://jsonplaceholder.typicode.com/users");
    // const data = await response.json();
    // console.log(data);

    // ----------------Axios-----------------
    // const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    // console.log(response);
    // console.log(response.data);

    const response = await getAllUsers();
    console.log(response);
    setUsers(response);
  };
  return (
    <>
    <div>
      <button onClick={readData}>Read Data</button>
    </div>
    <div>
 

        {
      users.map((user) => {
         return (
        
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>Email: {user.email}</p>
          <p>Mobile: {user.mobile}</p>
          <p>Department: {user.department}</p>

          <h4>Courses</h4>

          {user.courses?.length > 0 ? (
            user.courses.map((course) => (
              <div key={course.id} >
                <p>
                  <strong>Course Name:</strong> {course.courseName}
                </p>
                <p>
                  <strong>Duration:</strong> {course.duration}
                </p>
                <p>
                  <strong>Trainer:</strong> {course.trainer}
                </p>
                <p>
                  <strong>Fee:</strong> ₹{course.fee}
                </p>
              </div>
            ))
          ) : (
            <p>No courses enrolled</p>
          )}
        </div>
         )
      })
    }
    </div>
    </>
  );
};

export default DataCalling;
