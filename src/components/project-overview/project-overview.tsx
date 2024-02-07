import { Project as ProjectInterface } from '@/app/dataModels/project';
import Project from '@/components/project-card/project-card';
import { getLocalProjectData } from '@/utils/get-local-project-data/get-local-project-data';
import { Box, Button, Card, Container, Typography } from '@mui/material';
import { Lato } from 'next/font/google';
import { Fragment } from 'react';
import './project-overview.scss';

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default async function ProjectOverview() {
  const localProjectData = await getLocalProjectData();
  const githubApiCall = process.env.githubApiCall;
  return !githubApiCall ? (
    <Box
      className={`project-overview-container ${lato.className}`}
      component="section"
    >
      <Container className="project-overview">
        <Typography className="project-overview__heading" variant="h2">
          Our Projects
        </Typography>
        <Box className="project-overview__card-container">
          {localProjectData.map((project: ProjectInterface) => (
            <Fragment key={project.title}>
              <Project
                className="project-overview__card"
                title={project.title}
                description={project.description}
                links={project.links}
                status={project.status}
              />
            </Fragment>
          ))}
        </Box>
        <Box className="project-overview__cta-container">
          <Box className="project-overview__cta-text-container">
            <Typography variant="body1" className="project-overview__cta-text">
              Have an idea to improve community or civic life in BC?
            </Typography>
            <Typography variant="h3" className="project-overview__cta-title">
              We want to hear it!
            </Typography>
          </Box>
          <Button
            variant="outlined"
            size="large"
            className="project-overview__cta-button"
            href="mailto:openbc@gmail.com"
          >
            Propose A Project
          </Button>
        </Box>
      </Container>
    </Box>
  ) : null; // This line should be revised when GITHUB API CALL is ready
}
