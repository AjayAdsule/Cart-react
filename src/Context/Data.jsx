import { faker } from "@faker-js/faker";
faker.seed(99)
export const product = [...Array(20)].map(() => ({
  id: faker.datatype.uuid(),
  name: faker.commerce.productName(),
  price: faker.commerce.price(),
  image: faker.image.urlLoremFlickr(),
  inStock: faker.number.int(10),
  fastDelivery: faker.datatype.boolean(),
  ratings: Math.round(faker.commerce.price({ min: 1, max: 5 })),
}));
 //generating random data with the help of faker api
  // in product i want 20 element so i create 20 element array