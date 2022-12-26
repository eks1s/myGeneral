import classNames from "classnames";
import { memo } from "react";

import styles from "./SkillsCard.module.scss";

interface Props {
  children: React.ReactNode;
  className?: string;
}

function SkilsCard(props: Props) {
  const { children, className } = props;

  return (
    <div className={classNames(styles.skillsCard, className)}>{children}</div>
  );
}

export default memo(SkilsCard);
