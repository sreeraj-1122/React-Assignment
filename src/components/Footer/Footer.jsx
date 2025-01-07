import React from "react";
import footerData from "../../config/footerData";
import Logo from "../Navbar/Logo";

const Footer = () => {
  return (
    <footer className="bg-white py-12">
      <div className="mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12">
          {Object.entries(footerData).map(([heading, items]) => (
            <div key={heading}>
              <h4 className="text-sm font-semibold text-[#667085] mb-4">
                {heading}
              </h4>
              <ul className="space-y-2">
                {items.map((item, index) => (
                  <li key={index}>
                    {item === "Solutions" ? (
                      <div className="flex items-center gap-3">
                        <span className="text-[#475467] text-base font-semibold">
                          {item}
                        </span>
                        <span className="text-[12px] font-medium text-[#067647] bg-[#ECFDF3] border border-[#ABEFC6] rounded-full px-2 py-[2px]">
                           New
                        </span>
                      </div>
                    ) : (
                      <a
                        href="#"
                        className="text-[#475467] text-base hover:text-[#4e5b6e] transition font-semibold"
                      >
                        {item}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex md:flex-row flex-col md:items-center gap-3 md:gap-0 justify-between">
          <div>
            <Logo />
          </div>
          <div className="text-sm font-normal text-[#667085]">
            © 2077 zysktechnologies. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
