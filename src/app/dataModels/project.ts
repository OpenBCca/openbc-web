import { Link } from './link';

export interface Project {
  title: string;
  description: string;
  links: Link[];
  partner?: string;
  languages: string[];
  technologies?: string[];
  programAreas?: string;
}
