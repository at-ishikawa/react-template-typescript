// @flow
import BaseError from "../../errors/BaseError";

class SampleError extends BaseError {}

const ErrorPage = () => {
  throw new SampleError("Error page");
};

export default ErrorPage;
