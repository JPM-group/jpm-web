import React, { useEffect } from 'react';
import ReactModal from 'react-modal';

const ImageModal = ({ isOpen, onRequestClose, imageUrl }) => {
  useEffect(() => {
    ReactModal.setAppElement('#__next');
  }, []);

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      
      style={{
        content: {
          top: '20%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          width: '60%',
          transform: 'translate(-50%, -10%)',
        },
      }}
    >
      <img src={imageUrl} alt="Large view" style={{ width: '100%', height: 'auto' }} />
    </ReactModal>
  );
};

export default ImageModal;
