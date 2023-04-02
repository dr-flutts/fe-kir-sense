const ErrorPage = ({ code, message }) => {
  return (
    <>
      <strong>{code}</strong>
      <h1>{message}</h1>
    </>
  );
};

export default ErrorPage;
