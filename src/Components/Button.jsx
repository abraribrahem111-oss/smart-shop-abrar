function Button({ text, onClick, type = "button", className = "" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-[#7DCCDA] text-white px-6 py-2 rounded-full hover:bg-cyan-500 transition duration-300 ${className}`}
    >
      {text}
    </button>
  );
}

export default Button;