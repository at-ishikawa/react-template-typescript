const handleError = (
  message: string,
  url: string | undefined,
  line: number | undefined,
  column: number | undefined,
  error: Error | undefined
) => {
  const data: {
    message: string,
    url: string | undefined,
    line: number | undefined,
    column: number | undefined,
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
