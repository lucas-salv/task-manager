type InputErrorProps = {
  errorMessage: string;
};

export const InputError = ({ errorMessage }: InputErrorProps) => {
  return <p>{errorMessage}</p>;
};
