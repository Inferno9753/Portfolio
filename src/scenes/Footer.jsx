import SocialMediaIcons from "../components/SocialMediaIcon";


const Footer = () => {
  return (
    <footer className="h-64 bg-sky-700 pt-10">
      <div className="w-10/12 mx-auto">
        <SocialMediaIcons />
        <div className="md:flex justify-center md:justify-between text-center ">
          <p className="font-playfair font-semibold text-2xl text-yellow">
            Nishant Katekar
          </p>
          <p className="font-playfair text-md text-yellow">
            ©2023 All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;