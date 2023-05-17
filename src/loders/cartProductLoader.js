import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async () => {
    const addedProduct = await fetch('http://localhost:5000/products');
    const products = await addedProduct.json();
    const storedItem = getShoppingCart();
    const saveCart = [];
    for (const _id in storedItem) {
        const addedItem = products.find(pd => pd._id === _id)
        if (addedItem) {
            addedItem.quantity = storedItem[_id];
            saveCart.push(addedItem);
        }
    }
    return saveCart;
}
export default cartProductsLoader;