import Header from "../components/Header";
import CDMPage from "./CDMPage";

const ViewPage = () => {
  return (
    <>
      <Header title="EffectiveCDM" mode="main" />
      <CDMPage mode="view" />
    </>
  );
};

export default ViewPage;
