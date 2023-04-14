import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { auth } from "../../services/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function NavbarTop() {
  const router = useRouter();
  const [user, setUser] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user.email);
      } else {
        setUser("Account");
      }
    });
  }, []);

  const handleLogout = (e) => {
    e.preventDefault();
    signOut(auth)
      .then(() => {
        console.log("you are logged out");
        router.push("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <Navbar expand="lg" sticky="top" className="navbar-dark text-warning ">
      <div className="container-fluid p-1 ms-5 me-5">
        <Navbar.Brand href="/home" className="text-warning d-flex align-content-center">
          <img alt="" src="logo.svg" className="d-inline-block align-top" /> <span className="fw-bold">The Game</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto d-flex">
            <Nav.Link href="/home" className="link-warning text-light">
              Home
            </Nav.Link>
            <Nav.Link href="/game-list" className="link-warning text-light">
              Game List
            </Nav.Link>
          </Nav>
          <NavDropdown title={user} id="basic-nav-dropdown">
            <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#" onClick={handleLogout}>
              Logout
            </NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}
