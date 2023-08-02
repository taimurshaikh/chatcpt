interface FooterProps {
  technologies?: string[];
}

const Footer = ({ technologies }: FooterProps) => {
  return (
    <footer className="p-4 text-center text-xs md:text-sm lg:text-base text-gray-500 bg-gray-900">
      © {new Date().getFullYear()} Taimur Shaikh. All rights reserved.
      {" Technologies used: " + technologies?.join(", ")}
    </footer>
  );
};

export default Footer;
