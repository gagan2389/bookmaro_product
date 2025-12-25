import React from 'react';
import logo from '/logo/Logowhite.png';

const Footer: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLElement>, targetId: string) => {
    e.preventDefault();

    if (targetId === '#') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    } else {
      const element = document.querySelector(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-[#0B1120] text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-12 md:justify-items-center justify-items-start">
          <div className="space-y-6">
            <div className="flex items-center cursor-pointer" onClick={(e) => handleScroll(e, '#')}>
              <img src={logo} alt="BookMaro Logo" className="d-inline-block align-top h-10" />
            </div>
            <p className="text-gray-300 leading-relaxed text-sm">
              Streamlining restaurant operations and enhancing customer experiences through
              innovative self-service solutions.
            </p>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Support</h3>
            <ul className="p-0 flex flex-col gap-2">
              {['Help Center', 'FAQs', 'Privacy Policy', 'Terms of Service', 'Refund Policy'].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="!text-white hover:text-white transition-colors duration-200 text-sm"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contact Info</h3>
            <ul className="p-0 flex flex-col gap-2">
              <li className="flex items-center space-x-3">
                <i className="bi bi-envelope text-white text-lg" />
                <span className="text-white text-sm">work@bookmaro.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <i className="bi bi-telephone text-white text-lg" />
                <span className="text-white text-sm">+91 8247555493</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-center items-center gap-4">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © 2025 BookMaro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
