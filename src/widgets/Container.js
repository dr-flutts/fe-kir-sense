const Container = ({ id = "", className = "", children, style, hidden = false }) => (
  <div hidden={hidden} id={id} style={{ ...style }} className={`flex ${className} flex-col w-full h-full`}>
    {children}
  </div>
);

export default Container;
