import Form from "../components/Form";
import Header from "../components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./authPage.css";
import React from "react";

interface frmProps {
  type: "signin" | "signup";
}

const LoginPage: React.FC<frmProps> = ({ type }) => {
  return (
    <>
      <Header title="EffectiveCDM" mode="empty" />
      <div className="frm">
        <Form type={type} />
      </div>
    </>
  );
};

export default LoginPage;
