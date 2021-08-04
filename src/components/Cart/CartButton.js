import classes from "./CartButton.module.css";
import { cartSliceActions } from "../../Store/cart-slice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const CartButton = (props) => {
  const theBadgeNumber = useSelector((state) => state.cart.numberOfItems);
  const dispatch = useDispatch();
  const cartToggleHandler = () => {
    dispatch(cartSliceActions.toggleCart());
  };
  return (
    <button className={classes.button} onClick={cartToggleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{theBadgeNumber}</span>
    </button>
  );
};

export default CartButton;
