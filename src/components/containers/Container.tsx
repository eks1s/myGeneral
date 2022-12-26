import classNames from "classnames";
import React, { memo } from "react";

import styles from "./Container.module.scss";

interface Props {
  children: React.ReactNode;
  className?: string;
}

function Container(props: Props) {
  const { children, className } = props;
  return (
    <div className={classNames(styles.container, className)}>{children}</div>
  );
}

export default memo(Container);
