import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import CDMPage from "./CDMPage";
import { useEffect } from "react";
import ViewData from "../components/ViewData";

const ViewPage = () => {
  const navigate = useNavigate();
  const redirect = () => {
    console.log("Redirecting to login page...");
    useEffect(() => {
      navigate("/login");
      return () => {};
    }, []);
  };
  return (
    <>
      <Header title="EffectiveCDM" mode="main" />
      {sessionStorage.getItem("ActiveUsr") == null ? (
        redirect()
      ) : (
        <ViewData />
        // <CDMPage mode="view" />
      )}
    </>
  );
};

export default ViewPage;
