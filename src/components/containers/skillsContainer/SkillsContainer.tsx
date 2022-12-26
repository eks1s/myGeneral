import classNames from "classnames";
import SkilsCard from "../../cards/skilsCard/SkillsCard";
import Container from "../Container";
import reactLogo from "../../../assets/reactLogo.png";
import reduxLogo from "../../../assets/reduxLogo.png";
import JSLogo from "../../../assets/javascriptLogo.png";
import TypeScriptLogo from "../../../assets/tsLogo.png";
import sassLogo from "../../../assets/sassLogo.png";
import WebpackLogo from "../../../assets/webpackLogo.png";
import ViteLogo from "../../../assets/viteLogo.png";
import JestLogo from "../../../assets/jestLogo.png";
import GraphQLLogo from "../../../assets/GraphQLLogo.png";

import styles from "./SkillsContainer.module.scss";
import Headers from "../../headers/Headers";

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const array2 = [
  { name: "React", link: reactLogo },
  { name: "Redux", link: reduxLogo },
  { name: "JavaScript", link: JSLogo },
  { name: "TypeScript", link: TypeScriptLogo },
  { name: "SASS", link: sassLogo },
  { name: "Webpack", link: WebpackLogo },
  { name: "Vite", link: ViteLogo },
  { name: "Jest", link: JestLogo },
  { name: "GraphQL", link: GraphQLLogo },
];

function SkillsContainer() {
  return (
    <>
      <Headers type={Headers.Type.H2}>Main technology stack</Headers>
      <Container className={styles.skillsContainer}>
        {array2.map((itm, index, array) => {
          return (
            <SkilsCard
              className={classNames(
                styles.skillsCard,
                array[index] && styles.hover
              )}
              key={itm.name}
            >
              <img className={styles.logo} src={itm.link} alt="logo" />
              <Headers className={styles.name} type={Headers.Type.H4}>
                {itm.name}
              </Headers>
            </SkilsCard>
          );
        })}
      </Container>
    </>
  );
}

export default SkillsContainer;
