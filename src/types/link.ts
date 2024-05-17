export interface Link {
  shortenedLink: string | null;
  error: string | null;
  loading: boolean;
  shortenLink: (link: string) => void;
}
