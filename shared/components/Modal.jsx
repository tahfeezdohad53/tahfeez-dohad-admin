'use client';

const Modal = ({ onClose, children }) => {
  return (
    <div onClick={onClose} className="fixed h-screen  inset-0 backdrop-brightness-50 w-full z-1000 flex items-center justify-center  p-4">
      <div onClick={(e) => e.stopPropagation()} className="border w-fit h-full  rounded-xl bg-white shadow-2xl">
        {children}
      </div>
    </div>
  );
};

export default Modal;
