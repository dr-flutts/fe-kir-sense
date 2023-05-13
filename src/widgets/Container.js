const Container = ({ id = "", className = "", children, ...style }) => (
  <div id={id} style={{...style}} className={`flex flex-col w-full h-full ${className}`}>
    {children}
  </div>
);

export default Container;
