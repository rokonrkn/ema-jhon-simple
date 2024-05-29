import { getShoppingCart } from "../utilities/fakedb";

const cartProductLoader = async() =>{
    const loddedProduct = await fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON');
    const productConvertjosn = await loddedProduct.json();

    const saveProducts = getShoppingCart();
    console.log(saveProducts)
    const savedCart =[];
    for(const key in saveProducts){
        const products = productConvertjosn.find(pt => pt.key === key)
        if(products){
            const quantity = saveProducts[key];
            products.quantity = quantity;
            savedCart.push(products)
        }
    }

    return productConvertjosn;
}
export default cartProductLoader;