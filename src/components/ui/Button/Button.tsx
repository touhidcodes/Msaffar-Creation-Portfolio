import Link from "next/link";

const Button = ({ text, link }: { text: string; link: string }) => {
  return (
    <Link
      href={link}
      passHref
      className="bg-black text-white font-bold py-2 px-4 rounded inline-block"
    >
      {text}
    </Link>
  );
};

export default Button;
