


import logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <>
    <div className="px-4 py-10 text-sm text-olive-500 md:flex md:justify-between 
     md:4/4 md:h-50">

      {/* First Section */}
      <div className="flex flex-col items-center text-center
       md:items-start md:text-left md:mr-10 md:w-1/4">
        
        <img className="w-32 h-auto mb-4" src={logo} alt="Logo" />

        <p>
          Curated tools, technologies, and resources for developers
          building modern software.
        </p>

        <div className="flex gap-5 text-black mt-5 md:mt-8">
          <a href="#">GitHub</a>
          <a href="#">Twitter</a>
          <a href="#">LinkedIn</a>
        </div>

      </div>
      {/* div */}

      {/* Product */}
      <div className="hidden  md:block  w-1/4">
        <h1 className="text-black font-bold mb-4">PRODUCT</h1>

        <ul>
          <li>Home</li>
          <li>Technologies</li>
          <li>Projects</li>
        </ul>
      </div>

      {/* Company */}
      <div className="hidden lg:block md:block  w-1/4">
        <h1 className="text-black font-bold mb-4">COMPANY</h1>

        <ul>
          <li>About</li>
          <li>Contact</li>
          <li>Careers</li>
        </ul>
      </div>
      <div className="hidden lg:block md:block  w-1/4">
        <h1 className="text-black font-bold mb-4">LEGAL</h1>
        <ul>
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
        </ul>
      </div>
        </div>
      <div className="px-4 flex justify-between text-olive-500 items-center my-8 md:mt-8 lg:mt-10"> 
        <p>© 2026 Dev Stack. All rights reserved.</p>
        <div className="flex gap-5">
          <p>Privacy</p>
          <p>Terms</p>
        </div>
      </div>

           </>
  );
};

export default Footer;