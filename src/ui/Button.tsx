interface ButtonProps {
  children: JSX.Element;
}

export default function Button({ children }: ButtonProps) {
  return <div>{children}</div>;
}
