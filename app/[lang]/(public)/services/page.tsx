"use client";
import MaxWidthWrapper from "@/components/ui/MaxWidthWrapper";
import { Skeleton } from "@/components/ui/skeleton";

import DataFormCompany from "@/components/DataFormCompany";
import DataFormTrainee from "@/components/DataFormTrainee";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import Wrapper from "@/components/animation-wrapper/Wrapper";
import { useParams } from "next/navigation";

const Page = () => {
  const [isTrainee, setIsTrainee] = useState<string | undefined>();
  const params = useParams();
  const locale = params?.lang; 

  return (
    <Wrapper>
      <MaxWidthWrapper className="py-12">
        <h1 className="font-bold pb-6  text-center text-3xl">{locale === "en" ? "Services" : "Dienste"}</h1>
        <div className=" pb-6 text-center flex flex-col gap-2">
          <p className="font-semibold">
            
            {locale === "en" ? "You can start applying for your requirement. For more information about the exact procedure, send in the following form, with absolutely no obligation." : "Sie können sich für Ihren Bedarf bewerben. Für weitere Informationen über das genaue Verfahren können Sie das folgende Formular völlig unverbindlich ausfüllen."}
          </p>
          <p className="text-red-500">
            
            {locale === "en" ? "* Please be aware that, you can only send one request at a time. So try to include accurate details in the form not to miss your chance reaching us. Once we resolve your request, you can try again. Incase you find something difficult during the process, you can mail us through the contact page." : "* Bitte beachten Sie, dass Sie jeweils nur eine Anfrage senden können. Versuchen Sie also, genaue Angaben in das Formular einzutragen, um Ihre Chance, uns zu erreichen, nicht zu verpassen. Sobald wir Ihre Anfrage gelöst haben, können Sie es erneut versuchen. Sollten Sie während des Prozesses auf Schwierigkeiten stoßen, können Sie uns über die Kontaktseite eine E-Mail schicken."}
            
          </p>
          <p className="pt-2">
            
            {locale === "en" ? "One of our employees will contact you within 72 hours." : "Einer unserer Mitarbeiter wird Sie innerhalb von 72 Stunden kontaktieren."}
          </p>
          <p className="pt-2 font-semibold ">
          {locale === "en" ? "You are also welcome to contact us directly on" : "Sie können uns auch gerne direkt kontaktieren unter"}
            <span className="text-lg font-bold"> +49 15 14 20 53 907</span>
          </p>
        </div>
        {/* choose category */}
        <div className="w-full mb-6">
          <p className="text-center mb-4">
          
          {locale === "en" ? "Please choose a category to proceed further." : "Bitte wählen Sie eine Kategorie, um fortzufahren."}
          </p>
          <Select
            onValueChange={(e) => {
              setIsTrainee(e);
            }}
          >
            <SelectTrigger className="sm:w-80 rounded-xl m-auto border border-red-400 focus:border-none focus:outline-none focus:ring-1 focus:ring-red-600">
              <SelectValue placeholder={locale === "en" ? "Select category *" : "Kategorie auswählen *"} />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="trainee">{locale === "en" ? "Trainees" : "Auszubildende"}</SelectItem>
                <SelectItem value="company">{locale === "en" ? "Companies" : "Unternehmen"}</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        {/* skeleton */}
        {isTrainee === undefined && (
          <div className="md:w-[600px] flex flex-col gap-4 pb-16 m-auto">
            <Skeleton className="bg-gray-200 h-[10px] w-64 rounded-xl" />
            <Skeleton className="bg-gray-200 h-[20px] w-full rounded-xl" />
            <Skeleton className="bg-gray-200 h-[10px] w-64 rounded-xl" />
            <Skeleton className="bg-gray-200 h-[20px] w-full rounded-xl" />
            <Skeleton className="bg-gray-200 h-[10px] w-64 rounded-xl" />
            <Skeleton className="bg-gray-200 h-[20px] w-full rounded-xl" />
            <Skeleton className="bg-gray-200 h-[10px] w-64 rounded-xl" />
            <Skeleton className="bg-gray-200 h-[20px] w-full rounded-xl" />
            <Skeleton className="bg-gray-200 h-[10px] w-64 rounded-xl" />
            <Skeleton className="bg-gray-200 h-[20px] w-full rounded-xl" />
            <Skeleton className="bg-gray-200 h-[30px] w-full rounded-xl" />
          </div>
        )}

        {/* form 1 */}

        {isTrainee === "trainee" && <DataFormTrainee />}

        {/* form 2 */}

        {isTrainee === "company" && <DataFormCompany />}
      </MaxWidthWrapper>
    </Wrapper>
  );
};

export default Page;
