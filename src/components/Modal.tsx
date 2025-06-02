import React from "react";

interface ModalProps {
  isOpen: boolean;
  isLoginMode: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  isLoginMode,
  children,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center  justify-center bg-gray-500/80 bg-opacity-50">
      <div
        className={`relative bg-white rounded-lg ${
          isLoginMode
            ? "border-5 border-blue-600"
            : "border-5 border-indigo-400"
        } shadow-lg p-6 w-full max-w-md`}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-xl"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
};
