



import React from 'react'
import { Fragment } from 'react'
import "./Register.css";

export default function Register() {
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

<p>Forgot Password?</p>

      </div>
    </Fragment>
  )
}





// import React from "react";
// import "../LogIn/LogIn.css";
// import axios from "axios";

// class Register extends React.Component {
//   state = {
//     username: "",
//     email: "",
//     password: "",
//     confirm_password: "",
//   };

//   handleChange = (e) => {
//     const { name, value } = e.target;
//     this.setState({
//       [name]: value,
//     });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();

//     const { username, email, password, confirm_password } = this.state;

//     !username || !password || !email || !confirm_password
//       ? alert("All fields are mandatory")
//       : password !== confirm_password
//       ? alert("Passwords not matched")
//       : axios({
//           url: "/register",
//           method: "POST",
//           data: {
//             username,
//             email,
//             password,
//             confirm_password,
//           },
//         })
//           .then(() => {
//             this.props.history.push("/login");
//           })
//           .catch((error) => {
//             console.log("Error occured: " + error);
//           });
//   };

//   render() {
//     return (
//       <div className="main_div">
//         <div className="box">
//           <h1>Register</h1>
//           <form onSubmit={this.handleSubmit}>
//             <div className="inputBox">
//               <input
//                 type="text"
//                 name="username"
//                 autocomplete="off"
//                 onChange={this.handleChange}
//               />
//               <label for="username">Username</label>
//             </div>
//             <div className="inputBox">
//               <input
//                 type="email"
//                 name="email"
//                 autocomplete="off"
//                 onChange={this.handleChange}
//               />
//               <label for="email">Email</label>
//             </div>
//             <div className="inputBox">
//               <input
//                 onChange={this.handleChange}
//                 type="password"
//                 name="password"
//                 autocomplete="off"
//               />
//               <label for="password">Password</label>
//             </div>
//             <div className="inputBox">
//               <input
//                 type="password"
//                 name="confirm_password"
//                 autocomplete="off"
//                 onChange={this.handleChange}
//               />
//               <label for="confirm_password">Confirm Password</label>
//             </div>
//             <input
//               type="submit"
//               value="register"
//               style={{ background: "rgb(194, 132,0)" }}
//             />
//             <p className="signup">
//               Already have an account? <a href="/login">Login</a>
//             </p>
//           </form>
//         </div>
//       </div>
//     );
//   }
// }

// export default Register;
