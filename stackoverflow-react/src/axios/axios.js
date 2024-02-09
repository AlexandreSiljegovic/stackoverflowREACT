import axios from "axios";

const baseURL = "http://127.0.0.1:8000/";
const token = "";
const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `${token}`,
  },
});
// function to make API requests
api
  .get("/users")
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
export function registerUser(data) {
  api
    .post("/register/", data)
    .then((response) => {
      console.log("Register response:", response.data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}
api
  .post("/login/", {
    username: "username",
    password: "password",
  })
  .then((response) => {
    console.log("Login response:", response.data);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

// api
//   .post("/register/", {
//     username: "username",
//     password: "password",
//     email: "email",
//     first_name: "first_name",
//     last_name: "last_name",
//   })
//   .then((response) => {
//     console.log("Register response:", response.data);
//   })
//   .catch((error) => {
//     console.error("Error fetching data:", error);
//   });

api
  .get("/logout/")
  .then((response) => {
    console.log("Logout response:", response.data);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

api.get("/user/").then((response) => {
  console.log("User response:", response.data);
});
