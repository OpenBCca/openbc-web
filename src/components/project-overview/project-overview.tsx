import { Box, Card, CardContent, Typography } from '@mui/material';
import Project from '@/components/project/project';
import { Link } from '@/app/dataModels/link';
import { ProjectStatusTypes } from '@/app/dataModels/project';

const linksForProjectOverview: Link[] = [
  { title: 'GitHub', url: 'https://github.com/OpenBCca/openbc-web' },
];

const languagesForProjectOverview = ['Typescript'];

export function ProjectOverview() {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: '#ededed',
    },
    cardContainer: {
      maxWidth: 700,
      width: '100%',
      marginBottom: '1rem',
    },
  };
  return (
    <Box sx={styles.container}>
      <Box sx={styles.cardContainer}>
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
      </Box>
      <Box sx={styles.cardContainer}>
        <Card sx={{ maxWidth: '100%' }}>
          <CardContent>
            <Typography
              variant="h5"
              component="div"
              sx={{ fontFamily: 'inherit', fontWeight: '700' }}
            >
              Current Project Team
            </Typography>
            <Typography variant="body2">
              {' '}
              <strong>Alex Johnson</strong> - Developer
            </Typography>
            <Typography variant="body2">
              {' '}
              <strong>Emily Smith</strong> - UI/UX Design Team
            </Typography>
            <Typography variant="body2">
              {' '}
              <strong>Daniel Brown</strong> - UI/UX Research Team
            </Typography>
            <Typography variant="body2">
              {' '}
              <strong>Olivia Davis</strong> - Data Scientist
            </Typography>
            <Typography variant="body2">
              {' '}
              <strong>Max Anderson</strong> - Project Manager
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
