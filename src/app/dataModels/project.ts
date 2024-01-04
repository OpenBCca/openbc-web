import { Link } from './link';

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

export enum ProjectStatusTypes {
  active = 'Active',
  completed = 'Completed',
  onHold = 'On Hold',
  inactive = 'Inactive',
}
