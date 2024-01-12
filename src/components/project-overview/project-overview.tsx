import { Project as ProjectInterface } from '@/app/dataModels/project';
import Project from '@/components/project-card/project-card';
import { getLocalProjectData } from '@/utils/get-local-project-data/get-local-project-data';
import { Box, Card } from '@mui/material';
import { Fragment } from 'react';
import './project-overview.scss';

export default async function ProjectOverview() {
  const localProjectData = await getLocalProjectData();
  return (
    <Box className="project-overview-container">
      {localProjectData.map((project: ProjectInterface) => (
        <Fragment key={project.title}>
          <Box className="project-overview-card">
            <Card>
              <Project
                title={project.title}
                description={project.description}
                links={project.links}
                languages={project.languages}
                status={project.status}
                programAreas={project.programAreas}
                contributors={project.contributors}
              />
            </Card>
          </Box>
        </Fragment>
      ))}
    </Box>
  );
}
