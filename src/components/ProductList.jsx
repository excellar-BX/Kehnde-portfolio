import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  reset,
  incrementByAmount,
} from "../ReduxFeautures/counter/counterSlice";
import { fetchProductsList } from "../ReduxFeautures/counter/productListSlice";
import { BiSolidHeart, BiStar } from "react-icons/bi";

import { Link, NavLink } from "react-router-dom";

const ProductList = () => {
  const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(fetchProductsList());
    }, []);

    
  const productList = useSelector((state) => state.productList);

  
  const { loading, error, productListArray } = productList;
console.log(productList.productListArray);
  return (
    <div> 
       <p>{productListArray.length}</p>
      <div className="block w-[90%] mx-auto  ">
        {loading ? (
          <p>Loading.....</p>
        ) : error ? (
          <p>Error: {productListArray.error}</p>
        ) :  (
          <div>
          <div>
            {productListArray.map((product) => {
              return (
                <div
                  className="class-body hover:scale-[1.05] transition-all ease-out delay-750 my-[20px] mx-[15px] max-[375px]:mx-auto max-[375px]:block inline-block w-[250px] h-[350px] "
                  key={product.id}
                >
                  <div className="container  w-full my-[10px] rounded-[10px] shadow-xl">
                    <a href={product.photo} className=" -z-30 ">
                      <img
                        src={product.phot0} 
                        className="w-[90%] mx-auto rounded-xl h-[150px]"
                        alt="product"
                      />
                    </a>
                    <div className="info flex flex-col bg-[#f1720a] rounded-b-xl">
                      <Link to={`/products/${product._id}`}>
                        <span className=" text-[#fdba00] text-xl font-semibold m-1">
                          {product.title}
                        </span>
                      </Link>
                      <span className="price text-white ml-1">
                        $ {product.price}.00
                      </span>
                      <span className="rating flex  text-white ml-1">
                        {" "}
                        {product.rating}.0{" "}
                        <BiStar className="relative top-1 left-1" />
                      </span>
                      <span className="z-10 ">
                        <div className="flex mb-3 justify-center items-center ">
                          <NavLink to={`/products/${product._id}`}>
                            <button
                              className="bg-[#ffcc80] mr-2 outline-none border-none block mx-auto w-32 py-2 font-bold text-center rounded-md bg-opacity-100 hover:bg-opacity-80"
                              type="button"
                            >
                              Add to cart
                            </button>
                          </NavLink>
                          <button className=" bg-[#ffcc80] h-8 w-8 rounded-md top-1">
                            <BiSolidHeart className="block mx-auto" />
                          </button>
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div>cannot find data</div>
          </div>
        )}
      </div> 
    </div>
  );
};

export default ProductList;
