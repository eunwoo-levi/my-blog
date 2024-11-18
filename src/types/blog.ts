interface BlogFrontMatter {
  title: string;
  author: string;
  thumbnail: string;
  publishDate: string;
  categoryId: number;
}

interface PostData {
  frontmatter: BlogFrontMatter;
  slug: string;
  category: string;
}

  
  export interface BlogCache {
    categories: Record<string, PostData[]>;
    posts: Record<string, PostData[]>;
  }
  
  export type Category = string;