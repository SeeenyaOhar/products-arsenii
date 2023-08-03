import * as React from 'react';
import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import AddProductModal from 'src/components/AddProductModal';

const AddProductButton: React.FunctionComponent = () => {
    const [showModal, setShowModal] = useState<boolean>(); 
    const openModal = () => {
        setShowModal(true);
    }
    return (
        <div>
            <Button onClick={openModal}>
                Add
            </Button >
            <AddProductModal show={showModal} close={() => setShowModal(false)} onAdded={() => alert('GO')}/>
        </div >

    );
}

export default AddProductButton;