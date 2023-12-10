import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import Project from '@/components/project/project';
import { Link } from '@/app/dataModels/link';
import { ProjectStatusTypes } from '@/app/dataModels/project';

const linksForProjectOverview: Link[] = [
  { title: 'GitHub', url: 'https://github.com/OpenBCca/openbc-web' },
];

const languagesForProjectOverview = ['Typescript'];

export function ProjectOverview() {
  return (
    <Grid
      container
      spacing={1}
      alignItems="center"
      justifyContent="center"
      sx={{ backgroundColor: '#ededed' }}
      direction="column"
    >
      <Grid item>
        <Card
          sx={{
            maxWidth: 700,
          }}
        >
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
      </Grid>
      <Grid item>
        <Card
          sx={{
            maxWidth: 700,
          }}
        >
          <CardContent>
            <Typography variant="h4">Current Project Team</Typography>
            <Typography paragraph={true} variant="body2">
              {' '}
              Sam Huo - President
            </Typography>
            <Typography paragraph={true} variant="body2">
              {' '}
              Toki  - Vice President
            </Typography>
            <Typography paragraph={true} variant="body2">
              {' '}
              Mangat Toor - Developer
            </Typography>
            <Typography paragraph={true} variant="body2">
              {' '}
              Mangat Toor - Developer
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
