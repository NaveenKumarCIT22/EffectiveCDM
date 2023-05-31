import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
// import CDMPage from "./CDMPage";
import { useEffect } from "react";
import ModifyData from "../components/ModifyData";

const ModifyPage = () => {
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
        // <CDMPage mode="modify" />
        <ModifyData />
      )}
    </>
  );
};

export default ModifyPage;
