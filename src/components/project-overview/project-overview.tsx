import Project from '@/components/project/project';
import { Project as ProjectInterface } from '../../app/dataModels/project';
import { getLocalProjectData } from '@/utils/getLocalProjectData';
import { Box, Card } from '@mui/material';
import './project-overview.scss';

export default async function ProjectOverview() {
  const localProjectData = await getLocalProjectData();
  return (
    <Box className="project-overview-container">
      {localProjectData.map((project: ProjectInterface) => (
        <>
          <Box className="project-overview-card">
            <Card>
              <Project
                key={project.title}
                title={project.title}
                description={project.description}
                links={project.links}
                languages={project.languages}
                status={project.status}
                location={project.location}
                contributors={project.contributors}
              />
            </Card>
          </Box>
        </>
      ))}
    </Box>
  );
}
