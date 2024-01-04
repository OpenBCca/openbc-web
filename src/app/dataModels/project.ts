import { Link } from './link';
import { ProjectStatusTypes } from './project-status-types';
export interface Project {
  title: string;
  description: string;
  links: Link[];
  partners?: string;
  languages: string[];
  technologies?: string[];
  programAreas?: string;
  location?: string;
  status?: ProjectStatusTypes;
  contributors: string[];
}
