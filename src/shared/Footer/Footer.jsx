import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#1a1d50] text-white pt-16 px-5 md:px-28">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div>
        <div className="flex items-center">
        <a className="custom-logo-link" rel="home" aria-label="Digital Agency">
              <img
                className="w-42 md:w-48"
                src="https://websitedemos.net/agency-02/wp-content/uploads/sites/30/2020/06/site-logo-white.svg"
                alt="Logo"
                decoding="async"
              />
            </a>
          </div>
          <p className="mt-5 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <div className="flex space-x-4 mt-5">
            <FaFacebookF className="cursor-pointer text-sm hover:text-gray-400" />
            <FaTwitter className="cursor-pointer text-sm hover:text-gray-400" />
            <FaGoogle className="cursor-pointer text-sm hover:text-gray-400" />
            <FaInstagram className="cursor-pointer text-sm hover:text-gray-400" />
            <FaLinkedinIn className="cursor-pointer text-sm hover:text-gray-400" />
          </div>
        </div>
        
        {/* Company Links */}
        <div>
          <h3 className="font-bold text-lg">Company</h3>
          <ul className="mt-5 space-y-1">
            <li className="hover:text-gray-400 cursor-pointer text-sm">Home</li>
            <li className="hover:text-gray-400 cursor-pointer text-sm">About</li>
            <li className="hover:text-gray-400 cursor-pointer text-sm">Services</li>
            <li className="hover:text-gray-400 cursor-pointer text-sm">Contact</li>
          </ul>
        </div>
        
        {/* Business Links */}
        <div>
          <h3 className="font-bold text-lg">Business</h3>
          <ul className="mt-5 space-y-1">
            <li className="hover:text-gray-400 cursor-pointer text-sm">Project</li>
            <li className="hover:text-gray-400 cursor-pointer text-sm">Our Team</li>
            <li className="hover:text-gray-400 cursor-pointer text-sm">Facts</li>
            <li className="hover:text-gray-400 cursor-pointer text-sm">Customers</li>
          </ul>
        </div>
        
        {/* Contact Information */}
        <div>
          <h3 className="font-bold text-lg">Get In Touch</h3>
          <p className="mt-5 text-sm">Rt. 66, Downtown, Washington, DC</p>
          <p className="mt-1 text-sm">info@example.com</p>
          <p className="mt-1 text-sm">1-800-1234-567</p>
          <p className="mt-1 text-sm">+001 987-654-3210</p>
        </div>
      </div>
      <div className="border mt-24  w-full border-gray-700">

      </div>
      
      <div className="text-center py-10 text-sm">
        Copyright &copy; 2025 Digital Agency | Powered by Digital Agency
      </div>
    </footer>
    </div>
  );
};

export default Footer;
