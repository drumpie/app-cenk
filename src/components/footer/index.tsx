import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="Logo" src={Logo} />
          <p className="my-5">
            Lorem vitae ut augue auctor faucibus eget eget ut libero. Elementum
            purus et arcu massa dictum condimentum. Augue scelerisque iaculis
            orcii ut habitant laoreet. Iaculis tristique.
          </p>
          <p>©Evogym All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">abcd.com</p>
          <p className="my-5">xyzq.com</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">abcdefg@gmail.com</p>
          <p className="my-5">+905053331144</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
Footer;
