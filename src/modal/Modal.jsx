import ReactDOM from "react-dom";

const Modal = ({ children, onClose }) => {
  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-black/80   flex justify-center items-center z-50 text-white">
      <div className="bg-[#2c2c2c] p-4 rounded-lg shadow-lg w-[600px] relative">
        <button className="absolute top-2 right-2 cursor-pointer" onClick={onClose}>
          ❌
        </button>
        {children}
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

export default Modal;
