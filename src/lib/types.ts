export interface Author {
  id: string;
  name: string;
}

export interface Category {
  id: string;
  name: string;
}

export interface Post {
  id: string;
  title: string;
  slug: string;
  content: string;
  summary_tldr: string;
  meta_description: string;
  canonical_url: string;
  featured_image: string;
  author_id: string;
  category_id: string;
  status: "draft" | "published";
  published_at: string | null;
  created_at?: string;
  updated_at?: string;
  authors?: Author;
  categories?: Category;
}
