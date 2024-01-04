'use client';

import { Box, Card, CardContent, Link, Typography } from '@mui/material';
import React from 'react';
import { Link as LinkInterface } from '../../app/dataModels/link';
import { Project as ProjectInterface } from '../../app/dataModels/project';

export default function Project({
  title,
  description,
  links,
  partners,
  languages,
  technologies,
  programAreas,
  location,
  status,
  contributors,
}: ProjectInterface) {
  return (
    <Box>
      <Card className="project-card">
        <CardContent>
          <Typography
            variant="h5"
            component="div"
            sx={{ fontFamily: 'inherit', fontWeight: '700' }}
          >
            {title}
          </Typography>
          <Typography variant="body2" sx={{ fontFamily: 'inherit' }}>
            {description}
          </Typography>
          <Typography variant="body2" mt={0.5}>
            {status && (
              <span>
                <strong>Status:</strong> {status}
              </span>
            )}
          </Typography>
          <Typography variant="body2" mt={0.5}>
            {location && (
              <span>
                <strong>Location:</strong> {location}
              </span>
            )}
          </Typography>
          <Typography variant="body2" mt={0.5}>
            <strong>Links:</strong>&nbsp;
            {links.map((link: LinkInterface, idx: number) => (
              <Link href={link.url} key={`project-link-${idx}`}>
                {link.title}
              </Link>
            ))}
          </Typography>
          {partners && (
            <Typography variant="body2" mt={0.5}>
              {' '}
              <span>
                <strong>Partners:</strong> {partners}
              </span>
            </Typography>
          )}
          <Typography variant="body2" mt={0.5}>
            <strong>Languages:</strong> {languages.join(', ')}
          </Typography>
          {technologies && (
            <Typography variant="body2" mt={0.5}>
              <strong>Technologies:</strong> {technologies.join(', ')}
            </Typography>
          )}
          {programAreas && (
            <Typography variant="body2" mt={0.5}>
              <strong>Program Areas:</strong> {programAreas}
            </Typography>
          )}
          {contributors && (
            <Typography variant="body2" mt={0.5}>
              <strong>Contributors:</strong> {contributors.join(', ')}
            </Typography>
          )}
        </CardContent>
      </Card>
    </Box>
  );
}
