export interface Author {
  id: string;
  name: string;
}

export interface Category {
  id: string;
  name: string;
  slug?: string;
  meta_description?: string;
  keywords?: string;
}

export interface Subcategory {
  id: string;
  name: string;
  slug?: string;
  meta_description?: string;
  keywords?: string;
  category_id: string;
}

export interface Post {
  id: string;
  title: string;
  slug: string;
  content: string;
  summary_tldr: string;
  meta_description: string;
  keywords?: string;
  canonical_url: string;
  featured_image: string;
  author_id: string;
  category_id: string;
  subcategory_id?: string;
  cta_label?: string;
  cta_url?: string;
  author_bio?: string;
  status: "draft" | "published";
  published_at: string | null;
  created_at?: string;
  updated_at?: string;
  authors?: Author;
  categories?: Category;
  subcategories?: Subcategory;
}

export interface Job {
  id: string;
  title: string;
  slug: string;
  category: string;
  short_description: string;
  description: string;
  skills: string[];
  deadline: string;
  development_time: string;
  budget_range: string;
  status: "open" | "closed";
  created_at?: string;
}

export interface JobCategory {
  id: string;
  name: string;
}
