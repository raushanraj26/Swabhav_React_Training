import axios from "axios";
export const getAllUsers = async () => {
    try {
        const response = await axios.get("http://localhost:8080/api/students/get-all-student");

        return response.data;
    } catch (error) {
        console.error("Error fetching users:", error);
        return;
    }
}
//  const addStudent=async (student)=>{
//      try {
//         const response = await axios.post("http://localhost:8080/api/students/add-student", student);
//         return response.data;
//     } catch (error) {
//         console.error("Error adding student:", error);
//         return;
//     }
// }