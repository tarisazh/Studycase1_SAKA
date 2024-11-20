import React, { useState } from 'react';
import Modal from './Modal';

export default {
  title: 'Components/Modal',
  component: Modal,
};

const Template = ({ size, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)} className="modal-button">Open Modal</button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} size={size}>
        {content}
      </Modal>
    </>
  );
};

// Default modal
export const Default = Template.bind({});
Default.args = {
  size: 'medium',
  content: <p>This is the default modal content.</p>,
};

// Modal with Import Content
export const ModalWithImportContent = Template.bind({});
ModalWithImportContent.args = {
  size: 'medium',
  content: <p>This modal contains import content.</p>,
};

// Modal with Delete Content
export const ModalWithDeleteContent = Template.bind({});
ModalWithDeleteContent.args = {
  size: 'medium',
  content: <p>Are you sure you want to delete this item?</p>,
};

// Small Modal
export const Small = Template.bind({});
Small.args = {
  size: 'small',
  content: <p>This is a small modal.</p>,
};

// Medium Modal
export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
  content: <p>This is a medium modal.</p>,
};

// Large Modal
export const Large = Template.bind({});
Large.args = {
  size: 'large',
  content: <p>This is a large modal.</p>,
};
