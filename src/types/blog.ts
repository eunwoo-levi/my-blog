export interface BlogFrontMatter {
    title: string;
    author: string;
    thumbnail: string;
    publishDate: string;
    categoryId: number;
    description?: string;
  }
  
  export interface PostData {
    frontmatter: BlogFrontMatter;
    slug: string;
    category: string;
  }
  
  export interface BlogCache {
    byCategory: Record<string, PostData[]>;
    bySlug: Record<string, PostData>;
    allPosts: PostData[];
  }
  
  export type Tag = string;
  export type Category = string;