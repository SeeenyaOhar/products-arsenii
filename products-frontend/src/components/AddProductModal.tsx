import * as React from 'react';
import { useState } from 'react';
import { useAppDispatch } from 'src/redux/store';
import { Button, Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { addProduct } from 'src/services/ProductsService'

interface AddProductModalProps {
    onAdded: VoidFunction;
    show: boolean | undefined;
    close: VoidFunction;
}

const AddProductModal: React.FunctionComponent<AddProductModalProps> = ({ onAdded, show, close }) => {
    const [isAdding, setIsAdding] = useState<boolean>(false);
    const dispatch = useAppDispatch();
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
    console.log(errors);
    function add(data: any) {
        setIsAdding(true);
        addProduct({
            name: data.name,
            imageUrl: data.imageUrl,
            count: data.count,
            size: { width: data.width, height: data.height },
            weight: data.weight, comments: []
        }).then(() => {
            setIsAdding(false);
            reset();
            close();
        })
    }

    return (
        <>
            <form>
                <Modal show={show} backdrop={true} onHide={close} keyboard={false}>
                    <Modal.Header closeButton={!isAdding}>
                        <Modal.Title>Fill in the info to add the product</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='d-flex flex-column gap-2'>
                            <input {...register("name", { required: true })} placeholder='Name' className='form-control' />
                            <input {...register("imageUrl", { required: true })} placeholder='Image URL' className='form-control' />
                            <input {...register("count", { required: true })} placeholder='Count' className='form-control' />
                            <input {...register("width", { required: true })} placeholder='Width' className='form-control' />
                            <input {...register("height", { required: true })} placeholder='Height' className='form-control' />
                            <input {...register("weight", { required: true })} placeholder='Weight' className='form-control' />
                        </div>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={handleSubmit(add)} disabled={isAdding}>
                            Add
                        </Button>
                        <Button variant="success" onClick={close} disabled={isAdding}>
                            Cacnel
                        </Button>
                    </Modal.Footer>
                </Modal>
            </form>

        </>
    );
}

export default AddProductModal;