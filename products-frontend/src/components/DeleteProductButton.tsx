import * as React from 'react';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import DeleteProductModal from './DeleteProductModal';

interface DeleteProductButtonProps {
    onDelete: () => void
}

const DeleteProductButton: React.FunctionComponent<DeleteProductButtonProps> = ({ onDelete }) => {

    return (
        <div className='position-absolute end-0 top-0'>
            <Button onClick={onDelete}>
                Delete
            </Button>
        </div >
    );
}

export default DeleteProductButton;