import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async () => {
    const addedProduct = await fetch('products.json');
    const products = await addedProduct.json();
    const storedItem = getShoppingCart();
    const saveCart = [];
    for (const id in storedItem) {
        const addedItem = products.find(pd => pd.id === id)
        if (addedItem) {
            addedItem.quantity = storedItem[id];
            saveCart.push(addedItem);
        }
    }
    return saveCart;
}
export default cartProductsLoader;