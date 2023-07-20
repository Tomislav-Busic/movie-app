interface AuthorDetails {
  name: string;
  username: string;
  avatar_path: string;
  rating: number;
}

interface Results {
  author: string;
  author_details: AuthorDetails[];
  content: string;
  created_at: string;
  id: string;
  updated_at: string;
  url: string;
}

export interface MovieReviews {
  id: number;
  page: number;
  results: Results[];
  total_pages: number;
  total_results: number;
}
