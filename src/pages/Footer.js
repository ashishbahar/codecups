import React from "react";
import { Link } from "react-router-dom";
import Newsletter from "../component/Newsletter";

const Footer = () => {
  return (
    <div className="p-4">
      <div className="flex flex-col lg:flex-row justify-evenly space-y-4 lg:space-y-0 lg:space-x-8 lg:px-10 lg:py-10">
        <div className="flex flex-col  space-y-4">
          <img
            src="../logo/logo (1).png"
            alt="Logo"
            className="w-[170px] h-auto md:w-38 md:h-18 "
          />
          <h1 className="text-xl !mt-3 font-semibold">Subscribe With Us</h1>
          <p className="">
            Sign up now and be the first to know <br />
            about new products, offers and <br />
            exciting news and announcements.
          </p>
          {/* <input
            type="text"
            placeholder="Enter your email address"
            className="border p-2 rounded w-full max-w-md"
          /> */}
          <Newsletter />

          {/* <div className="flex space-x-3 my-0">
            <a href="https://www.linkedin.com/company/ultrapureindia/" className="text-blue-700">
              <img src="./social/Group.png" alt="social" className="w-10 h-10" />
            </a>
            <a href="https://wa.me/7428534141" target="_blank" rel="noreferrer" className="text-green-500">
            <img src="./social/Group (1).png" alt="social" className="w-10 h-10" />
            </a>
            <a href="https://www.instagram.com/ultrapure_india/" className="text-pink-500">
            <img src="./social/Group (2).png" alt="social" className="w-10 h-10" />
            </a>
            <a href="https://www.facebook.com/ultrapureindia" className="text-blue-600">
            <img src="./social/Group (3).png" alt="social" className="w-10 h-10" />
            </a>
          </div> */}
        </div>
        <div className="flex flex-col lg:flex-row justify-evenly space-y-8 lg:space-y-0 lg:space-x-8 w-2/3">
          <div className="flex flex-col space-y-2">
            <h1 className="text-2xl font-semibold mb-2">Services</h1>
            <h2>
              <Link
                to="/it-management"
                className="hover:underline hover:text-textBlue"
              >
                IT Management Services{" "}
              </Link>
            </h2>
            <h2>
              <Link
                to="/data-tracking"
                className="hover:underline hover:text-textBlue"
              >
                Data Tracking Security{" "}
              </Link>
            </h2>
            <h2>
              <Link
                to="/website-development"
                className="hover:underline hover:text-textBlue"
              >
                Website Development{" "}
              </Link>
            </h2>
            <h2>
              <Link
                to="/crm-Solution"
                className="hover:underline hover:text-textBlue"
              >
                CRM Solutions and Design{" "}
              </Link>
            </h2>
            <h2>
              <Link
                to="/software-development"
                className="hover:underline hover:text-textBlue"
              >
                Software Development
              </Link>
            </h2>
            <h2>
              <Link
                to="/app-development"
                className="hover:underline hover:text-textBlue"
              >
                App Development{" "}
              </Link>
            </h2>
          </div>

          <div className="flex flex-col space-y-2">
            <h1 className="text-2xl font-semibold mb-2">Policy</h1>
            <h2>
              <Link
                to="/privacy-poicy"
                className="hover:underline hover:text-textBlue"
              >
                Privacy Policy{" "}
              </Link>
            </h2>
            <h2>
              <Link
                to="/Grievance-officer"
                className="hover:underline hover:text-textBlue"
              >
                Grievance Officer
              </Link>
            </h2>
            <h2>
              <Link
                to="/Refund-policy"
                className="hover:underline hover:text-textBlue"
              >
                Refund Policy
              </Link>
            </h2>
          </div>

          <div className="flex flex-col space-y-2">
            <h1 className="text-2xl font-semibold mb-2">Explore</h1>
            {/* <h2><a href="#" className="hover:underline hover:text-textBlue">Latest Insights</a></h2> */}
            {/* <h2><Link to="/download" className="hover:underline hover:text-textBlue">Download Centre</Link></h2> */}
            {/* <h2><Link to="/report" className="hover:underline hover:text-textBlue">Our Test Reports</Link></h2> */}
            <h2>
              <a href="/about" className="hover:underline hover:text-textBlue">
                About
              </a>
            </h2>
            <h2>
              <a
                href="/contact"
                className="hover:underline hover:text-textBlue"
              >
                Contact us
              </a>
            </h2>
            <h2>
              <Link
                to="/career"
                className="hover:underline hover:text-textBlue"
              >
                Careers
              </Link>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
