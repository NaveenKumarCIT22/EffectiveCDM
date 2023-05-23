import Form from "../components/Form";
import Header from "../components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./authPage.css";

const LoginPage = () => {
  return (
    <>
      <Header title="EffectiveCDM" mode="empty" />
      <div className="frm">
        <Form type="signin" />
      </div>
    </>
  );
};

export default LoginPage;
