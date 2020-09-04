import React, { useState } from 'react';
import { pdfjs } from 'react-pdf';
import { Page, Document } from 'react-pdf/dist/esm/entry.webpack';
import styled from 'styled-components';

const ResumeContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px;
`;

const MarginBetweenPages = styled.div`
  width: 100px;
  height: 900px;
  border-right: 4px solid #0074d9;
`;

export const Resume = () => {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  return (
    <ResumeContainer id="resume">
      <Document file="/pdfs/CV.pdf">
        <Page pageNumber={1} />
      </Document>
      <MarginBetweenPages />
      <Document file="/pdfs/CV.pdf">
        <Page pageNumber={2} />
      </Document>
    </ResumeContainer>
  );
};
