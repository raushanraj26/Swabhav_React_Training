import axios from "axios";
// {
//     "token": "kdd",
//     "tokenType": "",
//     "email": "",
//     "role": "",
//     "expiresIn": 86400000
// }
export const loginUser = async (email, password) => {
    try {
        const response = await axios.post("http://localhost:8080/api/auth/login", {
            email,
            password
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching users:", error);
        return;
    }
}


// const login = async() => {

//    const response = await axios.post(
//       "http://localhost:8080/api/auth/login",
//       {email,password}
//    );

//    const token = response.data.token;

//    localStorage.setItem("token",token);

//    const decoded = jwtDecode(token);

//    const role = decoded.role;

//    if(role==="ADMIN"){
//       navigate("/admin");
//    }
//    else if(role==="AGENT"){
//       navigate("/agent");
//    }
//    else{
//       navigate("/customer");
//    }
//  }

