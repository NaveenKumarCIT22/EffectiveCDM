import Form from "../components/Form";
import Header from "../components/Header";
// import "./authPage.css";

const ProfilePage = () => {
  return (
    <>
      <Header title="EffectiveCDM" mode="main" />
      <div className="frm">
        <Form type="profile" />
      </div>
    </>
  );
};

export default ProfilePage;
