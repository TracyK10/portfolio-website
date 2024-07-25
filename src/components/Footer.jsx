import Logo from "../assets/twk-high-resolution-logo-black-transparent.png";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center py-2 px-10">
      <div className="w-full border-t border-gray-600 mb-5"></div>
      <div className="flex flex-col md:flex-row justify-between items-center w-full">
        <img src={Logo} alt="TWK Logo" className="h-10 mb-4 md:mb-0" />
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-5 text-2xl">
          <a
            href="mailto:chirutracy@gmail.com"
            className="flex items-center space-x-2"
          >
            <ion-icon name="mail"></ion-icon>
            <span className="font-normal">chirutracy@gmail.com</span>
          </a>
          <a
            href="https://github.com/TracyK10"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ion-icon name="logo-github"></ion-icon>
          </a>
          <a
            href="https://www.instagram.com/uhitstracie"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
          <a
            href="https://www.linkedin.com/in/tracy-karanja-24a10027a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
        </div>
      </div>
      <p className="text-sm text-gray-600 mt-4">
        &copy; {new Date().getFullYear()} Tracy Karanja. All rights reserved.
      </p>
    </footer>
  );
}
