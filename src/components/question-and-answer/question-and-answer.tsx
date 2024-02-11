import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import MuiAccordion from '@mui/material/Accordion';
import React from 'react';
import './question-and-answer.scss';

interface questionAndAnswerProps {
  question: string;
  answer: string;
}

export default function QuestionAndAnswer({
  question,
  answer,
}: questionAndAnswerProps) {
  return (
    <MuiAccordion
      className="question-answer-accordion"
      elevation={0}
      disableGutters
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography className="question-answer-accordion__question">
          {question}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography className="question-answer-accordion__answer">
          {answer}
        </Typography>
      </AccordionDetails>
    </MuiAccordion>
  );
}
