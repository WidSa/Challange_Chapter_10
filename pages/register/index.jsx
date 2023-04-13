import { Container, Row } from "react-bootstrap";
import Link from "next/link";
import RegisterForm from "../../components/forms/RegisterForm";
import Head from "next/head";

export default function Register() {
  return (
    <>
      <Head>
        <title>Register Page</title>
        <link rel="stylesheet" href="/styles/Register.css" />
      </Head>
      <div className="bg-image">
        <div className="container-fluid">
          <Row>
            <div className="p-5 col-lg bg-left">
              <Container className="d-flex flex-column justify-content-center align-content-center min-vh-100 text-center text-light">
                <h1>Don't have an account?</h1>
                <p>
                  <Link href="#register" className="text-warning link-light">
                    Register{" "}
                  </Link>
                  to access all the features
                </p>
              </Container>
            </div>
            <div className="bg-right p-5 col-lg">
              <Container className="d-flex flex-column align-content-center justify-content-center text-light min-vh-100" id="register">
                <h1 className="text-center text-warning">Register Page</h1>
                <p className="text-center">
                  Already a member?
                  <Link href="/login" className="text-decoration-none text-warning link-light">
                    {" "}
                    Login
                  </Link>
                </p>
                <RegisterForm />
              </Container>
            </div>
          </Row>
        </div>
      </div>
    </>
  );
}
