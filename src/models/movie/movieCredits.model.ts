export interface CastCrew {
  adult: boolean;
  gender?: number | null;
  id?: number | null;
  known_for_department?: string | null;
  name?: string | null;
  original_name?: string | null;
  popularity?: number | null;
  profile_path?: string | null;
  cast_id?: number | null;
  character?: string | null;
  credit_id?: string | null;
  order?: number | null;
}

export interface MovieCredits {
  id: number;
  cast: CastCrew[];
  crew: CastCrew[];
}
