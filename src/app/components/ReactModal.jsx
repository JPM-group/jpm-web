import React, { useEffect, useState } from 'react';
import ReactModal from 'react-modal';

const ImageModal = ({ isOpen, onRequestClose, imageUrl }) => {
  const [isVertical, setIsVertical] = useState(false);

  useEffect(() => {
    ReactModal.setAppElement('#__next');
  }, []);

  useEffect(() => {
    if (imageUrl) {
      const img = new Image();
      img.src = imageUrl;
      img.onload = () => {
        setIsVertical(img.height > img.width);
      };
    }
  }, [imageUrl]);

  return (
    <ReactModal
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
          width: isVertical ? '40%' : '60%', // Adjust width based on orientation
          maxWidth: '75vw',
          maxHeight: '90vh',
          overflow: 'auto',
        },
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.75)'
        }
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <img src={imageUrl} alt="Large view" style={{ width: '100%', height: 'auto' }} />
      </div>
    </ReactModal>
  );
};

export default ImageModal;
