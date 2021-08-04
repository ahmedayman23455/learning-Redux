import { uiSliceActions } from "./ui-slice";
import { cartSliceActions } from "./cart-slice";

// sendData (action creator)
export const sendCartData = (cart) => {
  return (dispatch) => {
    // sendDataFn
    const sendCartDataFn = async () => {
      dispatch(
        uiSliceActions.showNotification({
          status: "pending",
          title: "Sending....",
          message: "Sending cart data!",
        })
      );

      const response = await fetch(
        "https://react-http-9f84f-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            items: cart.items,
            showCart: cart.showCart,
            numberOfItems: cart.numberOfItems,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("something went wrong");
      }

      dispatch(
        uiSliceActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully!",
        })
      );
    };
    // execute the sendDataFn with handling error
    sendCartDataFn().catch((error) => {
      dispatch(
        uiSliceActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sent cart data failed!",
        })
      );
    });
  };
};

//fetchData  (action creator)
export const fetchData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://react-http-9f84f-default-rtdb.firebaseio.com/cart.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const data = await response.json();
      return data; // items , showCart , numberOfItems , changed
    };

    try {
      const cartData = await fetchData();
      dispatch(
        /* must write the object like that not put cartData ,
          because when i remove all items that added ,  the firebase will remove the propery of items  
          because is empty array , items wil be undefined when i add another item  */
        cartSliceActions.replaceCart({
          items: cartData.items || [],
          numberOfItems: cartData.numberOfItems,
        })
      );
    } catch (error) {
      dispatch(
        uiSliceActions.showNotification({
          status: "error",
          title: "Error!",
          message: "failed to fetch data",
        })
      );
    }
  };
};
