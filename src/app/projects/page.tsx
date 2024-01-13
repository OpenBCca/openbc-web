import { Chip, Container, CssBaseline, Grid } from '@mui/material';

import { Project as ProjectInterface } from '@/app/dataModels/project';
import Project from '@/components/project-card/project-card';
import { getLocalProjectData } from '@/utils/get-local-project-data/get-local-project-data';
import getProjectStatusColor from '@/utils/get-project-status-color/get-project-status-color';
import './projects.scss';

export default async function Projects() {
  const localProjectData = await getLocalProjectData();

  return (
    <Container className="projects-container">
      <CssBaseline />
      <main>
        <h1 className="projects-heading">Our Projects</h1>
        <Container>
          <Grid
            container
            spacing={4}
            justifyContent="center"
            alignItems="stretch"
          >
            {localProjectData.map((project: ProjectInterface) => (
              <Grid
                item
                className="project-card-item"
                key={project.title}
                xs={12}
                sm={6}
                md={4}
              >
                <Chip
                  className="project-card-status-label"
                  label={project.status}
                  sx={{
                    bgcolor: getProjectStatusColor(project.status),
                  }}
                />
                <Project
                  title={project.title}
                  description={project.description}
                  projectLead={project.projectLead}
                  links={project.links}
                  tools={project.tools}
                  languages={project.languages}
                  technologies={project.technologies}
                  programAreas={project.programAreas}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </Container>
  );
}
