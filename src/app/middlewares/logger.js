export default (req, res, next) => {
  console.log(
    `Método: ${req.method}; URL: ${req.url}; BODY PARAMS: ${JSON.stringify(
      req.body
    )}`
  );
  return next();
};
