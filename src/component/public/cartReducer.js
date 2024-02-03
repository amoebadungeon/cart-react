const initialCartState = {
    items: [], // This will hold items added to the cart
  };
  
  const cartReducer = (state = initialCartState, action) => {
    switch (action.type) {
      case "ADD_TO_CART":
        // Find if the item is already in the cart
        const existingIndex = state.items.findIndex(item => item.name === action.payload.name); // Ensure 'name' is a unique identifier
        
        if (existingIndex >= 0) {
          // If the new quantity is 0, remove the item from the cart
          if (action.payload.quantity === 0) {
            return {
              ...state,
              items: state.items.filter((_, index) => index !== existingIndex),
            };
          } else {
            // Item exists and quantity is not 0, set its quantity to the payload's quantity
            let newItems = state.items.slice();
            newItems[existingIndex] = {
              ...newItems[existingIndex],
              quantity: action.payload.quantity, // Set quantity directly
            };
            return { ...state, items: newItems };
          }
        } else {
          // Item doesn't exist in the cart and quantity is not 0, add it to the cart
          if (action.payload.quantity > 0) {
            return { ...state, items: [...state.items, action.payload] };
          }
          // If the item doesn't exist and the quantity is 0, do nothing
          return state;
        }
        case "INCREMENT_ITEM_QUANTITY": {
          // Find the item to increment
          const updatedItems = state.items.map((item) => {
              if (item.id === action.payload.id) {
                  return { ...item, quantity: item.quantity + 1 };
              }
              return item;
          });
          return { ...state, items: updatedItems };
      }
      case "DECREMENT_ITEM_QUANTITY": {
        // Find the item to decrement and remove it if quantity goes to 0
        const updatedItems = state.items.reduce((acc, item) => {
            if (item.id === action.payload.id) {
                const newQuantity = item.quantity - 1;
                if (newQuantity > 0) {
                    acc.push({ ...item, quantity: newQuantity }); // Keep the item with updated quantity
                }
                // If newQuantity is 0 or less, don't push the item back into the array, effectively removing it
            } else {
                acc.push(item); // Keep items that are not affected
            }
            return acc;
        }, []);
        return { ...state, items: updatedItems };
    }
      default:
        return state;
    }
  };
  
  
  export default cartReducer;
  