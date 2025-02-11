import Link from "next/link";

const Button = ({
  text,
  link,
  className,
}: {
  text: string;
  link: string;
  className: string;
}) => {
  return (
    <Link href={link} passHref className={className}>
      {text}
    </Link>
  );
};

export default Button;
