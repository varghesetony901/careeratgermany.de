import { fetchPhotoData } from "@/actions/photo-data";
import { fetchPhotoTags } from "@/actions/tags";
import PaginationFC from "@/components/Pagination";
import Wrapper from "@/components/animation-wrapper/Wrapper";
import PhotoVideoSwitch from "@/components/gallery/PhotoVideoSwitch";
import Photos from "@/components/gallery/Photos";
import Tags from "@/components/gallery/Tags";
import Videos from "@/components/gallery/Videos";
import MaxWidthWrapper from "@/components/ui/MaxWidthWrapper";
import { Locale } from "@/i18n.config";

const Page = async ({
  searchParams,
  params,
}: {
  searchParams: { pageNumber: string; tag?: string; type: string };
  params: { lang: Locale };
}) => {
  const locale = params.lang;
  const pageNumber = searchParams.pageNumber || "1";
  const tag = searchParams.tag || "All";
  const type = searchParams.type || "photo";

  const photoData = await fetchPhotoData(Number(pageNumber), 10, tag);
  const photos = photoData?.photos;
  const count = photoData?.count;

  const photoTagsData = await fetchPhotoTags();
  const photoTagsEn = photoTagsData?.response?.map((tag) => tag.tagNameEn);
  const photoTagsDe = photoTagsData?.response?.map((tag) => tag.tagNameDe);

  return (
    <Wrapper>
      <MaxWidthWrapper className="py-12 ">
        <h1 className="font-bold pb-2 text-center text-3xl">Gallery</h1>
        <div>
          <PhotoVideoSwitch />
          {type === "photo" &&
            (locale === "en" ? (
              <div>
                <Tags photoTags={photoTagsEn} />
                <Photos photos={photos} />
                <PaginationFC count={count} />
              </div>
            ) : (
              <div>
                <Tags photoTags={photoTagsDe} />
                <Photos photos={photos} />
                <PaginationFC count={count} />
              </div>
            ))}
          {type === "video" && <Videos />}
        </div>
      </MaxWidthWrapper>
    </Wrapper>
  );
};

export default Page;
