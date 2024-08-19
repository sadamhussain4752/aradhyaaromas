"use client";

import Link from "next/link";
import shopItems from "../../../../data/shopItems";
import jobCatContent from "../../../../data/job-catergories";

import { useDispatch } from "react-redux";
import { addCart } from "../../../../features/shop/shopSlice";
import Image from "next/image";
const ShopItems = () => {
  const dispatch = useDispatch();

  // add to cart
  const addToCart = (id) => {
    const item = shopItems?.find((item) => item.id === id);
    dispatch(addCart({ product: item }));
  };
  return (
    <>
    
      {jobCatContent.map((ids)=>(
ids.products.map((item) => (
  <div
    className="product-block col-lg-3 col-md-6 col-sm-12"
    key={item.id}
  >
    <div className="inner-box">
      <div className="image-box">
        <figure className="image">
          <Link href={`/shop/shop-single/${item.sku}`}>
            <Image
              width={240}
              height={240}
              src={item.logo}
              alt="shop items"
            />
          </Link>
        </figure>
      </div>
      {/* End image-box */}
      <div className="info">
        <h3>{item.name}</h3>
        <span className="price">{item.price}</span>

        <button
          onClick={() => addToCart(item.sku)}
          className="theme-btn btn-style-one"
        >
          <i className="flaticon-shopping-bag"></i>
          Add to Cart
        </button>
      </div>
    </div>
  </div>
))
      ))
      }
    </>
  );
};

export default ShopItems;
