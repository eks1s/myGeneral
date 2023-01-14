import Divider from "../../components/divider/Divider";
import AboutContainer from "../../components/containers/aboutContainer/AboutContainer";
import ComponentsContainer from "../../components/containers/componentsContainer/ComponentsContainer";
import SkillsContainer from "../../components/containers/skillsContainer/SkillsContainer";
import CheckboxSelekt from "../../components/checkboxSelekt/checkboxSelekt";

function Main() {
    return (
        <>
            <AboutContainer />
            <Divider />
            <SkillsContainer />
            <Divider />
            <ComponentsContainer />
            <Divider />
            <CheckboxSelekt />
        </>
    );
}

export default Main;
