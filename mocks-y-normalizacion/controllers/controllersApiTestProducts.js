import { ProductsTestContainer } from "../containers/products/ProductsTestContainer.js"

export const controllersApiTestProducts = {

    // getProducts: async (req,res) =>  {
    getProducts: (req,res) =>  {
        try {
            // const products = await ProductsTestContainer.getAllProducts();
            const products = ProductsTestContainer.getAllProducts();
            res.json(products);
        } catch (err) {
            res.status(404).json({ error: err.message })  
        }
    }
}