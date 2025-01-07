import React from "react";

const Button = ({ children, onClick, variant = "primary" }) => {
  const styles = {
    primary:
      "bg-[#E63F3A] text-white border-[1px] border-[#E63F3A] hover:bg-[#d8423d]",
    secondary:
      "bg-white text-[#344054] border-[1px] border-[#D0D5DD] hover:bg-[#f7f7f8]",
  };

  return (
    <button
      className={`mt-4 w-full sm:w-[134px] h-[48px] text-base font-semibold rounded-lg shadow-custom transition ${styles[variant]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
