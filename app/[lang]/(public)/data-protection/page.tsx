import Wrapper from "@/components/animation-wrapper/Wrapper";
import MaxWidthWrapper from "@/components/ui/MaxWidthWrapper";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import Link from "next/link";
import React from "react";

const page = async ({ params }: { params: { lang: Locale } }) => {
  const locale = params.lang;
  const { page } = await getDictionary(locale);
  return (
    <Wrapper>
      <MaxWidthWrapper className="py-12 text-muted-foreground flex flex-col gap-6">
        <h1 className="text-center text-2xl font-semibold underline text-black">
          {page.privacy.mainTitle}
        </h1>
        {/* section 1 */}
        <div className="flex flex-col gap-2">
          <h1 className="font-semibold text-xl text-black">
            {page.privacy.section1.mainHeading}
          </h1>
          <h2 className="font-semibold text-black">
            {page.privacy.section1.h1}
          </h2>
          <p className="text-sm">{page.privacy.section1.p1}</p>
          <h2 className="font-semibold text-black">
            {page.privacy.section1.h2}
          </h2>
          <h2 className="font-semibold text-black">
            {page.privacy.section1.h3}
          </h2>
          <p className="text-sm">{page.privacy.section1.p2}</p>
          <h2 className="font-semibold text-black">
            {page.privacy.section1.h4}
          </h2>
          <p className="text-sm">{page.privacy.section1.p3}</p>
          <p className="text-sm">{page.privacy.section1.p4}</p>
          <h2 className="font-semibold text-black">
            {page.privacy.section1.h5}
          </h2>
          <p className="text-sm">{page.privacy.section1.p5}</p>
          <h2 className="font-semibold text-black">
            {page.privacy.section1.h6}
          </h2>
          <p className="text-sm">{page.privacy.section1.p7}</p>
        </div>

        {/* section 2 */}
        <div className="flex flex-col gap-2">
          <h1 className="font-semibold text-xl text-black">
            {page.privacy.section2.mainHeading}
          </h1>
          <p className="text-sm">{page.privacy.section2.p1}</p>
          <h2 className="font-semibold text-black">
            {page.privacy.section2.h1}
          </h2>
          <p className="text-sm">{page.privacy.section2.p2}</p>
          <p className="text-sm">{page.privacy.section2.p3}</p>
          <p className="text-sm">{page.privacy.section2.p4}</p>
          <h2 className="font-semibold text-black">
            {page.privacy.section2.h2}
          </h2>
          <p className="text-sm">{page.privacy.section2.p5}</p>
        </div>

        {/* section 3 */}
        <div className="flex flex-col gap-2">
          <h1 className="font-semibold text-xl text-black">
            {page.privacy.section3.mainHeading}
          </h1>
          <h2 className="font-semibold text-black">
            {page.privacy.section3.h1}
          </h2>
          <p className="text-sm">{page.privacy.section3.p1}</p>
          <p className="text-sm">{page.privacy.section3.p2}</p>
          <p className="text-sm">{page.privacy.section3.p3}</p>
          <h2 className="font-semibold text-black">
            {page.privacy.section3.h2}
          </h2>
          <p className="text-sm">{page.privacy.section3.p4}</p>
          <p className="text-sm">{page.privacy.section3.p5}</p>
          <p className="text-sm">{page.privacy.section3.p6}</p>
          <p className="text-sm">{page.privacy.section3.p7}</p>
          <p className="text-sm">{page.privacy.section3.p8}</p>
          <h2 className="font-semibold text-black">
            {page.privacy.section3.h3}
          </h2>
          <p className="text-sm">{page.privacy.section3.p9}</p>
          <h2 className="font-semibold text-black">
            {page.privacy.section3.h4}
          </h2>
          <p className="text-sm">{page.privacy.section3.p10}</p>
          <h2 className="font-semibold text-black">
            {page.privacy.section3.h6}
          </h2>
          <p className="text-sm">{page.privacy.section3.p11}</p>
          <p className="text-sm">{page.privacy.section3.p12}</p>
          <h2 className="font-semibold text-black">
            {page.privacy.section3.h7}
          </h2>
          <p className="text-sm">{page.privacy.section3.p13}</p>
          <h2 className="font-semibold text-black">
            {page.privacy.section3.h8}
          </h2>
          <p className="text-sm">{page.privacy.section3.p14}</p>
          <h2 className="font-semibold text-black">
            {page.privacy.section3.h9}
          </h2>

          <p className="text-sm">{page.privacy.section3.p15}</p>
          <p className="text-sm">{page.privacy.section3.p16}</p>

          <h2 className="font-semibold text-black">
            {page.privacy.section3.h10}
          </h2>
          <p className="text-sm">{page.privacy.section3.p17}</p>
          <h2 className="font-semibold text-black">
            {page.privacy.section3.h11}
          </h2>

          <p className="text-sm">{page.privacy.section3.p18}</p>
          <h2 className="font-semibold text-black">
            {page.privacy.section3.h12}
          </h2>

          <p className="text-sm">{page.privacy.section3.p19}</p>
          <h2 className="font-semibold text-black">
            {page.privacy.section3.h13}
          </h2>

          <p className="text-sm">{page.privacy.section3.p20}</p>
          <p className="text-sm">{page.privacy.section3.p21}</p>
          <p className="text-sm">{page.privacy.section3.p22}</p>
          <p className="text-sm">{page.privacy.section3.p23}</p>
          <p className="text-sm">{page.privacy.section3.p24}</p>
          <p className="text-sm">{page.privacy.section3.p25}</p>
          <h2 className="font-semibold text-black">
            {page.privacy.section3.h14}
          </h2>
          <p className="text-sm">{page.privacy.section3.p26}</p>
          <p className="text-sm">{page.privacy.section3.p27}</p>
          <h2 className="font-semibold text-black">
            {page.privacy.section3.h15}
          </h2>
          <p className="text-sm">{page.privacy.section3.p28}</p>
        </div>

        {/* section 4 */}
        <div className="flex flex-col gap-2">
          <h1 className="font-semibold text-xl text-black">
            {page.privacy.section4.mainHeading}
          </h1>
          <h2 className="font-semibold text-black">
            {page.privacy.section4.h1}
          </h2>
          <p className="text-sm">{page.privacy.section4.p1}</p>
          <p className="text-sm">{page.privacy.section4.p2}</p>
          <p className="text-sm">{page.privacy.section4.p3}</p>
          <p className="text-sm">{page.privacy.section4.p4}</p>
          <p className="text-sm">{page.privacy.section4.p5}</p>
          <h2 className="font-semibold text-black">
            {page.privacy.section4.h2}
          </h2>
          <p className="text-sm">{page.privacy.section4.p6}</p>
          <h2 className="font-semibold text-black">
            {page.privacy.section4.h3}
          </h2>
          <p className="text-sm">{page.privacy.section4.p7}</p>
          <p className="text-sm">{page.privacy.section4.p8}</p>
          <p className="text-sm">{page.privacy.section4.p9}</p>
          <h2 className="font-semibold text-black">
            {page.privacy.section4.h4}
          </h2>
          <p className="text-sm">{page.privacy.section4.p10}</p>
          <p className="text-sm">{page.privacy.section4.p11}</p>
          <p className="text-sm">{page.privacy.section4.p12}</p>
          <h2 className="font-semibold text-black">
            {page.privacy.section4.h5}
          </h2>
          <p className="text-sm">{page.privacy.section4.p13}</p>
          <p className="text-sm">{page.privacy.section4.p14}</p>
          <p className="text-sm">{page.privacy.section4.p15}</p>
          <h2 className="font-semibold text-black">
            {page.privacy.section4.h6}
          </h2>
          <p className="text-sm">{page.privacy.section4.p16}</p>
          <p className="text-sm">{page.privacy.section4.p17}</p>
          <p className="text-sm">{page.privacy.section4.p18}</p>
          <p className="text-sm">{page.privacy.section4.p19}</p>
          <p className="text-sm">{page.privacy.section4.p20}</p>
          <p className="text-sm">{page.privacy.section4.p22}</p>
          <p className="text-sm">{page.privacy.section4.p23}</p>
          <p className="text-sm">{page.privacy.section4.p24}</p>
          <p className="text-sm">{page.privacy.section4.p25}</p>
        </div>

        {/* section 5 */}
        <div className="flex flex-col gap-2">
          <h1 className="font-semibold text-xl text-black">
            {page.privacy.section5.mainHeading}
          </h1>
          <h2 className="font-semibold text-black">
            {page.privacy.section5.h1}
          </h2>
          <p className="text-sm">{page.privacy.section5.p1}</p>
          <p className="text-sm">{page.privacy.section5.p2}</p>
          <p className="text-sm">{page.privacy.section5.p3}</p>
          <h2 className="font-semibold text-black">
            {page.privacy.section5.h2}
          </h2>
          <p className="text-sm">{page.privacy.section5.p4}</p>
          <p className="text-sm">{page.privacy.section5.p5}</p>
          <p className="text-sm">{page.privacy.section5.p6}</p>
          <h2 className="font-semibold text-black">
            {page.privacy.section5.h3}
          </h2>
          <p className="text-sm">{page.privacy.section5.p7}</p>
          <p className="text-sm">{page.privacy.section5.p8}</p>
          <p className="text-sm">{page.privacy.section5.p9}</p>
          <h2 className="font-semibold text-black">
            {page.privacy.section5.h4}
          </h2>
          <p className="text-sm">{page.privacy.section5.p10}</p>
          <p className="text-sm">{page.privacy.section5.p11}</p>
        </div>

        {/* section 6 */}
        <div className="flex flex-col gap-2">
          <h1 className="font-semibold text-xl text-black">
            {page.privacy.section6.mainHeading}
          </h1>
          <h2 className="font-semibold text-black">
            {page.privacy.section6.h1}
          </h2>
          <p className="text-sm">{page.privacy.section6.p1}</p>
          <p className="text-sm">{page.privacy.section6.p2}</p>
          <p className="text-sm">{page.privacy.section6.p3}</p>
          <h2 className="font-semibold text-black">
            {page.privacy.section6.h2}
          </h2>
          <p className="text-sm">{page.privacy.section6.p4}</p>
          <p className="text-sm">{page.privacy.section6.p5}</p>
          <p className="text-sm">{page.privacy.section6.p6}</p>
          <p className="text-sm">{page.privacy.section6.p7}</p>
          <p className="text-sm">{page.privacy.section6.p8}</p>
          <p className="text-sm">{page.privacy.section6.p9}</p>
          <h2 className="font-semibold text-black">
            {page.privacy.section6.h3}
          </h2>
          <p className="text-sm">{page.privacy.section6.p10}</p>
          <h2 className="font-semibold text-black">
            {page.privacy.section6.h4}
          </h2>
          <p className="text-sm">{page.privacy.section6.p11}</p>
          <h2 className="font-semibold text-black">
            {page.privacy.section6.h5}
          </h2>
          <p className="text-sm">{page.privacy.section6.p12}</p>
        </div>

        {/* section 7 */}
        <div className="flex flex-col gap-2">
          <h1 className="font-semibold text-xl text-black">
            {page.privacy.section7.mainHeading}
          </h1>
          <h2 className="font-semibold text-black">
            {page.privacy.section7.h1}
          </h2>
          <p className="text-sm">{page.privacy.section7.p1}</p>
          <p className="text-sm">{page.privacy.section7.p2}</p>
          <p className="text-sm">{page.privacy.section7.p3}</p>
          <p className="text-sm">{page.privacy.section7.p4}</p>
          <h2 className="font-semibold text-black">
            {page.privacy.section7.h2}
          </h2>
          <p className="text-sm">{page.privacy.section7.p5}</p>
          <h2 className="font-semibold text-black">
            {page.privacy.section7.h3}
          </h2>
          <p className="text-sm">{page.privacy.section7.p6}</p>
          <p className="text-sm">{page.privacy.section7.p7}</p>
          <h2 className="font-semibold text-black">
            {page.privacy.section7.h4}
          </h2>
          <h2 className="font-semibold text-black">
            {page.privacy.section7.h5}
          </h2>
          <p className="text-sm">{page.privacy.section7.p8}</p>
          <p className="text-sm">{page.privacy.section7.p9}</p>
          <h2 className="font-semibold text-black">
            {page.privacy.section7.h6}
          </h2>
          <p className="text-sm">{page.privacy.section7.p10}</p>
        </div>

        {/* section 8 */}
        <div className="flex flex-col gap-2">
          <h1 className="font-semibold text-xl text-black">
            {page.privacy.section8.mainHeading}
          </h1>
          <h2 className="font-semibold text-black">
            {page.privacy.section8.h1}
          </h2>
          <p className="text-sm">{page.privacy.section8.p1}</p>
          <h2 className="font-semibold text-black">
            {page.privacy.section8.h2}
          </h2>
          <p className="text-sm">{page.privacy.section8.p2}</p>
          <p className="text-sm">{page.privacy.section8.p3}</p>
          <h2 className="font-semibold text-black">
            {page.privacy.section8.h3}
          </h2>
          <p className="text-sm">{page.privacy.section8.p4}</p>
          <p className="text-sm">{page.privacy.section8.p5}</p>
          <h2 className="font-semibold text-black">
            {page.privacy.section8.h4}
          </h2>
          <p className="text-sm">{page.privacy.section8.p6}</p>
          <p className="text-sm">{page.privacy.section8.p7}</p>
          <p className="text-sm">{page.privacy.section8.p8}</p>
          <h2 className="font-semibold text-black">
            {page.privacy.section8.h5}
          </h2>
          <p className="text-sm">{page.privacy.section8.p9}</p>
          <p className="text-sm">{page.privacy.section8.p10}</p>
          <p className="text-sm">{page.privacy.section8.p11}</p>
          <p className="text-sm">{page.privacy.section8.p12}</p>
          <h2 className="font-semibold text-black">
            {page.privacy.section8.h6}
          </h2>
          <p className="text-sm">{page.privacy.section8.p13}</p>
          <h2 className="font-semibold text-black">
            {page.privacy.section8.h7}
          </h2>
          <p className="text-sm">{page.privacy.section8.p14}</p>
          <p className="text-sm">{page.privacy.section8.p15}</p>
          <h2 className="font-semibold text-black">
            {page.privacy.section8.h8}
          </h2>
          <p className="text-sm">{page.privacy.section8.p16}</p>
          <p className="text-sm">{page.privacy.section8.p17}</p>
          <h2 className="font-semibold text-black">
            {page.privacy.section8.h9}
          </h2>
          <p className="text-sm">{page.privacy.section8.p18}</p>
        </div>
      </MaxWidthWrapper>
    </Wrapper>
  );
};

export default page;
