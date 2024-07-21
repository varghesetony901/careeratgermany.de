import Hero from "@/components/LandingPage/Hero";
import Services from "@/components/Services";
import Team from "@/components/Team";
import MaxWidthWrapper from "@/components/ui/MaxWidthWrapper";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import { GiGiftOfKnowledge, GiPassport, GiProcessor } from "react-icons/gi";
import { GrUserWorker } from "react-icons/gr";
import { TbLivePhoto } from "react-icons/tb";
import { VscWorkspaceTrusted } from "react-icons/vsc";

const perks = [
  {
    nameEn: "Potential Trainee",
    nameDe: "Potenzielle Auszubildende",
    Icon: GrUserWorker,
    descriptionEn:
      "C@G Recruiting UG Provides Visa porcessing support for the successfull applicant.",
    descriptionDe:
      "C@G Recruiting UG bietet Unterstützung bei der Visumsbearbeitung für erfolgreiche Bewerber.",
  },
  {
    nameEn: "Faster Processing",
    nameDe: "Schnellere Bearbeitung",
    Icon: GiProcessor,
    descriptionEn: "Get your application processed faster through our portal.",
    descriptionDe:
      "Lassen Sie Ihre Bewerbung schneller über unser Portal bearbeiten.",
  },
  {
    nameEn: "Knowledge of German",
    nameDe: "Deutschkenntnisse",
    Icon: GiGiftOfKnowledge,
    descriptionEn:
      "With the best Travel plan all our successfull applicants move to Germany quickly.",
    descriptionDe:
      "Mit dem besten Reiseplan kommen alle unsere erfolgreichen Bewerber schnell nach Deutschland.",
  },
  {
    nameEn: "100% visa success rate",
    nameDe: "100% Visumerfolgsquote",
    Icon: GiPassport,
    descriptionEn: "We have 100% visa success rate since 2017.",
    descriptionDe: "Seit 2017 haben wir eine 100% Visumerfolgsquote.",
  },
  {
    nameEn: "Live status updates",
    nameDe: "Live-Status-Updates",
    Icon: TbLivePhoto,
    descriptionEn:
      "Through our live status updates a student can easily track the process.",
    descriptionDe:
      "Durch unsere Live-Status-Updates können Schüler den Prozess leicht verfolgen.",
  },
  {
    nameEn: "Career Insurance",
    nameDe: "Karriereversicherung",
    Icon: VscWorkspaceTrusted,
    descriptionEn:
      "We ensure the safety for each and every students who wish to study in Germany.",
    descriptionDe:
      "Wir sorgen für die Sicherheit jedes Schülers, der in Deutschland studieren möchte.",
  },
];
export default async function Home({ params }: { params: { lang: Locale } }) {
  const locale = params.lang;
  const { page } = await getDictionary(locale);

  return (
    <>
      <div>
        <Hero locale={locale} />
        <div className="border-b border-yellow-300 pt-[900px] sm:pt-[850px] lg:pt-[600px] xl:pt-[650px] 2xl:pt-[750px]"></div>

        <MaxWidthWrapper className="px-4">
          <div className="pt-12 ">
            <h1 className="trac pb-10 text-center text-3xl font-bold">
              {page.home.about.title}
            </h1>
            <div className="grid lg:grid-cols-2 gap-10">
              <img
                src="https://career-at-germany-de.s3.ap-south-1.amazonaws.com/static+images/why.jpg"
                alt=""
                className="lg:mt-2 rounded-md"
              />
              <div className="flex flex-col gap-4 text-gray-500 sm:text-lg font-light text-justify">
                <p>{page.home.about.description1}</p>
                <p>{page.home.about.description2}</p>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>

        {locale === "en" ? (
          <MaxWidthWrapper className="py-14 px-4">
            <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-y-6 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-8">
              {perks.map((perk) => (
                <div
                  key={perk.nameEn}
                  className="border  p-4  py-12 text-center lg:block lg:text-center rounded-lg shadow-lg hover:scale-[102%] duration-300"
                >
                  <div className="md:flex-shrink-0 flex justify-center">
                    <div className="h-16 w-16 flex items-center justify-center rounded-full bg-yellow-400">
                      {<perk.Icon className="w-1/3 h-1/3" />}
                    </div>
                  </div>

                  <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                    <h3 className="text-base font-medium text-gray-900">
                      {perk.nameEn}
                    </h3>
                    <p className="mt-3 text-sm text-muted-foreground">
                      {perk.descriptionEn}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </MaxWidthWrapper>
        ) : (
          <MaxWidthWrapper className="py-14 px-4">
            <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-y-6 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-8">
              {perks.map((perk) => (
                <div
                  key={perk.nameDe}
                  className="border  p-4  py-12 text-center lg:block lg:text-center rounded-lg shadow-lg hover:scale-[102%] duration-300"
                >
                  <div className="md:flex-shrink-0 flex justify-center">
                    <div className="h-16 w-16 flex items-center justify-center rounded-full bg-yellow-400">
                      {<perk.Icon className="w-1/3 h-1/3" />}
                    </div>
                  </div>

                  <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                    <h3 className="text-base font-medium text-gray-900">
                      {perk.nameDe}
                    </h3>
                    <p className="mt-3 text-sm text-muted-foreground">
                      {perk.descriptionDe}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </MaxWidthWrapper>
        )}

        <div className="border-t border-yellow-300"></div>
        <Services locale={locale} />
        <div className="border-t border-yellow-300"></div>
        <Team locale={locale} />
      </div>
    </>
  );
}
