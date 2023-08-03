import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import Product from './Product';

@Entity()
export default class ProductSize{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    width: number;

    @Column()
    height: number;

    @OneToOne(() => Product)
    @JoinColumn({name: 'product_id'})
    product: Product;
}