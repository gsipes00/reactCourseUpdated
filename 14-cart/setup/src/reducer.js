const reducer = (state, action) => {
  if (action.type === "CLEAR_CART") {
    return { ...state, cart: [] };
  }
  if (action.type === "REMOVE") {
    return {
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== action.payload),
    };
  }

  // increase button functionality
  if (action.type === "INCREASE") {
    // create a copy of the cart before increasing
    let tempCart = state.cart.map((cartItem) => {
      // if the cart item clicked for increase matches the tempCart item
      if (cartItem.id === action.payload) {
        // return the other cart items as is, and increment the cartItem matched by 1
        return { ...cartItem, amount: cartItem.amount + 1 };
      }
      return cartItem;
    });
    return {
      ...state,
      cart: tempCart,
    };
  }

  // decrease button functionality
  if (action.type === "DECREASE") {
    let tempCart = state.cart
      .map((cartItem) => {
        if (cartItem.id === action.payload) {
          return { ...cartItem, amount: cartItem.amount - 1 };
        }
        return cartItem;
      })
      .filter((cartItem) => cartItem.amount !== 0);
    return {
      ...state,
      cart: tempCart,
    };
  }

  // total based on price and amount functionality (this was hard to comprehend, but John has a good YouTube "JavaScript Nuggets" video demonstrating reduce())
  if (action.type === "GET_TOTALS") {
    // the object returned from reduce is named cartTotal, and it is destructured immediately with total and amount
    let { total, amount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        // note the amount property below is from the cartItem, not to be confused with the amount property as defined
        // on the cartToal object, which is returned below from the reduce method.
        const { price, amount } = cartItem;
        const itemTotal = price * amount;

        cartTotal.total += itemTotal;
        cartTotal.amount += amount;
        return cartTotal;
      },
      // accumulator defined above as cartTotal, is the object defined below
      {
        total: 0,
        amount: 0,
      }
    );
    // the toFixed method returns a string value from a number. The value passed into the parameter determines how many
    // decimal points to return. Then parseFloat takes the returned string as a parameter and converts it to a floating point number.
    total = parseFloat(total.toFixed(2));

    return { ...state, total, amount };
  }
  return state;
};

export default reducer;
