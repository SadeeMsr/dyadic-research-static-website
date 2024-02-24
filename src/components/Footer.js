import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import Maps from "./Maps";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="bg-[#9bb6c4] text-white">
      <div className="flex lg:flex-row flex-col pt-10 md:px-20 px-10 pb-20">
        <div className="lg:w-[57%] w-full flex flex-col mt-16">
          <div className="overflow-hidden lg:w-[70%] w-full rounded-lg opacity-80 hover:opacity-100 duration-500">
            <Image
              src={`/assets/logo.png`}
              width={0}
              height={0}
              sizes="100vw"
              className="py-2 md:w-[30%] w-[60%] h-auto"
              alt="Random image"
            />
            <p className="text-sm">In a nutshell, Dyadic Research Impacts is a modern research firm serving government institutions and non-governmental organizations.</p>
          </div>
          <div className="flex gap-5 cursor-pointer mt-10 text-slate-900">
            <Link target="_blank" href={"https://www.facebook.com/"}>
              <FaFacebookF size={20} />
            </Link>
            <Link target="_blank" href={"https://www.linkedin.com/"}>
              <FaLinkedinIn size={20} />
            </Link>
            <Link target="_blank" href={"https://www.instagram.com/"}>
              <FaInstagram size={20} />
            </Link>
            <Link target="_blank" href={"https://www.instagram.com/"}>
              <FaTwitter size={20} />
            </Link>
            <Link target="_blank" href={"https://www.instagram.com/"}>
              <FaYoutube size={20} />
            </Link>
          </div>
        </div>
        <div className="lg:w-[43%] w-full mt-16">
          <div className="gap-10 grid lg:grid-cols-2 grid-cols-1 text-sm">
            <div>
              <h1 className="font-semibold">QUICK LINKS</h1>
              <ul className="text-slate-300 cursor-pointer mt-2">
                <li className="hover:text-slate-50 mt-2">Home</li>
                <li className="hover:text-slate-50 mt-2">What We DO</li>
                <li className="hover:text-slate-50 mt-2">Research & Publications</li>
                <li className="hover:text-slate-50 mt-2">Contact us</li>
              </ul>
            </div>

            <div>
              <p className="uppercase font-semibold">Rubaga Division, Kampala, Uganda</p>
              <p className="text-slate-300 hover:text-slate-50 cursor-pointer mt-2">
              P.O Box 27388, Rubaga Road, Sembule B Zone
              </p>
              <p className="text-slate-300 hover:text-slate-50 cursor-pointer mt-2">
              +256773928080, +256700595967
              </p>
            </div>
            <div>
              <p className="uppercase font-semibold">Vatara, Dhaka-1230, Bangladesh</p>
              <p className="text-slate-300 hover:text-slate-50 cursor-pointer mt-2">
                Plot#1292, Road#60a, Block-L, Bashundhara R/A 
              </p>
              <p className="text-slate-300 hover:text-slate-50 cursor-pointer mt-2">
                +88017556222, +880192222011
              </p>
            </div>

            <div>
              <p className="uppercase font-semibold"> Nairobi, Kenya</p>
              <p className="text-slate-300 hover:text-slate-50 cursor-pointer mt-2">
              Duduville Campus, Kasarani,
              </p>
              <p className="text-slate-300 hover:text-slate-50 cursor-pointer mt-2">
              +256773928080, +256700595967
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
