import classNames from "classnames";
import React from "react";
import SkilsCard from "../../cards/skilsCard/SkillsCard";
import Container from "../Container";

import styles from "./SkillsContainer.module.scss";

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function SkillsContainer() {
  return (
    <Container className={styles.skillsContainer}>
      {array.map((itm, index, array) => {
        return (
          <SkilsCard
            className={classNames(
              styles.skillsCard,
              array[index] && styles.hover
            )}
            key={itm}
          >
            Ghbdtn
          </SkilsCard>
        );
      })}
    </Container>
  );
}

export default SkillsContainer;
