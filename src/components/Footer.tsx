interface FooterProps {
  technologies?: string[];
}

const Footer = ({ technologies }: FooterProps) => {
  return (
    <footer className="p-4 text-center md:text-sm lg:text-md text-gray-500 bg-gray-900">
      © {new Date().getFullYear()} Taimur Shaikh. All rights reserved.
      {" Technologies used: " + technologies?.join(", ")}
    </footer>
  );
};

export default Footer;
