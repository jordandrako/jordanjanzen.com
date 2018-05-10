import { darken, lighten } from 'polished';
import { fonts, mediaMax, palette, styled } from '../../styling';

export const Title = styled.header`
  background: ${darken(0.05, palette.black)};
  border-bottom: 2px solid ${palette.darkblack};
  width: 100%;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;

  ul {
    margin: 0;
    padding: 0;
    width: 100%;

    li {
      padding: 15px 0 15px 15px;
      display: inline-flex;
      align-items: center;
      color: ${palette.white};

      h1,
      h4 {
        display: inline-block;
        margin: 0 1em;
        font-family: ${fonts.monospace};
        font-size: 1rem;
        font-weight: 300;
        text-shadow: 0 2px 3px rgba(0, 0, 0, 0.45);
      }

      .file {
        color: ${palette.yellow};
      }
    }

    li:last-child {
      background: ${lighten(0.05, palette.black)};
      color: ${palette.lightwhite};
      padding: 15px;
      border-top: 3px solid ${palette.lightblue};
      box-shadow: 2px 0 0 ${palette.darkblack};
      text-shadow: 0 2px 3px rgba(0, 0, 0, 0.45);

      h1 {
        font-size: 1.15rem;
      }

      ${mediaMax.tablet`
        display: inline-flex;
        background: transparent;
        border: none;
        width: 100%;
        padding: 6px 8px;
        justify-content: space-between;

        h1 {
          font-size: 1rem;
        }

      `};
    }
  }
`;
