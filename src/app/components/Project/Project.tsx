import { } from 'react';

interface Link {
  title: string;
  url: string;
}

interface ProjectProps {
  title: string;
  description: string;
  links: Array<Link>;
  partner?: string;
  languages: Array<string>;
  technologies?: Array<string>;
  programAreas?: string;
}

export default function Project({
  title,
  description,
  links,
  partner,
  languages,
  technologies,
  programAreas,
}: ProjectProps) {
  return (
    <div>Hello World</div>
  );
};
