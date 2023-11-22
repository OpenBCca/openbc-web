import { Link } from './link';

export interface Project {
  title: string;
  description: string;
  links: Link[];
  partner?: string;
  languages: string[];
  technologies?: string[];
  programAreas?: string;
  location?: string;
  status?: ProjectStatusTypes;
}

export enum ProjectStatusTypes {
  active = 'Active',
  completed = 'Completed',
  onHold = 'On Hold',
  inActive = 'Inactive',
}
