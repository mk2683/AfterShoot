// Import Constants
import { imageUrl } from "../../constants/home";

// Import Styles
import "./Cell.css";

const Cell = ({ columnIndex, rowIndex, style, imageIndex }) => (
  <div
    className={
      columnIndex % 2
        ? rowIndex % 2 === 0
          ? "GridItemOdd"
          : "GridItemEven"
        : rowIndex % 2
        ? "GridItemOdd"
        : "GridItemEven"
    }
    style={style}
  >
    <img
      className="GridImage"
      key={imageIndex}
      src={`${imageUrl}${imageIndex.id}`}
      alt={`Random {imageIndex.id}`}
    />
    <h6>I: {imageIndex.id}</h6>
  </div>
);

export default Cell;
