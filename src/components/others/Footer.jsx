import React from "react";

const Footer = () => {
  return (
   <footer className=" text-white py-8">
  <div className="text-center">
    <p className="text-sm">
      &copy; {new Date().getFullYear()} Angshu Das. All rights reserved.
    </p>
    <a
      href="https://github.com/Angshu09"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-300 hover:underline text-sm mt-1 inline-block"
    >
      🔗 Visit my GitHub
    </a>
  </div>
</footer>

  );
};

export default Footer;
