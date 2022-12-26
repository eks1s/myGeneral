import Container from "../Container";
import Headers from "../../headers/Headers";

import styles from "./ComponentsContainer.module.scss";
import { componentsRoutes } from "../../../routes/routes";
import Card from "../../cards/card/Card";
import Widgets from "../../widgets/Widgets";

function ComponentsContainer() {
  return (
    <div className={styles.componentsContainerWrapper}>
      <Container className={styles.cardsContainer}>
        <Headers className={styles.cardsHeader} type={Headers.Type.H1}>
          My components for example...
        </Headers>
        <div className={styles.cardsWrapper}>
          {componentsRoutes.map((component) => {
            const { name, to } = component;
            return (
              <Card className={styles.card} key={name} to={to}>
                <Headers type={Headers.Type.H2}>{name}</Headers>
              </Card>
            );
          })}
        </div>
      </Container>
      <Widgets />
    </div>
  );
}

export default ComponentsContainer;
