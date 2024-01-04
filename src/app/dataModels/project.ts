import { Link } from './link';
import ProjectStatusEnum from '@/enum/project-status-enum';
export interface Project {
  title: string;
  description: string;
  links: Link[];
  partners?: string;
  languages: string[];
  technologies?: string[];
  programAreas?: string;
  location?: string;
  status?: ProjectStatusEnum;
  contributors: string[];
}
