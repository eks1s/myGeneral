import WidgetCard from "../cards/widgetCard/WidgetCard";
import Divider from "../divider/Divider";
import Headers from "../headers/Headers";
import styles from "./Widgets.module.scss";

function Widgets() {
  return (
    <div className={styles.widgetsWrapper}>
      <Headers className={styles.header} type={Headers.Type.H3}>
        Widgets
      </Headers>
      <Divider />
      <WidgetCard>name</WidgetCard>
    </div>
  );
}

export default Widgets;
