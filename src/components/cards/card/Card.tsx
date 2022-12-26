import classNames from "classnames";
import React, { memo } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./Card.module.scss";

interface Props {
  children: React.ReactNode;
  to?: string;
  className?: string;
}

function Card(props: Props) {
  const { children, to, className } = props;
  const navigate = useNavigate();

  const onClick = () => {
    if (to) {
      navigate(to);
    }

    return;
  };

  return (
    <div
      onClick={onClick}
      className={classNames(styles.card, to && styles.link, className)}
    >
      {children}
    </div>
  );
}

export default memo(Card);
