// @flow
/* eslint no-console: ["error", { allow: ["error"] }] */

const handleError = (
  message: string,
  url: ?string,
  line: ?number,
  column: ?number,
  error: ?Error
) => {
  const data: {
    message: string,
    url: ?string,
    line: ?number,
    column: ?number,
    stack?: string
  } = {
    message,
    url,
    line,
    column
  };
  if (error) {
    data.stack = error.stack;
  }

  // TODO customize how to handle error
  console.error(data);
};
export default handleError;
