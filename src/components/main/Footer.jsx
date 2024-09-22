import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <>
      <section className="py-5 bg-gray-900">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-wrap items-center justify-between">
            <span className="bg-clip-text text-transparent bg-gradient-to-l from-[#8336ad] via-[#4a409a] to-[#142898]">
              Toch Ratana
            </span>
            <ul className="flex items-center space-x-3 md:order-3">
              <li>
                <a
                  href="#"
                  title=""
                  className="flex items-center justify-center text-white transition-all duration-200 bg-transparent border border-gray-700 rounded-full w-7 h-7 focus:bg-blue-600 hover:bg-blue-600 hover:border-blue-600 focus:border-blue-600"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="flex items-center justify-center text-white transition-all duration-200 bg-transparent border border-gray-700 rounded-full w-7 h-7 focus:bg-blue-600 hover:bg-blue-600 hover:border-blue-600 focus:border-blue-600"
                >
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="flex items-center justify-center text-white transition-all duration-200 bg-transparent border border-gray-700 rounded-full w-7 h-7 focus:bg-blue-600 hover:bg-blue-600 hover:border-blue-600 focus:border-blue-600"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title=""
                  className="flex items-center justify-center text-white transition-all duration-200 bg-transparent border border-gray-700 rounded-full w-7 h-7 focus:bg-blue-600 hover:bg-blue-600 hover:border-blue-600 focus:border-blue-600"
                >
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </li>
            </ul>
            <p className="w-full mt-8 text-sm text-center text-gray-100 md:mt-0 md:w-auto md:order-2">
              © Copyright 2024, All Rights Reserved by Toch Ratana
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
