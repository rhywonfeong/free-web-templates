export default function PageWrapper({ children, className = "" }) {
  return (
    <section className={`page-enter ${className}`}>
      {children}
    </section>
  );
}