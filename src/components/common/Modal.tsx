// Modal Component - Custom popup modal with animation

import React, { useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  showCheckbox?: boolean;
  checkboxLabel?: React.ReactNode;
  checkboxChecked?: boolean;
  onCheckboxChange?: (checked: boolean) => void;
  onConfirm?: () => void;
  confirmText?: string;
  cancelText?: string;
  showCancelButton?: boolean;
  image?: string;
  imageAlt?: string;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  showCheckbox = false,
  checkboxLabel,
  checkboxChecked = false,
  onCheckboxChange,
  onConfirm,
  confirmText = "Lanjutkan",
  cancelText = "Kembali",
  showCancelButton = true,
  image,
  imageAlt = "Character",
}) => {
  // Handle ESC key press
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      <style>{`
        @keyframes modalSlideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .modal-animate {
          animation: modalSlideUp 0.3s ease;
        }
      `}</style>

      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-9999 flex items-center justify-center p-5"
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            onClose();
          }
        }}
      >
        {/* Modal Content */}
        <div className="bg-white rounded-3xl max-w-lg w-full p-8 md:p-10 text-center modal-animate">
          {/* Title */}
          <h2
            className="text-2xl font-bold mb-5 font-chillax"
            style={{ color: "#000000" }}
          >
            {title}
          </h2>

          {/* Image */}
          {image && (
            <img
              src={image}
              alt={imageAlt}
              className="w-28 h-28 mx-auto mb-5"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          )}

          {/* Content */}
          <div className="text-sm leading-relaxed text-gray-600 mb-5 font-chillax">
            {children}
          </div>

          {/* Checkbox */}
          {showCheckbox && (
            <div className="flex items-center justify-center gap-3 mb-8">
              <input
                type="checkbox"
                id="modal_checkbox"
                checked={checkboxChecked}
                onChange={(e) => onCheckboxChange?.(e.target.checked)}
                className="w-6 h-6 cursor-pointer"
                style={{ accentColor: "#FF7797" }}
              />
              <label
                htmlFor="modal_checkbox"
                className="text-sm text-gray-600 font-chillax"
              >
                {checkboxLabel}
              </label>
            </div>
          )}

          {/* Buttons */}
          <div className="flex gap-3">
            {showCancelButton && (
              <button
                type="button"
                onClick={onClose}
                className="flex-1 py-4 px-6 rounded-full font-semibold text-base transition-all hover:opacity-80 font-chillax"
                style={{ background: "#E8F4FF", color: "#4A9EFF" }}
              >
                {cancelText}
              </button>
            )}
            {onConfirm && (
              <button
                type="button"
                onClick={onConfirm}
                className="flex-1 py-4 px-6 rounded-full font-semibold text-base text-white transition-all hover:opacity-90 font-chillax"
                style={{
                  background:
                    "linear-gradient(135.54deg, #FFBCD7 21.01%, #EC5A95 81.81%)",
                }}
              >
                {confirmText}
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

// Error Modal Component - untuk menampilkan error messages
interface ErrorModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
}

export const ErrorModal: React.FC<ErrorModalProps> = ({
  isOpen,
  onClose,
  title,
  message,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      showCancelButton={false}
      onConfirm={onClose}
      confirmText="Oke"
      image="/assets/images/mayo-confused.png"
      imageAlt="Mayo Confused"
    >
      <p>{message}</p>
    </Modal>
  );
};
