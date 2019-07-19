import { palette, styled } from '../../../../styling';

export const uploadedImageList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export const uploadedImage = styled.li`
  margin: 0 1em 1em 0;
  max-width: calc(33.3% - 1em);
  padding: 1em;
  border: 2px solid ${palette.black};
  background: ${palette.lightblack};
  position: relative;

  .close {
    position: absolute;
    top: 5px;
    right: 5px;
    margin: 0;
  }
`;
