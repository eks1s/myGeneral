import classNames from "classnames";
import React from "react";
import styles from "./WidgetCard.module.scss";

interface Props {
  children: React.ReactNode;
  className?: string;
}

function widgetCard(props: Props) {
  const { children, className } = props;
  return (
    <div className={classNames(styles.widgetCard, className)}>{children}</div>
  );
}

export default widgetCard;
