const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white mt-auto p-4 text-center">
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} AffiliateSite. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
