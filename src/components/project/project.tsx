'use client';

import { Box, Card, CardContent, Link, Typography } from '@mui/material';
import {} from 'react';
import { Link as LinkInterface } from '../../app/dataModels/link';
import { Project as ProjectInterface } from '../../app/dataModels/project';

const moreInformationStyles = {
  marginTop: '1% 0',
};
export default function Project({
  title,
  description,
  links,
  partner,
  languages,
  technologies,
  programAreas,
  location,
  status,
}: ProjectInterface) {
  return (
    <Box sx={{ fontFamily: 'inherit' }}>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography
            variant="h4"
            component="div"
            sx={{ fontFamily: 'inherit', fontWeight: '600' }}
          >
            {title}
          </Typography>
          <Typography variant="body2" sx={{ fontFamily: 'inherit' }}>
            {description}
          </Typography>
          {status && (
            <Typography
              variant="body2"
              component="p"
              mt={0.5}
            >{`Status: ${status}`}</Typography>
          )}
          {location && (
            <Typography
              variant="body2"
              component="p"
              mt={0.5}
            >{`Location: ${location}`}</Typography>
          )}
          <Typography variant="body2" mt={0.5}>
            Links:&nbsp;
            {links.map((link: LinkInterface, idx: number) => (
              <Link href={link.url} key={`project-link-${idx}`}>
                {link.title}
              </Link>
            ))}
          </Typography>
          {partner && (
            <Typography variant="body2" mt={0.5}>
              {' '}
              Partner: {partner}
            </Typography>
          )}
          <Typography variant="body2" mt={0.5}>
            Languages: {languages.join(', ')}
          </Typography>
          {technologies && (
            <Typography mt={0.5}>
              Technologies: {technologies.join(', ')}
            </Typography>
          )}
          {programAreas && (
            <Typography variant="body2" mt={0.5}>
              Program Areas: {programAreas}
            </Typography>
          )}
        </CardContent>
      </Card>
    </Box>
  );
}
