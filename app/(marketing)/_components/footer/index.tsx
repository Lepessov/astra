const Footer = () => {
  return (
    <footer className="bg-[#212153] text-white py-8">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
          <h4 className="text-lg font-semibold mb-4">Useful Links</h4>
          <ul>
            <li><a href="#">Link 1</a></li>
            <li><a href="#">Link 2</a></li>
            <li><a href="#">Link 3</a></li>
          </ul>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
          <h4 className="text-lg font-semibold mb-4">About Us</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
          <p>Email: contact@example.com</p>
          <p>Phone: 123-456-7890</p>
        </div>
      </div>
      <div className="container mx-auto text-center">
        <p className="text-sm">Line 1 | Line 2 | Line 3</p>
      </div>
    </footer>
  );
};

export default Footer;
