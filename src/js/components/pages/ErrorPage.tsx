import BaseError from "../../errors/BaseError";

class SampleError extends BaseError {
    constructor(message: string) {
        super(message);
    }
}

const ErrorPage = () => {
  throw new SampleError("Error page");
};

export default ErrorPage;
