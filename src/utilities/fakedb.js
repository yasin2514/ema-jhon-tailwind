const addToDb = id => {
    const shoppingCart = getShoppingCart();
    const count = shoppingCart[id];
    if (quantity) {
        shoppingCart[id] = quantity + 1;
    }
    else {
        shoppingCart[id] = 1;
    }
    localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
}

const removeFromDb = id => {
    const storeItem = getShoppingCart();
    if (id in storeItem) {
        delete storeItem[id];
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
