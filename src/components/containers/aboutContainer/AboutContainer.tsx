import React from "react";
import Container from "../Container";
import Headers from "../../headers/Headers";
import portrait from "../../../assets/portraitG.jpeg";

import styles from "./AboutContainer.module.scss";
import Divider from "../../divider/Divider";

function AboutContainer() {
  return (
    <Container className={styles.infoContainer}>
      <img className={styles.portrait} src={portrait} alt="port" />
      <div className={styles.infoContainer__about_wrapper}>
        <Headers
          className={styles.infoContainer__about_wrapper__titles}
          type={Headers.Type.H1}
        >
          Anton Spiridonov
          <Headers type={Headers.Type.H2}>React Developer</Headers>
        </Headers>
        <p>
          My name is Anton, I've been developing on React for three years and
          I'm not going to stop learning new technologies. Cheerful and active
          person. I love sports especially football. When I have time, I
          volunteer. My position in life is to always tell the truth and be
          honest with myself. I am responsible and goal oriented. I like to talk
          and keep up the conversation. I will always support in difficult times
          and will do my best to help.
        </p>
        <Divider />
      </div>
    </Container>
  );
}

export default AboutContainer;
