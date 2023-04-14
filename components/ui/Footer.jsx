import Link from "next/link";

export default function Footer() {
  return (
    <footer id="footer">
      {/* <div className="text-light container-fluid ps-5 pe-5 m-0">
        <hr />
      </div> */}
      <div className="container-fluid footer-link ps-5 pt-3 pe-5">
        <div className="row justify-content-between">
          <div className="col-lg-4 d-inline">
            <p className="text-light">© 2023 Your Games, inc. All Rights Reserved</p>
          </div>
          <div className="col-lg-5 d-flex justify-content-around">
            <Link href="/privacy-policy" className="text-decoration-none link-warning text-light">
              Privacy Policy
            </Link>{" "}
            |
            <Link href="/toc" className="text-decoration-none link-warning text-light">
              Terms of Services
            </Link>{" "}
            |
            <Link href="/coc" className="text-decoration-none link-warning text-light">
              Code of Conduct
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
