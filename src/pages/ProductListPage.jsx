import React, { useRef, useEffect, useState } from "react";
import { FixedSizeGrid as Grid } from "react-window";

import ProductCard from "../components/Cards/ProductCard";
import products from "../data/productList.json";

import "./productListPage.scss";

export default function ProductListPage() {
  const gridContainerRef = useRef(null);
  const [gridWidth, setGridWidth] = useState(0);

  useEffect(() => {
    setGridWidth(gridContainerRef?.current?.offsetWidth);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", () =>
      setGridWidth(gridContainerRef?.current?.offsetWidth)
    );

    return () => {
      window.removeEventListener("resize", () =>
        setGridWidth(gridContainerRef?.current?.offsetWidth)
      );
    };
  }, [window.innerWidth]);

  const getColumnCount = () => {
    let screenWidth = window.innerWidth;
    if (screenWidth >= 992) {
      return 4;
    }
    if (screenWidth >= 576) {
      return 3;
    }
    if (screenWidth >= 420) {
      return 2;
    }
    return 1;
  };

  const rowCount = Math.ceil(products?.length / getColumnCount());

  return (
    <div className="container-lg" ref={gridContainerRef}>
      <Grid
        className="grid"
        itemData={products}
        columnCount={getColumnCount()}
        columnWidth={gridWidth / getColumnCount() - 16}
        rowCount={rowCount}
        rowHeight={window.innerWidth < 420 ? 300 : 250}
        height={window.innerHeight - 150}
        width={gridWidth}
        useIsScrolling
      >
        {({ data, columnIndex, rowIndex, isScrolling, style }) => (
          <ProductCard
            products={data}
            columnIndex={columnIndex}
            rowIndex={rowIndex}
            columnCount={getColumnCount()}
            isScrolling={isScrolling}
            style={style}
          />
        )}
      </Grid>
    </div>
  );
}
