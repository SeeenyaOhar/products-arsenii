import Comment from 'src/models/Comment';
interface Size {
    width: number;
    height: number;
}

export default interface Product{
    id?: number;
    imageUrl: string;
    name: string;
    count: number;
    size: Size;
    weight: string;
    comments: Comment[];
}