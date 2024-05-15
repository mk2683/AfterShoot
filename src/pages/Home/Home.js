// Import Dependency
import React from "react";
import { FixedSizeGrid as Grid } from "react-window";

// Import Components
import Cell from "../../components/Cell/Cell";

// Import Constants
import { imageIndex } from "../../constants/imageIndex";
import {
  columnCount,
  columnWidth,
  rowHeight,
  rowCount,
} from "../../constants/home";

// Import Styles
import "./Home.css";

const Home = () => (
  <div className="container">
    <h1>Photo Album Collection: Using "react-window"</h1>
    <Grid
      className="Grid"
      columnCount={columnCount}
      columnWidth={columnWidth}
      height={rowCount * rowHeight}
      rowCount={Math.ceil(imageIndex.length / columnCount)}
      rowHeight={rowHeight}
      width={columnCount * columnWidth}
    >
      {({ columnIndex, rowIndex, style }) => (
        <Cell
          columnIndex={columnIndex}
          rowIndex={rowIndex}
          style={style}
          imageIndex={imageIndex[rowIndex * columnCount + columnIndex]}
        />
      )}
    </Grid>
  </div>
);

export default Home;
