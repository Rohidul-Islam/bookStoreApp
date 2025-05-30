import React from "react";

function Footer() {
  return (
    <>
      <div className="container mx-auto mt-16">
        <hr className="mb-8" />
        <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded flex flex-col items-center">
          <nav className="grid grid-flow-col gap-8">
            <a className="link link-hover" href="/about">About us</a>
            <a className="link link-hover" href="/contact">Contact</a>
            <a className="link link-hover" href="/genre">genre</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav className="mt-4">
            <div className="grid grid-flow-col gap-8">
              <a className="hover:text-gray-600 transition-colors">
                <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 512 512"
                width="24"
                height="24"
                className="fill-current">
                
                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                </svg>
              </a>
              <a className="hover:text-gray-600 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current">
                  <path
                    d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </a>
              <a className="hover:text-gray-600 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current">
                  <path
                    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
            </div>
          </nav>
          <aside className="mt-4 text-center">
            <p>Copyright © {new Date().getFullYear()} - All right reserved by RRR Industries Ltd</p>
          </aside>
        </footer>
      </div>
    </>
  );
}

export default Footer;