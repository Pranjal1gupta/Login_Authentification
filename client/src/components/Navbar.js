import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const history = useNavigate();

  const email = localStorage.getItem("loginemail");

  const handelLogin = () => {
    fetch("/logout", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => {
        localStorage.clear();
        history("/");
        if (!res.status === 200) {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          <b>MY DEMO APP</b>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">

            <li className="nav-item">
              {!email?<Link className="nav-link" to="/">Home</Link>:null}
            </li>

            <li className="nav-item">
              {email?<Link className="nav-link" to="/securepage">About</Link>:null}
            </li>

            {/* <li className="nav-item">
        <Link className="nav-link" to="#">Contact</Link>
      </li> */}
          </ul>
          {email ? (
            <ul className="navbar-nav">
              <Link to="/logout">
                <button
                  className="btn btn-outline-primary my-2 my-sm-0 mx-2"
                  type="submit"
                  onClick={handelLogin}
                >
                  Logout
                </button>
              </Link>
            </ul>
          ) : (
            <ul className="navbar-nav">
              <Link to="/signup">
                <button
                  className="btn btn-outline-primary my-2 my-sm-0 mx-2"
                  type="submit"
                >
                  Signup
                </button>
              </Link>
              <Link to="/login">
                <button
                  className="btn btn-outline-primary my-2 my-sm-0 mx-2"
                  type="submit"
                >
                  Login
                </button>
              </Link>
            </ul>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
