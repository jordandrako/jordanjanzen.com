import { palette, styled } from 'styling';
import { ITodoStyleProps } from './Todo.types';

export const Item = styled.li`
  position: relative;
  display: flex;
  flex-direction: row;
  margin-bottom: 1em;
  flex-grow: 1;
  padding: 0 0.2em;

  .flag {
    display: flex;
    flex-direction: column;
    border: 5px double ${palette.black};

    .complete {
      display: flex;
      flex-direction: column;
      align-items: center;
      background: ${(props: ITodoStyleProps) =>
        props.isComplete ? palette.green : palette.lightblack};
      color: ${palette.black};
      padding: 5px;
      border: none;
      white-space: nowrap;
      cursor: pointer;
      transition: all 0.15s ease-in-out;
      flex-grow: 1;

      .checkbox {
        width: 20px;
        height: 20px;
        border: 2px solid ${palette.black};
        border-radius: 50%;
        position: relative;

        :after {
          transition: all 0.1s ease-in-out;
          content: '';
          display: block;
          background: ${palette.black};
          width: 12px;
          height: 12px;
          top: 2px;
          left: 2px;
          transform: ${(props: ITodoStyleProps) =>
            props.isComplete ? 'scale(1)' : 'scale(0)'};
          border-radius: 50%;
          position: absolute;
        }
      }

      .label {
        transform: rotate(90deg);
        width: 0;
        user-select: none;
      }
    }

    .remove {
      border: none;
      border-top: 2px solid ${palette.black};
      background: ${palette.red};
      width: 100%;
      height: 30px;
      position: relative;
      padding: 0;
      margin: 0;
      cursor: pointer;

      div {
        position: absolute;
        top: calc(50% - 2px);
        left: 20%;
        width: 60%;
        height: 4px;
        background: ${palette.black};
        border-radius: 2px;
      }
    }
  }
`;
