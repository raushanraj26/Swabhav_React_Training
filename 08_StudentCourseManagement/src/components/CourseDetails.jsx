import React from "react";

const CourseDetails = ({ selectedCourse }) => {
  return (
    <>
      {selectedCourse && (
        <div
          style={{
            border: "1px solid black",
            padding: "10px",
            marginTop: "20px",
          }}
        >
          <h3>Course Details</h3>

          <p>Id : {selectedCourse.id}</p>

          <p>Name : {selectedCourse.courseName}</p>

          <p>Duration : {selectedCourse.duration}</p>

          <p>Trainer : {selectedCourse.trainer}</p>

          <p>Fee : ₹{selectedCourse.fee}</p>
        </div>
      )}
    </>
  );
};

export default CourseDetails;
