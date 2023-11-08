'use client'

import {
  Box,
  Card,
  CardContent,
  Link,
  Typography,
} from '@mui/material';
import { } from 'react';
import {
  Project,
} from './Project.types';

export default function Project({
  title,
  description,
  links,
  partner,
  languages,
  technologies,
  programAreas,
}: Project) {
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
              links.map((link, idx) => (
                <Link href={link.url} key={`project-link-${idx}`}>{link.title}</Link>
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
