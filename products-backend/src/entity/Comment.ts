import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import Product from './Product';

@Entity()
export default class Comment {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Product, (product) => product.comments)
    product: Product;
    
    @Column()
    description: number;
    
    @Column()
    date: string;
}