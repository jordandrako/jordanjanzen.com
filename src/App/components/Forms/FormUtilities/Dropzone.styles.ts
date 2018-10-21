import Dropzone from 'react-dropzone';
import { fonts, semanticColors, styled } from 'styling';

export const zone = styled(Dropzone)`
  height: 100px;
  border: 3px dashed ${semanticColors.textColor};
  margin-bottom: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:before {
    content: "Upload Files Here";
    font-family: ${fonts.monospace};
    font-weight: 700;
    color: ${semanticColors.textColor};
    opacity: 0.7;
  }
`;
