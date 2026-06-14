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