import { useState, MouseEvent, ChangeEvent, useEffect } from "react";
import React from "react";
import axios from "axios";
import { Link, useParams, useNavigate, Navigate } from "react-router-dom";
interface frmProps {
  type: "signin" | "signup" | "profile";
}

const Form: React.FC<frmProps> = ({ type }) => {
  const navigate = useNavigate();
  if (type == "signin") {
    const [users, setUsers] = useState([]);

    useEffect(() => {
      const fetchAllBooks = async () => {
        try {
          const res = await axios.get("http://localhost:8800/usrslgninfo");
          setUsers(res.data);
          console.log(users);
        } catch (err) {
          console.log(err);
        }
      };
      fetchAllBooks();
    }, []);
    // States for Login
    const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // States for checking the errors
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);
    const [errorPrompt, setErrorPrompt] = useState(
      "Please enter all the fields"
    );

    // Handling the name change
    const handleName = (e: ChangeEvent) => {
      setName(e.target.value);
      setSubmitted(false);
      console.log(e.target);
    };

    // Handling the email change
    // const handleEmail = (e) => {
    //   setEmail(e.target.value);
    //   setSubmitted(false);
    // };

    // Handling the password change
    const handlePassword = (e: ChangeEvent) => {
      setPassword(e.target.value);
      setSubmitted(false);
    };

    interface usrProps {
      name: string;
      password: string;
      email: string;
    }

    // Handling the form submission
    const handleSubmit = (e: MouseEvent) => {
      e.preventDefault();
      if (name === "" || password === "") {
        setError(true);
      } else {
        setError(false);
        setErrorPrompt("Please enter all the fields.");
        console.log(name, password);
        users.forEach((user: usrProps) => {
          if (name == user.name && password == user.password) {
            console.log(user);
            setSubmitted(true);
            navigate("/");
            sessionStorage.setItem("ActiveUsr", name);
          }
        });
      }
    };

    // Showing success message
    const successMessage = () => {
      return (
        <div
          className="success"
          style={{
            display: submitted ? "" : "none",
          }}
        >
          <h6>User {name} successfully logged in!!</h6>
        </div>
      );
    };

    // Showing error message if error is true
    const errorMessage = () => {
      return (
        <div
          className="error"
          style={{
            display: error ? "" : "none",
          }}
        >
          <h6>{errorPrompt}</h6>
        </div>
      );
    };

    return (
      <div className="form">
        <div>
          <h1>User Login</h1>
        </div>

        {/* Calling to the methods */}
        <div className="messages">
          {errorMessage()}
          {successMessage()}
        </div>

        <form>
          {/* Labels and inputs for form data */}
          <label className="label">Name</label>
          <input
            onChange={handleName}
            className="input"
            value={name}
            type="text"
            placeholder="Enter Company Name"
          />

          {/* <label className="label">Email</label>
          <input
            onChange={handleEmail}
            className="input"
            value={email}
            type="email"
          /> */}

          <label className="label">Password</label>
          <input
            onChange={handlePassword}
            className="input"
            value={password}
            type="password"
            placeholder="Enter Password"
          />

          <button onClick={handleSubmit} className="btn" type="submit">
            Submit
          </button>

          <label className="label">
            New User! -&gt;{" "}
            <Link
              to="/register"
              className="Link"
              onClick={window.location.reload}
              replace
            >
              Register here...
            </Link>
          </label>
        </form>
      </div>
    );
  } else if (type == "signup") {
    const [user, setUser] = useState({
      name: "",
      email: "",
      password: "",
    });
    // States for Login
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // States for checking the errors
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);
    const [errorPrompt, setErrorPrompt] = useState(
      "Please enter all the fields"
    );

    // Handling the name change
    const handleName = (e: ChangeEvent) => {
      setName(e.target.value);
      setSubmitted(false);
      console.log(e.target);
      handleChange(e);
    };

    // Handling the email change
    const handleEmail = (e: ChangeEvent) => {
      setEmail(e.target.value);
      if (email.includes("@") && email.includes(".")) {
        setSubmitted(false);
        setError(false);
        handleChange(e);
      } else {
        setError(true);
        setErrorPrompt("Please Enter Valid Email.");
      }
    };

    // Handling the password change
    const handlePassword = (e: ChangeEvent) => {
      setPassword(e.target.value);
      setSubmitted(false);
      handleChange(e);
    };

    const handleChange = (e: ChangeEvent) => {
      setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
      console.log(e.target);
    };

    // Handling the form submission
    const handleSubmit = (e: MouseEvent) => {
      e.preventDefault();
      if (name === "" || password === "" || email === "") {
        setError(true);
      } else {
        setSubmitted(true);
        setError(false);
        setErrorPrompt("Please enter all the fields.");
        handleClick(e);
      }
    };

    const handleClick = async (e: MouseEvent) => {
      e.preventDefault();
      try {
        await axios.post("http://localhost:8800/usrslgninfo", user);
        navigate("/");
        sessionStorage.setItem("ActiveUsr", name);
      } catch (err) {
        console.log(err);
        setError(true);
      }
    };

    // Showing success message
    const successMessage = () => {
      return (
        <div
          className="success"
          style={{
            display: submitted ? "" : "none",
          }}
        >
          <h6>User {name} successfully logged in!!</h6>
        </div>
      );
    };

    // Showing error message if error is true
    const errorMessage = () => {
      return (
        <div
          className="error"
          style={{
            display: error ? "" : "none",
          }}
        >
          <h6>{errorPrompt}</h6>
        </div>
      );
    };

    return (
      <div className="form">
        <div>
          <h1>User Login</h1>
        </div>

        {/* Calling to the methods */}
        <div className="messages">
          {errorMessage()}
          {successMessage()}
        </div>

        <form>
          {/* Labels and inputs for form data */}
          <label className="label">Name</label>
          <input
            onChange={handleName}
            className="input"
            name="name"
            value={name}
            type="text"
            placeholder="Enter Company Name"
          />

          <label className="label">Email</label>
          <input
            onChange={handleEmail}
            className="input"
            name="email"
            value={email}
            type="email"
            placeholder="Enter Company Mail"
          />

          <label className="label">Password</label>
          <input
            onChange={handlePassword}
            className="input"
            name="password"
            value={password}
            type="password"
            placeholder="Enter Password"
          />

          <button onClick={handleSubmit} className="btn" type="submit">
            Submit
          </button>

          <label className="label">
            New User! -&gt;{" "}
            <Link
              to="/login"
              className="Link"
              onClick={window.location.reload}
              replace
            >
              Login here...
            </Link>
            {/* <a href="/login" target="" className="Link">
              Login here...
            </a> */}
          </label>
        </form>
      </div>
    );
  } else if (type == "profile") {
    const { usrid } = useParams();
    return (
      <>
        <form>
          <h1>Profile</h1>
          <label htmlFor="name" className="label">
            Name:
          </label>
          <input
            type="text"
            id="name"
            className="input"
            value={`Company ${usrid}`}
            disabled
            style={{ backgroundColor: "whitesmoke" }}
          />
          <label htmlFor="email" className="label">
            Email:
          </label>
          <input
            type="email"
            id="email"
            className="input"
            value={"Company@email.net"}
            disabled
            style={{ backgroundColor: "whitesmoke" }}
          />
        </form>
      </>
    );
  } else {
    return <></>;
  }
};

export default Form;
