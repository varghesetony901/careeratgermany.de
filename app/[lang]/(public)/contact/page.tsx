import EnquiryForm from "@/components/EnquiryForm";
import Wrapper from "@/components/animation-wrapper/Wrapper";
import Link from "next/link";

import MaxWidthWrapper from "@/components/ui/MaxWidthWrapper";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import { AiFillInstagram } from "react-icons/ai";
import {
  FaFacebookF,
  FaFileDownload,
  FaLinkedinIn,
  FaPhoneAlt,
  FaYoutube,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const page = async ({ params }: { params: { lang: Locale } }) => {
  const locale = params.lang;
  const { page } = await getDictionary(locale);
  return (
    <Wrapper>
      <MaxWidthWrapper>
        <div className=" py-12 mx-auto">
          <h1 className="font-bold pb-6 lg:pb-0 text-center text-3xl">
            {page.contact.title}
          </h1>
          <div className=" lg:flex lg:items-start lg:-mx-6">
            {/* left section */}
            <div className="px-4 lg:w-1/2 lg:mx-6 flex flex-col lg:px-2 lg:py-10">
              {/* address section */}

              <div className="mt-6 space-y-8 md:mt-8 pb-4 flex flex-col">
                <div className=" flex gap-2 items-center">
                  <FaFileDownload size={20} />
                  <a
                    href="https://career-at-germany-de.s3.ap-south-1.amazonaws.com/brochure/Brochure+CAG+UG.pdf"
                    target="_blank"
                    download
                    className="mx-2 inline-block hover:underline md:text-lg text-blue-800"
                  >
                    {page.contact.downloadLink}
                  </a>
                </div>
                <p className="flex items-center gap-2">
                  <FaLocationDot size={24} />

                  {locale === "en" ? (
                    <span className="mx-2 w-72 ">
                      Blumenstraße 8, <br /> 88444, Ummendorf, <br /> Germany
                    </span>
                  ) : (
                    <span className="mx-2 w-72 ">
                      Blumenstraße 8, <br /> 88444, Ummendorf, <br /> Deutschland
                    </span>
                  )}
                </p>
                <div className="flex items-center gap-2">
                  <FaPhoneAlt size={20} />
                  <Link
                    href={"tel:9567465260"}
                    className="flex gap-2  items-center
                  hover:text-red-700 transition-colors duration-300"
                  >
                    <p className="mx-2 truncate  dark:text-gray-400">
                      +49 15 14 20 53 907
                    </p>
                  </Link>
                </div>
                <div className="flex items-center gap-2">
                  <IoMdMail size={22} />
                  <Link
                    href={"mailto:info@careeratgermany.de"}
                    className="inline-block gap-2  items-center hover:text-red-700 transition-colors duration-300"
                  >
                    <span className="mx-2  truncate   dark:text-gray-400">
                      info@careeratgermany.de
                    </span>
                  </Link>
                </div>
              </div>

              {/* social icons */}
              <div className="mt-6 md:mt-8 ">
                <p className="text-lg font-bold underline">
                  {page.contact.follow}
                </p>

                <div className="flex gap-4 items-center mt-4 -mx-1.5">
                  <Link
                    className="mx-1.5  transition-colors duration-300 transform hover:text-red-700"
                    href="https://www.linkedin.com/in/career-at-germany-74a842214/"
                    target="_blank"
                  >
                    <FaLinkedinIn size={24} />
                  </Link>

                  <Link
                    className="mx-1.5  transition-colors duration-300 transform hover:text-red-700"
                    href="https://www.facebook.com/careeratgermany"
                    target="_blank"
                  >
                    <FaFacebookF size={22} />
                  </Link>

                  <Link
                    className="mx-1.5 -400 transition-colors duration-300 transform hover:text-red-700"
                    href="https://www.instagram.com/careeratgermany/"
                    target="_blank"
                  >
                    <AiFillInstagram size={26} />
                  </Link>

                  <Link
                    className="mx-1.5 transition-colors duration-300 transform hover:text-red-700"
                    href="https://www.youtube.com/@careeratgermany8971"
                    target="_blank"
                  >
                    <FaYoutube size={26} />
                  </Link>
                </div>
              </div>
            </div>

            {/* yellow border */}
            <div className="mt-16 border-t w-[80%] border-yellow-300 lg:border-none  m-auto  lg:w-[1px] lg:h-96 bg-yellow-300 mx-auto"></div>

            {/* right section */}
            <div className="px-3 mt-6 lg:w-1/2 lg:px-6">
              <div className="w-full lg:px-8 py-10 mx-auto overflow-hidden bg-white rounded-lg shadow-2xl dark:bg-gray-900 lg:max-w-xl shadow-gray-300/50 dark:shadow-black/50">
                <h1 className="text-lg font-medium px-1">
                  {page.contact.formQuery}
                </h1>

                <EnquiryForm />
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </Wrapper>
  );
};

export default page;
