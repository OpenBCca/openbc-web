interface Link {
  title: string;
  url: string;
}

export interface Project {
  title: string;
  description: string;
  links: Array<Link>;
  partner?: string;
  languages: Array<string>;
  technologies?: Array<string>;
  programAreas?: string;
}
