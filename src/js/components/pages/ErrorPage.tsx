import BaseError from "../../errors/BaseError";

class SampleError extends BaseError {
    constructor(message: string) {
        super(message);
    }
}

const errorPage = () => {
  throw new SampleError("Error page");
};

export default errorPage;
