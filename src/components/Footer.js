import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const socialMediaLinks = [
  { Icon: FaFacebookF, href: "https://www.facebook.com/" },
  { Icon: FaLinkedinIn, href: "https://www.linkedin.com/" },
  { Icon: FaInstagram, href: "https://www.instagram.com/" },
  { Icon: FaTwitter, href: "https://twitter.com/" },
  { Icon: FaYoutube, href: "https://www.youtube.com/" },
];

const footerSections = [
  {
    title: "QUICK LINKS",
    items: ["Home", "What We Do", "Research & Publications", "Contact Us"],
  },
  {
    title: "Rubaga Division, Kampala, Uganda",
    items: ["P.O Box 27388, Rubaga Road, Sembule B Zone", "+256773928080, +256700595967"],
  },
  {
    title: "Vatara, Dhaka-1230, Bangladesh",
    items: ["Plot#1292, Road#60a, Block-L, Bashundhara R/A", "+88017556222, +880192222011"],
  },
  {
    title: "Nairobi, Kenya",
    items: ["Duduville Campus, Kasarani,", "+256773928080, +256700595967"],
  },
];

export default function Footer() {
  return (
    <div className="bg-[#b4c6e4] text-white">
      <div className="flex lg:flex-row flex-col md:pt-10 md:px-20 px-10 pb-20">
        <div className="lg:w-[57%] w-full flex flex-col mt-12">
          <div className="overflow-hidden lg:w-[70%] w-full rounded-lg opacity-80 hover:opacity-100 duration-500">
            <Image
              src={`/assets/logo.png`}
              width={300}
              height={100}
              sizes="100vw"
              className="py-2 md:w-[30%] w-[60%] h-auto"
              alt="Random image"
            />
            <p className="text-sm text-[#012D50] md:mt-0 mt-5">
              In a nutshell, Dyadic Research Impacts is a modern research firm
              serving government institutions and non-governmental
              organizations.
            </p>
          </div>
          <div className="flex gap-5 cursor-pointer mt-10 text-slate-900">
            {socialMediaLinks.map(({ Icon, href }, index) => (
              <Link key={index} target="_blank" href={href}>
                <Icon size={20} />
              </Link>
            ))}
          </div>
        </div>
        <div className="lg:w-[43%] w-full mt-16 grid lg:grid-cols-2 gap-10 text-sm">
          {footerSections.map(({ title, items }, index) => (
            <div key={index}>
              <h1 className="font-semibold text-[#012D50]">{title}</h1>
              <ul className="text-[#587792] cursor-pointer mt-2">
                {items.map((item, idx) => (
                  <li key={idx} className="hover:text-[#40576b] mt-2">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
