import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import Comment from './Comment';
import ProductSize from './ProductSize';

interface Size {
    
}

@Entity()
export default class Product{
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    imageUrl: string;
    
    @Column()
    name: string;
    
    @Column()
    count: number;
    
    @OneToOne(() => ProductSize, {eager: true})
    size: ProductSize;
    
    @Column()
    weight: string;
    
    @OneToMany(() => Comment, (comment) => comment.product, {eager: true})
    comments: Comment[];
}