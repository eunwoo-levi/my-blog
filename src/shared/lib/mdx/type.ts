export interface BlogFrontMatter {
  title: string;
  author: string;
  thumbnail: string;
  publishDate: string;
  categoryId: number;
  keywords?: string[];
  description?: string;
}

export interface PostData {
  frontmatter: BlogFrontMatter;
  slug: string;
  category: string;
}

export interface ProjectFrontMatter {
  id: number;
  title: string;
  description: string;
  role: string;
  thumbnail: string;
  projectDate: string;
  url: string;
}

export interface ProjectData {
  frontmatter: ProjectFrontMatter;
  slug: string;
}
