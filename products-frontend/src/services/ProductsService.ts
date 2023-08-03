import Product from 'src/models/Product';
import axios from 'axios';

export const addProduct = async (product: Product) => {
  return await axios.post('http://localhost:4000/products', product);
};

export const deleteProduct = async (productId: Product) => {
    return await axios.delete(`http://localhost:4000/products/${productId}`)
}