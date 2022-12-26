import Divider from "../../components/divider/Divider";
import AboutContainer from "../../components/containers/aboutContainer/AboutContainer";
import ComponentsContainer from "../../components/containers/componentsContainer/ComponentsContainer";
import SkillsContainer from "../../components/containers/skillsContainer/SkillsContainer";

function Main() {
  return (
    <>
      <AboutContainer />
      <Divider />
      <SkillsContainer />
      <Divider />
      <ComponentsContainer />
      <Divider />
    </>
  );
}

export default Main;
