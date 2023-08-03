import clsx from 'clsx';
import * as React from 'react';
import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Product from 'src/models/Product';
import styles from 'src/components/ProductCard.module.css';
import DeleteProductButton from './DeleteProductButton';

interface ProductCardProps {
    product: Product;
    onDelete: VoidFunction;
}

const ProductCard: React.FunctionComponent<ProductCardProps> = ({ product, onDelete }) => {
    const [isHover, setIsHover] = useState<boolean>();

    return (
        <Card
            className={clsx('p-2', 'shadow', 'position-relative', styles['product-card'])}
            onMouseOver={() => setIsHover(true)} 
            onMouseOut={() => setIsHover(false)}>
            <img src={product?.imageUrl} className={styles['product-image']} />
            <div>
                {product?.name}
            </div>
            {isHover && <DeleteProductButton onDelete={onDelete} />}
        </Card >
    );
}

export default ProductCard;