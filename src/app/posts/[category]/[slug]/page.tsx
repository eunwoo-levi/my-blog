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

const Page = async ({ params }: { params: Params }) => {
  const { content } = await getPageContent(params.category, params.slug);

  return (
    <main className="w-full min-h-screen flex flex-col justify-center items-center">
      <div className="mb-[40px]">
        <h1 className="text-[30px] font-bold">{params.slug}</h1>
      </div>
      <div className="w-[70%] py-[200px] flex flex-col justify-center items-center border border-slate-700 rounded-xl">
        {content}
      </div>
    </main>
  );
};

export default Page;
