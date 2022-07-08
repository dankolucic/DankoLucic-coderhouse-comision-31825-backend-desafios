import { faker }  from "@faker-js/faker";
faker.locale = "es";

export const ProductsTestContainer = {

    getAllProducts: () => {
        return {
        tittle: faker.commerce.productName(),
        price: faker.commerce.price(1000, 9999, 0),
        thumbnail: faker.image.business(1234, 2345, true)
        }
    }
}