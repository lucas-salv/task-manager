type InputErrorProps = {
  errorMessage: string;
};

export const InputError = ({ errorMessage }: InputErrorProps) => {
  return <p className="text-xs text-error font-bold mt-1">{errorMessage}</p>;
};
