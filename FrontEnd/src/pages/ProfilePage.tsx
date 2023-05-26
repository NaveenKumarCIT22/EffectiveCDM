import { useNavigate } from "react-router-dom";
import Form from "../components/Form";
import Header from "../components/Header";
import { useEffect } from "react";
// import "./authPage.css";

const ProfilePage = () => {
  const navigate = useNavigate();
  const redirect = () => {
    console.log("Redirecting to login page...");
    useEffect(() => {
      navigate("/login");
      return () => {};
    }, []);
  };

  const usr = sessionStorage.getItem("ActiveUsr");

  return (
    <>
      <Header title="EffectiveCDM" mode="main" />
      {usr == null ? (
        redirect()
      ) : (
        <div className="frm">
          <Form type="profile" />
        </div>
      )}
    </>
  );
};

export default ProfilePage;
