

import React from "react";
import LabelPrice from "./LabelPrice";
import Quatity from "./Quatity";

const CartItem = ({ label, price, qty, handleChangeQty, id }) => {
  return (
    <div
      
    >
      <LabelPrice label={label} price={price} />

      <Quatity
        qty={qty}
        increamentCount={() => handleChangeQty(id, 1)}
        decreamentCount={() => handleChangeQty(id, -1)}
      />
    </div>
  );
};

export default CartItem;
