import Giscus from "@/components/Giscus";
import { getPostBySlug } from "@/lib/mdx";
import { ReactElement } from "react";

// PostMeta 타입을 가져오거나 정의해 주십시오.
interface PostMeta {
  title: string;
  slug: string;
  author: string;
  publishDate: string;
  thumbnail: string;
}

interface Params {
  category: string;
  slug: string;
}

const getPageContent = async (
  category: string,
  slug: string
): Promise<{ meta: PostMeta; content: ReactElement }> => {
  const { meta, content } = await getPostBySlug(category, slug);
  return { meta, content };
};

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<{ title: string }> {
  const { meta } = await getPageContent(params.category, params.slug);
  return { title: meta.title };
}

const SlugPage = async ({ params }: { params: Params }) => {
  const { meta, content } = await getPageContent(params.category, params.slug);

  return (
    <main className="w-full min-h-screen flex flex-col justify-center items-center">
      <div className="mb-[40px]">
        <h1 className="text-[35px] mt-[50px] font-bold">{meta.title}</h1>{" "}
      </div>
      <div className="w-[70%] py-[200px] flex flex-col justify-center pl-[80px] mb-[80px] border border-slate-700 rounded-xl prose-lg ">
        {content}
      </div>
      <Giscus />
    </main>
  );
};

export default SlugPage;
