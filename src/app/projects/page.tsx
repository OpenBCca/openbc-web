import { Container, CssBaseline, Grid } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import { Project as ProjectInterface } from '@/app/dataModels/project';
import Project from '@/components/project/project';
import theme from '@/theme';
import { getLocalProjectData } from '@/utils/get-local-project-data/get-local-project-data';
import './projects.scss';

export default async function Projects() {
  const localProjectData = await getLocalProjectData();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        <h1 className="centered-elements">Projects</h1>
        <Container className="projects-container" maxWidth="md">
          <Grid
            container
            spacing={4}
            justifyContent="center"
            alignItems="flex-start"
          >
            {localProjectData.map((project: ProjectInterface) => (
              <Grid item key={project.title} xs={12} sm={6} md={4}>
                <Project
                  title={project.title}
                  description={project.description}
                  links={project.links}
                  languages={project.languages}
                  status={project.status}
                  programAreas={project.programAreas}
                  contributors={project.contributors}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}
