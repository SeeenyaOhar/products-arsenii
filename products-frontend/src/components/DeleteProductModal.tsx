import * as React from 'react';
import {useState} from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useAppDispatch } from 'src/redux/store';

interface DeleteProductModalProps {
    productId: number | undefined;
    onDelete: VoidFunction;
    show: boolean | undefined;
    close: VoidFunction;
}

const DeleteProductModal: React.FunctionComponent<DeleteProductModalProps> = ({productId, onDelete, show, close}) => {
    const [isDeleting, setIsDeleting] = useState<boolean>(false);
    const dispatch = useAppDispatch();

    function deleteClass() {
        // setIsDeleting(true);
        // removeClass(classId).then(() => {
        //     dispatch(classesActions.deleteUserClass(classId));
        //     router.push('/classes');
        // })
        //     .catch((error) => {
        //         if (error instanceof InvalidCredentials) {
        //             logout(dispatch, router);
        //         }
        //         setIsDeleting(false)
        //     })
    }

    return (
        <>
            <Modal show={show} backdrop={true} onHide={close} keyboard={false}>
                <Modal.Header closeButton={!isDeleting}>
                    <Modal.Title>Are you sure?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    The product will be deleted and there is no way to undo this. Are you
                    sure?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={deleteClass} disabled={isDeleting}>
                        Delete
                    </Button>
                    <Button variant="success" onClick={close} disabled={isDeleting}>
                        No, take me back
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default DeleteProductModal;