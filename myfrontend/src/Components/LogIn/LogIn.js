
import React from 'react'
import { Fragment } from 'react'
import "./LogIn.css";

export default function LogIn() {
  return (
    <Fragment>
      <div className="welcome-box">
Welcome!
      </div>
      <div className="login-form">
Login
<div className="input-container">
  <input type="text" className="user-name" placeholder="Enter username"/>
  <input type="text" className="user-password" placeholder="Enter password"/>
</div>
<div className="button-container">
<button>Login</button>
<button>Don't have an account? Signup</button>
</div>

      </div>
    </Fragment>
  )
}






// import React from "react";
// import "./LogIn.css";
// import axios from "axios";

// class LogIn extends React.Component {
//   // the states that are required to log in

//   state = {
//     username: "",
//     password: "",
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();

//     const { username, password } = this.state;

//     !username || !password
//       ? alert("All fields are mandatory")
//       : axios({
//           url: "/login",
//           method: "POST",
//           data: {
//             username,
//             password,
//           },
//         })
//           .then((response) => {
//             this.props.history.push("/spinner");
//             const isAuthenticated = response.data.isAuthenticated;
//             window.localStorage.setItem("isAuthenticated", isAuthenticated);
//           })
//           .catch((error) => {
//             alert("User not found. " + error.message);
//           });
//   };

//   handleChange = (e) => {
//     const { name, value } = e.target;
//     this.setState({
//       [name]: value,
//     });
//   };

//   render() {
//     const isAuthenticated = window.localStorage.getItem("isAuthenticated");
//     if (!isAuthenticated) {
//       window.localStorage.removeItem("isAuthenticated");
//     }
//     return (
//       <div className="main_div">
//         <div className="box">
//           <h1>Login</h1>
//           <form>
//             <div className="inputBox">
//               <input
//                 type="username"
//                 name="username"
//                 autoComplete="off"
//                 onChange={this.handleChange}
//               />
//               <label for="username">Username</label>
//             </div>
//             <div className="inputBox">
//               <input
//                 type="password"
//                 name="password"
//                 autoComplete="off"
//                 onChange={this.handleChange}
//               />
//               <label for="password">Password</label>
//             </div>
//             <input
//               onClick={this.handleSubmit}
//               type="submit"
//               value="login"
//               style={{ background: "rgb(194, 132,0)" }}
//             />
//             <p className="signup">
//               Don't have an account? <a href="/register">Register here.</a>
//             </p>
//           </form>
//         </div>
//       </div>
//     );
//   }
// }

// export default LogIn;
