'use client';

import { Link as LinkInterface } from '@/app/dataModels/link';
import { Project as ProjectInterface } from '@/app/dataModels/project';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Link,
  Typography,
} from '@mui/material';
import React from 'react';
import './project-card.scss';

export default function Project({
  title,
  description,
  links,
  languages,
  tools,
  technologies,
  programAreas, // status,
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
        <Typography
          variant="body2"
          sx={{ fontFamily: 'inherit' }}
          mt={1}
          mb={2}
        >
          {description}
        </Typography>

        {languages && (
          <Typography component="div" variant="body2" mt={1}>
            <Typography variant="body2">Languages</Typography>
            <Typography variant="body2">
              <strong>{languages.join(', ')}</strong>
            </Typography>
          </Typography>
        )}

        {tools && (
          <Typography component="div" variant="body2" mt={1}>
            <Typography variant="body2">Tools</Typography>
            <Typography variant="body2">
              <strong>{tools.join(', ')}</strong>
            </Typography>
          </Typography>
        )}

        {technologies && (
          <Typography component="div" variant="body2" mt={1}>
            <Typography variant="body2">Technologies</Typography>
            <Typography variant="body2">
              <strong>{technologies.join(', ')}</strong>
            </Typography>
          </Typography>
        )}

        {programAreas && (
          <Typography component="div" variant="body2" mt={1}>
            <Typography variant="body2">Program Areas</Typography>
            <Typography variant="body2">
              <strong>{programAreas.join(', ')}</strong>
            </Typography>
          </Typography>
        )}

        {links && (
          <Typography component="div" variant="body2" mt={1}>
            Link(s)
            <Typography variant="body2">
              {links.map((link: LinkInterface, idx: number) => (
                <Link
                  href={link.url}
                  key={`project-link-${idx}`}
                  color="inherit"
                  underline="none"
                >
                  <strong>{link.title}</strong>
                </Link>
              ))}
            </Typography>
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
