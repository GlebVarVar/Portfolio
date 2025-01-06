const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <a href="https://github.com/GlebVarVar" target="_blank" className="social-icon">
          <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
        </a>
        <a href="https://vk.com/glebkostrov" target="_blank" className="social-icon">
          <img src="/assets/vk.svg" alt="vk" className="w-1/2 h-1/2" />
        </a>
        <a href="https://t.me/kostrov_gleb" target="_blank" className="social-icon">
          <img src="/assets/tg.svg" alt="telegram" className="w-1/2 h-1/2" />
        </a>
      </div>

      <p className="text-white-500">© 2024 Kostrov Gleb. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
