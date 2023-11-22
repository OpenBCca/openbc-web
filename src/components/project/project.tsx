'use client';

import { Box, Card, CardContent, Link, Typography } from '@mui/material';
import {} from 'react';
import { Link as LinkInterface } from '../../app/dataModels/link';
import { Project as ProjectInterface } from '../../app/dataModels/project';

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
    <Box>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h4" component="div">
            {title}
          </Typography>
          <Typography variant="body2">{description}</Typography>
          {status && <Typography variant="body1">{status}</Typography>}
          {location && <Typography variant="body1">{location}</Typography>}
          <Typography variant="h6">
            {links.map((link: LinkInterface, idx: number) => (
              <Link href={link.url} key={`project-link-${idx}`}>
                {link.title}
              </Link>
            ))}
          </Typography>
          <Typography>Partner: {partner}</Typography>
          <Typography>Languages: {languages.join(', ')}</Typography>
          {technologies && (
            <Typography>Technologies: {technologies.join(', ')}</Typography>
          )}
          {programAreas && (
            <Typography>Program Areas: {programAreas}</Typography>
          )}
        </CardContent>
      </Card>
    </Box>
  );
}
