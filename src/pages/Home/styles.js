import styled, { keyframes, css } from 'styled-components';

export const Title = styled.h1`
  display: flex;
  align-items: center;
  flex-direction: row;
  font-size: 20px;

  svg {
    margin-right: 12px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  margin-top: 32px;

  input {
    flex: 1;
    padding: 12px 16px;
    border: 1px solid #eee;
    background-color: #fff;
    border-radius: 4px;
  }

  ${props =>
    props.hasError &&
    css`
      input {
        border-color: red;
      }
    `}
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const SubmitButton = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.isLoading,
}))`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 12px;
  padding: 0 16px;
  border-radius: 4px;
  background-color: #7159c1;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  ${props =>
    props.isLoading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;

export const List = styled.ul`
  margin-top: 32px;
  list-style: none;

  li {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 16px 0;

    & + li {
      border-top: 1px solid #eee;
    }

    a {
      color: #7159c1;
      text-decoration: none;
    }
  }
`;
