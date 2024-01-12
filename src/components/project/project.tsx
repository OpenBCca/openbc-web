'use client';

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Link,
  Typography,
} from '@mui/material';
import React from 'react';
import { Link as LinkInterface } from '../../app/dataModels/link';
import { Project as ProjectInterface } from '../../app/dataModels/project';
import './project.scss';

export default function Project({
  title,
  description,
  links,
  partners,
  languages,
  technologies,
  programAreas,
  status,
  contributors,
}: ProjectInterface) {
  return (
    <Card className="project-card">
      <CardMedia
        component="div"
        className="project-card-media"
        image="https://source.unsplash.com/random?wallpapers"
      />
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
          <strong>Link(s):</strong>&nbsp;
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
              <strong>Partner(s):</strong> {partners}
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
            <strong>Program Area(s):</strong> {programAreas.join(', ')}
          </Typography>
        )}
        {contributors && (
          <Typography variant="body2" mt={0.5}>
            <strong>Contributors:</strong> {contributors.join(', ')}
          </Typography>
        )}
      </CardContent>
      <CardActions className="project-card-buttons">
        <Button size="small">View</Button>
        <Button size="small">Github</Button>
      </CardActions>
    </Card>
  );
}
