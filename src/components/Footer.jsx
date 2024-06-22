export default function Footer() {
  return (
    <footer className="relative flex flex-col items-center py-2 px-10">
      <div className="w-full border-t border-gray-600 mb-5"></div>
      <div className="flex justify-between items-center w-full">
        <img
          src="/src/assets/twk-high-resolution-logo-black-transparent.png"
          alt="TWK Logo"
          className="h-10"
        />
        <div className="flex space-x-5 ml-auto text-2xl">
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
      <p className="text-sm text-gray-600">
        &copy; {new Date().getFullYear()} Tracy Karanja. All rights reserved.
      </p>
    </footer>
  );
}
