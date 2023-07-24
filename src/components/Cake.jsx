import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { orderCake } from "../redux/features/cakeSlice";

function Cake() {
  const [orderQty, setOrderQty] = useState(0);
  const cake = useSelector((state) => state.cake);
  const dispatch = useDispatch();
  const handleOrderChange = (e) => {
    setOrderQty(e.target.value);
  };
  const handleOrderCake = () => {
    dispatch(orderCake(+orderQty));
    setOrderQty(0);
  };
  return (
    <div>
      <p>NO OF Cakes: {cake.noOfCakes}</p>
      <input
        type="text"
        name="quantity"
        placeholder="enter order quantity"
        value={orderQty}
        onChange={handleOrderChange}
      />
      <input type="text" name="restock" />
      <button onClick={handleOrderCake}>Order Cake</button>
      <button>Restock Cake</button>
    </div>
  );
}

export default Cake;
