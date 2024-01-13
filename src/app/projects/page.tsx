import { Container, CssBaseline, Grid } from '@mui/material';

import { Project as ProjectInterface } from '@/app/dataModels/project';
import Project from '@/components/project-card/project-card';
import { getLocalProjectData } from '@/utils/get-local-project-data/get-local-project-data';
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
                className="projects-card"
                key={project.title}
                xs={12}
                sm={6}
                md={4}
              >
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
