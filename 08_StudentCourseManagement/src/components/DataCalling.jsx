import React from "react";
import axios from "axios";
import CourseTable from "./CourseTable";
import { useState } from "react";
import { getAllUsers } from "../service/Student";
const DataCalling = () => {
  const [users, setUsers] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);


  const readData = async () => {
    const response = await getAllUsers();
    console.log(response);
    setUsers(response);
  };
  return (
    <>
      <div>
        <button onClick={readData}>Show All Students</button>
        <button>Add Student</button>
        
      </div>
      <div>
        <table border="1">
          <thead>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Department</th>
            <th>View Courses</th>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.mobile}</td>
                <td>{user.department}</td>
                <td>
                  <button onClick={() => setSelectedStudent(user)}>
                    View Courses
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {selectedStudent && <CourseTable selectedStudent={selectedStudent} />}
      </div>
    </>
  );
};

export default DataCalling;
