const addToDb = _id => {
    const shoppingCart = getShoppingCart();
    const quantity = shoppingCart[_id];
    if (quantity) {
        shoppingCart[_id] = quantity + 1;
    }
    else {
        shoppingCart[_id] = 1;
    }
    localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
}

const removeFromDb = _id => {
    const storeItem = getShoppingCart();
    if (_id in storeItem) {
        delete storeItem[_id];
        localStorage.setItem("shopping-cart", JSON.stringify(storeItem))
    }
}

const getShoppingCart = () => {
    let shoppingCart = {}
    const storeItem = localStorage.getItem("shopping-cart");
    if (storeItem) {
        shoppingCart = JSON.parse(storeItem);
    }
    return shoppingCart;
}

const deleteShoppingCart = () => {
    localStorage.removeItem("shopping-cart")
}

export {
    addToDb,
    removeFromDb,
    getShoppingCart,
    deleteShoppingCart
}
