import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";

export default function Footer() {
  return (
    <>
      {/* <script
        src="https://kit.fontawesome.com/a076d05399.js"
        crossOrigin={"anonymous"}
      ></script> */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
      ></link>
      <MDBFooter className="bg-dark text-center fixed-bottom text-white">
        <MDBContainer className="p-4 pb-0">
          <section className="mb-4 d-flex justify-content-center">
            {/* <MDBBtn
              floating
              className="m-1"
              style={{ backgroundColor: "#3b5998" }}
              href="#!"
              role="button"
            >
              <MDBIcon fab icon="facebook-f" />
            </MDBBtn> */}

            {/* <MDBBtn
              floating
              className="m-1"
              style={{ backgroundColor: "#55acee" }}
              href="#!"
              role="button"
            >
              <MDBIcon fab icon="twitter" />
            </MDBBtn> */}

            <MDBBtn
              floating
              className="m-1"
              style={{ backgroundColor: "#dd4b39" }}
              href="naveenkumarm.aids2022@citchennai.net"
              role="button"
            >
              <MDBIcon fab icon="google" />
            </MDBBtn>

            {/* <MDBBtn
              floating
              className="m-1"
              style={{ backgroundColor: "#ac2bac" }}
              href="#!"
              role="button"
            >
              <MDBIcon fab icon="instagram" />
            </MDBBtn> */}

            <MDBBtn
              floating
              className="m-1"
              style={{ backgroundColor: "#0082ca" }}
              href="https://www.linkedin.com/in/naveen-kumar-m-366b75256/"
              role="button"
            >
              <MDBIcon fab icon="linkedin-in" />
            </MDBBtn>

            <MDBBtn
              floating
              className="m-1"
              style={{ backgroundColor: "#333333" }}
              href="https://github.com/NaveenKumarCIT22/LearnBuddy"
              role="button"
            >
              <MDBIcon fab icon="github" />
            </MDBBtn>
          </section>
        </MDBContainer>

        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2023 Copyright:&nbsp;
          <a className="text-white" href="#">
            EffectiveCDM
          </a>
        </div>
      </MDBFooter>
    </>
  );
}
