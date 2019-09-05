import styled from 'styled-components';

export const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  color: #fff;
  font-size: 32px;
  font-weight: bold;
`;

export const Owner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    margin-bottom: 24px;
    color: #7159c1;
    text-decoration: none;
  }

  img {
    width: 120px;
    border-radius: 50%;
  }

  h1 {
    margin-top: 12px;
    font-size: 24px;
  }

  p {
    max-width: 360px;
    margin-top: 4px;
    color: #666;
    text-align: center;
  }
`;

export const Navigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const NavButton = styled.button.attrs(props => ({
  type: 'button',
  disabled: props.disabled,
}))`
  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  & + button {
    margin-left: 12px;
  }
`;

export const IssueList = styled.ul`
  margin-top: 32px;
  padding-top: 32px;
  border-top: 1px solid #eee;
  list-style: none;

  li {
    display: flex;
    padding: 16px 8px;
    border: 1px solid #eee;
    border-radius: 4px;

    & + li {
      margin-top: 12px;
    }

    img {
      width: 36px;
      height: 36px;
      border: 2px solid #eee;
      border-radius: 50%;
    }

    div {
      flex: 1;
      margin-left: 16px;

      strong {
        a {
          color: #333;
          text-decoration: none;

          &:hover {
            color: #7159c1;
          }
        }

        span {
          height: 20px;
          margin-left: 12px;
          padding: 2px 4px;
          border-radius: 4px;
          background-color: #eee;
          color: #333;
          font-size: 12px;
          font-weight: 600;
        }
      }

      p {
        font-size: 12px;
        color: #999;
      }
    }
  }
`;
