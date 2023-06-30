import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { TfiFacebook } from "react-icons/tfi";
import { FaTwitter } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";

const Footer = () => {
  return (
    // {4 columns}

    <footer className="container grid-row-4 flex justify-between sm: flex-wrap items-start">
      {/* {1st column} */}
      <div className=" w-96">
        <div className="flex items-center text-lg">
          <Image src="/Metamart.jpg" alt="image" width={60} height={10} />
          <h1 className=" font-semibold">MoonMart</h1>
        </div>
        <p className="">
          Small, artisan label that offers a thoughtfully curated collection of
          high quality everyday essentials made.
        </p>
        <div className=" gap-4">
          <Button variant="secondary">
            <TfiFacebook />
          </Button>
          <Button variant="secondary">
            <FaTwitter />
          </Button>
          <Button variant="secondary">
            <GrLinkedinOption />
          </Button>
        </div>
      </div>
      {/* {2nd Column} */}
      <div className=" ">
        <h3 className=" font-semibold">Company</h3>
        <br></br>
        <ul>
          <li>About</li>
          <br></br>
          <li>Terms of Use</li>
          <br></br>
          <li>Privacy Policy</li>
          <br></br>
          <li>How it works</li>
          <br></br>
          <li>Contact Us</li>
        </ul>
      </div>
      {/* {3rd column} */}
      <div className="">
        <h3 className=" font-semibold">Support</h3>
        <br></br>
        <ul>
          <li>Support Center</li>
          <br></br>
          <li>24h service</li>
          <br></br>
          <li>Quick Chat</li>
          <br></br>
        </ul>
      </div>
      {/* {4th column} */}
      <div className="">
        <h3 className=" font-semibold">Contact</h3>
        <br></br>
        <ul>
          <li>Whatsapp</li>
          <br></br>
          <li>Support 24h</li>
          <br></br>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
