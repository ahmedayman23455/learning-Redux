import classes from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import { cartSliceActions } from "../../Store/cart-slice";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const { title, quantity, totalPrice, price } = props.item;

  const increaseHandler = () => {
    dispatch(cartSliceActions.addItem(props.item));
  };
  const decreaseHandler = () => {
    dispatch(cartSliceActions.removeItem(props.item.id));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${totalPrice.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={decreaseHandler}>-</button>
          <button onClick={increaseHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
