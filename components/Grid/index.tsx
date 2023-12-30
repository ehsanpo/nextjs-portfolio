import React from "react";
import styles from "./Grid.module.scss";

interface GridProps {
  columns: number;
  children: React.ReactNode;
}

const Grid: React.FC<GridProps> = ({ columns, children }) => {
  let gridClass = styles.grid;
  if (columns === 4) {
    gridClass += ` ${styles["cols-4"]}`;
  } else if (columns === 3) {
    gridClass += ` ${styles["cols-3"]}`;
  }

  return <div className={gridClass}>{children}</div>;
};

export default Grid;
