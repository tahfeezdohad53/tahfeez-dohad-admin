const Modal = ({ onClose, children }) => {
  return (
    <div className="fixed inset-0 backdrop-brightness-50 w-full z-1000 flex items-center justify-center  p-4">
      <div className=" w-fit  rounded-xl bg-white shadow-2xl">
        {children}
      </div>
    </div>
  );
};

export default Modal;
