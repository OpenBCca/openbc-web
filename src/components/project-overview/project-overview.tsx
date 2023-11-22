import { Card } from '@mui/material';
import Project from '@/components/project/project';
import { Link } from '@/app/dataModels/link';
import { ProjectStatusTypes } from '@/app/dataModels/project';

const linksForProjectOverview: Link[] = [
  { title: 'GitHub', url: 'https://github.com/OpenBCca/openbc-web' },
];

const languagesForProjectOverview = ['typescript'];

export function ProjectOverview() {
  return (
    <Card>
      <Project
        title={'Project Overview'}
        description={
          'OpenBC is a volunteer-driven organization that brings together technologists, designers, data analysts, and community members to work on projects that address civic and social challenges in BC using technology and innovation. They host hackathons, workshops, and events where participants collaborate to create solutions for local issues.'
        }
        links={linksForProjectOverview}
        languages={languagesForProjectOverview}
        status={ProjectStatusTypes.active}
        location={'Remote'}
      />
    </Card>
  );
}
