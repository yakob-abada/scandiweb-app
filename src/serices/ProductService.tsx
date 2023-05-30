import axios, { AxiosError } from "axios";
import { ProductType } from "../components/ProductItem";
import BadRequestError from "./BadRequestError";

class ProductService {
    async save(product: ProductType): Promise<void> {
        try {
            const result = await axios.post(`http://127.0.0.1:8000/product/saveApi`, {
                sku: product.sku,
                name: product.name,
                price: product.price,
                productType: product.product_type,
                size: product.size,
                weight: product.weight,
                heigth: product.height,
                length: product.length,
                width: product.width
            });
        } catch (e) {
            if (e instanceof AxiosError && e.code === 'ERR_BAD_REQUEST') {
                throw new BadRequestError(e.response?.data?.messages.toString());
            }
        }
    }

    async getAll(): Promise<any[]> {
        const result = await axios.get(`http://127.0.0.1:8000/product/all`);

        return result.data;
    }

    async deleteBulk(ids: string[]): Promise<void> {
        for (const id of ids) {
            try {
                await axios.delete(`http://127.0.0.1:8000/product/delete?sku=${id}`);
            } catch(e) {
                console.log(e)
            }
        }   
    }
}

export default ProductService;