type ButtonProps = {
  onClick: () => void;
  title: string;
};

const Button = ({ onClick, title }: ButtonProps) => {
  return (
    <div className="button" onClick={onClick} title={title}>
      {title}
    </div>
  );
};

export default Button;
