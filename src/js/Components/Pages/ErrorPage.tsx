import BaseError from "../../Errors/BaseError";

class SampleError extends BaseError {
  constructor(message: string) {
    super(message);
  }
}

const errorPage = () => {
  throw new SampleError("Error page");
};

export default errorPage;
