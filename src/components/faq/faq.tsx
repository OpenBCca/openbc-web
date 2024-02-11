'use client';

import { Box, Typography } from '@mui/material';
import React from 'react';
import QuestionAndAnswer from '../question-and-answer/question-and-answer';
import questionAndAnswersData from './faq-data';
import './faq.scss';

export default function FrequentlyAskedQuestions() {
  return (
    <Box className="faq">
      <Typography variant="h2" className="faq__heading">
        Frequently Asked Questions
      </Typography>
      <Box className="faq__list">
        {questionAndAnswersData.map((questionAndAnswer) => (
          <QuestionAndAnswer
            key={questionAndAnswer.question}
            question={questionAndAnswer.question}
            answer={questionAndAnswer.answer}
          />
        ))}
      </Box>
    </Box>
  );
}
