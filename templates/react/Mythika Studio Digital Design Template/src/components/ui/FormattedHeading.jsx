const FormattedHeading = ({ text, as: Component = 'h2', className }) => {
  if (!text) return null;
  
  const parts = text.split('*');
  
  return (
    <Component className={className}>
      {parts.map((part, index) => {
        // Even indices are normal text, odd indices are italic highlighted
        if (index % 2 === 1) {
          return (
            <span key={index} className="font-serif italic text-[#C9A84C] font-normal px-1">
              {part}
            </span>
          );
        }
        return <span key={index}>{part}</span>;
      })}
    </Component>
  );
};

export default FormattedHeading;