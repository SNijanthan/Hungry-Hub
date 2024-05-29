import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearItems } from "../Redux/cartSlice";
import ItemList from "./ItemList";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearItems());
  };

  return (
    <div className="w-4/6 m-auto mt-5">
      <div className="text-center">
        <h1 className="text-2xl font-semibold text-center">Cart</h1>
        {cartItems.length !== 0 && (
          <button
            className="p-2 my-2 bg-black text-orange-500 rounded-lg font-normal text-sm"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
        )}
      </div>
      {cartItems.length === 0 && (
        <h1 className="text-center my-40 text-4xl font-poppins font-bold text-orange-500">
          YOUR CART IS EMPTY !!!
        </h1>
      )}
      {cartItems.map((item, i) => (
        <div className="-mt-8" key={i}>
          <ItemList data={item} />
        </div>
      ))}
    </div>
  );
};

export default Cart;
