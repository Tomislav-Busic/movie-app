interface AuthorDetails {
  name: string | null;
  username: string | null;
  avatar_path: string | null;
  rating: number | null;
}

export interface MovieReviewsResults {
  author: string;
  author_details: AuthorDetails;
  content: string;
  created_at: string;
  id: string;
  updated_at: string;
  url: string;
}

export interface MovieReviews {
  id: number;
  page: number;
  results: MovieReviewsResults[];
  total_pages: number;
  total_results: number;
}
