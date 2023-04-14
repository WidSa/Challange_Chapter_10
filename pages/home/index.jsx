import { Container } from "react-bootstrap";
// import Footer from "../components/ui/Footer";
// import NavbarTop from "../components/ui/Navbar";
import { useRouter } from "next/router";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../services/firebase";
import Head from "next/head";
import Layout from "@/components/layout";
import Link from "next/link";

export default function Home() {
  const router = useRouter();
  const isLoggedIn = (e) => {
    e.preventDefault();
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push("/login");
        console.log("please login first");
      }
    });
  };
  return (
    <Layout>
      <Head>
        <title>Home</title>
        <link rel="stylesheet" href="/styles/Home.css" />
      </Head>
      <div className="home-bg-image" onLoad={isLoggedIn}>
        {/* <NavbarTop /> */}
        <Container className="d-flex flex-column align-content-center justify-content-center text-center text-light min-vh-100">
          <h1 className="mb-4 home-title">Are you ready to play a game?</h1>
          <p className="mb-4 home-subtitle">Explore our games</p>
          <div className="info">
            <Link className="btn btn-warning" href="/game-list">
              Game List
            </Link>
          </div>
        </Container>
      </div>
    </Layout>
  );
}
