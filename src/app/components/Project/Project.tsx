import {
  Box,
  Card,
  CardContent,
  Typography,
} from '@mui/material';
import dynamic from 'next/dynamic';
import { } from 'react';

/**
 * @todo Is there a better way to import the Link component from Material UI without getting the NextJS error:
 *
 * "Cannot access Link.prototype on the server. You cannot dot into a client module from a server component. You can only pass the imported name through."
 */
const ClientOnlyLink = dynamic(() => import('@mui/material/Link'), {
  ssr: false,
});

interface Link {
  title: string;
  url: string;
}

interface ProjectProps {
  title: string;
  description: string;
  links: Array<Link>;
  partner?: string;
  languages: Array<string>;
  technologies?: Array<string>;
  programAreas?: string;
}

export default function Project({
  title,
  description,
  links,
  partner,
  languages,
  technologies,
  programAreas,
}: ProjectProps) {
  return (
    <Box>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h4" component="div">
            {title}
          </Typography>
          <Typography variant="body2">
            {description}
          </Typography>
          <Typography variant="h6">
            {
              links.map(link => (
                <ClientOnlyLink href={link.url} target="_blank" rel="noopener">{link.title}</ClientOnlyLink>
              ))
            }
          </Typography>
          <Typography>
            Partner: {partner}
          </Typography>
          <Typography>
            Languages: {languages.join(", ")}
          </Typography>
          {
            technologies
            && (
              <Typography>
                Technologies: {technologies.join(", ")}
              </Typography>
            )
          }
          {
            programAreas
            && (
              <Typography>
                Program Areas: {programAreas}
              </Typography>
            )
          }
        </CardContent>
      </Card>
    </Box>
  );
};
