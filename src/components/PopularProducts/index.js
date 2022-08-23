import React, { useState } from "react";
import cn from "classnames";
import styles from "./PopularProducts.module.sass";
import { Link } from "react-router-dom";
import Card from "../Card";
import ModalProduct from "../ModalProduct";

const products = [
  {
    title: " v2 Zoom Boots",
    price: "Ξ 24.76",
    active: true,
    image: "/images/content/shoe.png",
    image2x: "/images/content/shoe.png",
  },
  {
    title: "Otherside XYZ Serum",
    price: "Ξ 197.3",
    active: false,
    image: "/images/content/otherside.png",
    image2x: "/images/content/otherside.png",
  },
  {
    title: " Greenpath Vortex",
    price: "Ξ 984.124",
    active: true,
    image: "/images/content/artifact.png",
    image2x: "/images/content/artifact.png",
  },
  {
    title: "Space Station Sandbox",
    price: "Ξ 65.54",
    active: true,
    image: "/images/content/space-station.png",
    image2x: "/images/content/space-station.png",
  },
  {
    title: "Crypter - NFT UI kit",
    price: "$2,453.80",
    active: true,
    image: "/images/content/product-pic-5.jpg",
    image2x: "/images/content/product-pic-5@2x.jpg",
  },
  {
    title: "Bento Matte 3D illustration 1.0",
    price: "$105.60",
    active: false,
    image: "/images/content/product-pic-2.jpg",
    image2x: "/images/content/product-pic-2@2x.jpg",
  },
  {
    title: "Fleet - travel shopping kit",
    price: "$648.60",
    active: true,
    image: "/images/content/product-pic-3.jpg",
    image2x: "/images/content/product-pic-3@2x.jpg",
  },
  {
    title: "Fleet - travel shopping kit",
    price: "$648.60",
    active: true,
    image: "/images/content/product-pic-4.jpg",
    image2x: "/images/content/product-pic-4@2x.jpg",
  },
];

const PopularProducts = ({ className, views }) => {
  const [visibleModalProduct, setVisibleModalProduct] = useState(false);

  return (
    <>
      <Card
        className={cn(styles.card, className)}
        title="Marketplace"
        classTitle="title-blue"
      >
        <div className={styles.popular}>
          <div className={styles.head}>
            <div className={styles.stage}>NFTs</div>
            <div className={styles.stage}>Vol.</div>
          </div>
          <div className={styles.list}>
            {products.map(
              (x, index) =>
                views > index && (
                  <div
                    className={styles.item}
                    key={index}
                    onClick={() => setVisibleModalProduct(true)}
                  >
                    <div className={styles.preview}>
                      <img
                        srcSet={`${x.image2x} 2x`}
                        src={x.image}
                        alt="Product"
                      />
                    </div>
                    <div className={styles.title}>{x.title}</div>
                    <div className={styles.details}>
                      <div className={styles.price}>{x.price}</div>
                      {x.active ? (
                        <div className={cn("status-green", styles.status)}>
                          Active
                        </div>
                      ) : (
                        <div className={cn("status-red", styles.status)}>
                          Deactive
                        </div>
                      )}
                    </div>
                  </div>
                )
            )}
          </div>
          <Link
            className={cn("button-stroke", styles.button)}
            to="/products/dashboard"
          >
            All products
          </Link>
        </div>
      </Card>
      <ModalProduct
        visible={visibleModalProduct}
        onClose={() => setVisibleModalProduct(false)}
      />
    </>
  );
};

export default PopularProducts;
