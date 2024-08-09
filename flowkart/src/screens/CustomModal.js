import React from 'react';
import Modal from 'react-modal';

const CustomModal = ({ isOpen, onRequestClose, children }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            style={{
                content: {
                    top: '50%',
                    left: '50%',
                    right: 'auto',
                    bottom: 'auto',
                    marginRight: '-50%',
                    transform: 'translate(-50%, -50%)',
                    maxWidth: '90%',
                    maxHeight: '90%',
                    overflow: 'auto',
                },
                overlay: {
                    backgroundColor: 'rgba(0, 0, 0, 0.75)',
                },
            }}
        >
            {children}
        </Modal>
    );
};

export default CustomModal;