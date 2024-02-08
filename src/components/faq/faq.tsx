'use client';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from '@mui/material';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import { styled } from '@mui/material/styles';
import React, { useState } from 'react';
import './faq.scss';

// eslint-disable-next-line @typescript-eslint/naming-convention
const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

export default function FrequentlyAskedQuestions() {
  const [expanded, setExpanded] = useState<string | false>(false);
  const handleChange = (isExpanded: boolean, panel: string) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box className="faq">
      <Typography variant="h2" className="faq__heading">
        Frequently Asked Questions
      </Typography>
      <Box className="faq__list">
        <Accordion
          elevation={0}
          disableGutters
          expanded={expanded === 'panel1'}
          onChange={(event, isExpanded) => handleChange(isExpanded, 'panel1')}
        >
          <AccordionSummary
            id="panel1-header"
            aria-controls="panel1-content"
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography className="faq__question">
              Do I have to be an expert to volunteer at OpenBC?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="faq__answer">
              At OpenBC, we&apos;re a mix of seasoned pros and eager learners,
              all excited about trying new stuff. Feel free to use your know-how
              to speed things up and help the team, but remember, we&apos;re all
              about diving into new things here. If you&apos;re picking up a new
              role, just a heads up: you might need to put in some extra time on
              your own to get the hang of it and get your tasks done.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          elevation={0}
          disableGutters
          expanded={expanded === 'panel2'}
          onChange={(event, isExpanded) => handleChange(isExpanded, 'panel2')}
        >
          <AccordionSummary
            id="panel2-header"
            aria-controls="panel2-content"
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography className="faq__question">
              Do I have to be an expert to volunteer at OpenBC?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="faq__answer">
              At OpenBC, we&apos;re a mix of seasoned pros and eager learners,
              all excited about trying new stuff. Feel free to use your know-how
              to speed things up and help the team, but remember, we&apos;re all
              about diving into new things here. If you&apos;re picking up a new
              role, just a heads up: you might need to put in some extra time on
              your own to get the hang of it and get your tasks done.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          elevation={0}
          disableGutters
          expanded={expanded === 'panel3'}
          onChange={(event, isExpanded) => handleChange(isExpanded, 'panel3')}
        >
          <AccordionSummary
            id="panel3-header"
            aria-controls="panel3-content"
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography className="faq__question">
              Do I have to be an expert to volunteer at OpenBC?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="faq__answer">
              At OpenBC, we&apos;re a mix of seasoned pros and eager learners,
              all excited about trying new stuff. Feel free to use your know-how
              to speed things up and help the team, but remember, we&apos;re all
              about diving into new things here. If you&apos;re picking up a new
              role, just a heads up: you might need to put in some extra time on
              your own to get the hang of it and get your tasks done.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          elevation={0}
          disableGutters
          expanded={expanded === 'panel4'}
          onChange={(event, isExpanded) => handleChange(isExpanded, 'panel4')}
        >
          <AccordionSummary
            id="panel4-header"
            aria-controls="panel4-content"
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography className="faq__question">
              Do I have to be an expert to volunteer at OpenBC?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="faq__answer">
              At OpenBC, we&apos;re a mix of seasoned pros and eager learners,
              all excited about trying new stuff. Feel free to use your know-how
              to speed things up and help the team, but remember, we&apos;re all
              about diving into new things here. If you&apos;re picking up a new
              role, just a heads up: you might need to put in some extra time on
              your own to get the hang of it and get your tasks done.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          elevation={0}
          disableGutters
          expanded={expanded === 'panel5'}
          onChange={(event, isExpanded) => handleChange(isExpanded, 'panel5')}
        >
          <AccordionSummary
            id="panel5-header"
            aria-controls="panel5-content"
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography className="faq__question">
              Do I have to be an expert to volunteer at OpenBC?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="faq__answer">
              At OpenBC, we&apos;re a mix of seasoned pros and eager learners,
              all excited about trying new stuff. Feel free to use your know-how
              to speed things up and help the team, but remember, we&apos;re all
              about diving into new things here. If you&apos;re picking up a new
              role, just a heads up: you might need to put in some extra time on
              your own to get the hang of it and get your tasks done.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
}
