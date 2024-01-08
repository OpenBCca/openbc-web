import Project from '@/components/project/project';
import { getLocalProjectData } from '@/utils/get-local-project-data/get-local-project-data';
import { Box, Card } from '@mui/material';
import { Fragment } from 'react';
import { APICALL } from '../../../constants';
import { Project as ProjectInterface } from '../../app/dataModels/project';
import './project-overview.scss';

export default async function ProjectOverview() {
  let localProjectData;
  if (APICALL) {
    /// Change it to the case when it is reuqired to fetch the data from the API
    console.log('Custom flag is true');
  } else {
    localProjectData = await getLocalProjectData();
  }

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
                location={project.location}
                contributors={project.contributors}
              />
            </Card>
          </Box>
        </Fragment>
      ))}
    </Box>
  );
}
