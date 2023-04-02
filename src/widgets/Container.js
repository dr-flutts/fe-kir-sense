const Container = ({ className = "", children }) => (
  <div className={`flex flex-col w-full h-full ${className}`}>
    {children}
  </div>
);

export default Container;
