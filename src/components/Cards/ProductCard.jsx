import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./productCard.scss";
import ProductCardSkeleton from "../Skeletons/ProductCardSkeleton";

export default function ProductCard({
  products,
  columnIndex,
  rowIndex,
  columnCount,
  isScrolling,
  style,
}) {
  const index = columnCount * rowIndex + columnIndex;
  const imageList = products[index]?.images.map((item) => item.image);

  return (
    <>
      {isScrolling ? (
        <div className="p-2" style={style}>
          <ProductCardSkeleton />
        </div>
      ) : (
        products[index] && (
          <div className="p-2" style={style}>
            <div className="product-card card shadow-sm border-0 rounded-3 h-100">
              <div className="product-image-container m-2">
                <Slider
                  initialSlide={0}
                  slidesToScroll={1}
                  slidesToShow={1}
                  autoplay={true}
                  speed={1000}
                  autoplaySpeed={5000}
                  pauseOnHover={false}
                  arrows={false}
                  infinite
                  dotsClass="slick-dots"
                >
                  {imageList?.map((image, i) => (
                    <div key={i} className="product-image-wrapper">
                      <img
                        className="product-image rounded-3"
                        src={image}
                        alt="product"
                      />
                    </div>
                  ))}
                </Slider>
              </div>
              <div className="product-info-container text-center">
                <div className="text-primary lh-sm">{products[index]?.id}</div>
                <div className="lh-sm">{products[index]?.name}</div>
                <div className="lh-sm">
                  Rs. {products[index]?.price} | {products[index]?.quantity}
                  pieces
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </>
  );
}
