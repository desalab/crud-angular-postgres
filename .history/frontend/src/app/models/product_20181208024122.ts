export class Product {

    id_product: number;
    name: string;
    category: string;
    location: string;
    price: number;

    constructor(
        id_product: number= 0,
        name: string = '',
        category: string = '',
        location: string = '',
        price: number = 0) {
        this.id_product = id_product;
        this.name = name;
        this.category = category;
        this.location = location;
        this.price = price;
    }

}
