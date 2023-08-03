import React, { useState } from 'react';
import Product from 'src/models/Product';
import Card from 'react-bootstrap/Card';
import ProductCard from './ProductCard';
import DeleteProductModal from './DeleteProductModal';
import clsx from 'clsx';

interface ProductsListProps {
    products: Product[] | undefined;
}

const ProductsList = ({ products }: ProductsListProps) => {
    const [deleteId, setDeleteId] = useState<number>(-1);

    return <div className={clsx('d-flex', 'flex-row', 'flex-wrap', 'gap-2', 'justify-content-center')} >
        {products?.map((product) => <ProductCard
            key={product.id}
            onDelete={() => {
                if (product.id != null) {
                    setDeleteId(product?.id)
                }
            }}
            product={product} />)}
        <DeleteProductModal
            productId={deleteId}
            show={deleteId !== -1}
            close={() => setDeleteId(-1)}
            onDelete={() => alert('GO')} />
    </div >
}

export default ProductsList;