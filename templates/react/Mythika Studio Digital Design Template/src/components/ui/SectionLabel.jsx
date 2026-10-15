const SectionLabel = ({ text, className = "" }) => {
  return (
    <span className={`block text-xs uppercase tracking-[0.12em] text-[#8A8A8A] font-medium mb-4 ${className}`}>
      {text}
    </span>
  );
};

export default SectionLabel;