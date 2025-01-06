export interface BlogFrontMatter {
  title: string;
  author: string;
  thumbnail: string;
  publishDate: string;
  categoryId: number;
}

export interface PostData {
  frontmatter: BlogFrontMatter;
  slug: string;
  category: string;
}

export interface ProjectFrontMatter {
  title: string;
  description: string;
  role: string;
  thumbnail: string;
  publishDate: string;
}

export interface ProjectData {
  frontmatter: ProjectFrontMatter;
  slug: string;
}
