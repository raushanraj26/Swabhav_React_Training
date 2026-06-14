import React from 'react'
import { useState } from 'react';
import CourseDetails from './CourseDetails';
const CourseTable = ({selectedStudent}) => {
    const [selectedCourse, setSelectedCourse] = useState(null);
  return (
    <>
    {
  selectedStudent && (
    <>
      <h2>Courses of {selectedStudent.name}</h2>

      <table border="1">
        <thead>
          <tr>
            <th>Id</th>
            <th>Course Name</th>
            <th>View</th>
          </tr>
        </thead>

        <tbody>
          {selectedStudent.courses.map((course) => (
            <tr key={course.id}>
              <td>{course.id}</td>
              <td>{course.courseName}</td>

              <td>
                <button
                  onClick={() => setSelectedCourse(course)}
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
        {selectedCourse && (
            <CourseDetails
                selectedCourse={selectedCourse}
            />
        )}
    </>
  )
}
  </>
  )

}

export default CourseTable