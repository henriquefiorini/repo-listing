import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
 *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    font-size: 100%;
    touch-action: manipulation;
  }

  body {
    margin: 0;
    padding: 0;
    background: #7159c1;
    color: #273444;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    font-weight: normal;
    line-height: 1.5;
    overflow-x: hidden;
  }

  a {
    color: #1FB6FF;
    line-height: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  a:hover,
  a:focus,
  a:active {
    text-decoration: underline;
  }

  b,
  strong {
    font-weight: bold;
  }

  em {
    font-style: italic;
  }
  abbr {
    cursor: help;
  }

  table {
    border-spacing: 0;
    border-collapse: collapse;
  }

  td,
  th {
    padding: 0;
  }

  input,
  select,
  textarea,
  button {
    padding: 0;
    margin: 0;
    border: none;
    background: none;
    color: inherit;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  button {
    text-decoration: none;
    cursor: pointer;
  }

  button:hover,
  button:focus,
  button:active {
    text-decoration: none;
  }

  img {
    max-width: 100%;
  }

  hr {
    height: 1px;
    margin: 16px 0;
    background: #E0E6ED;
    border: 0;
    overflow: hidden;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }

  p {
    margin: 0;
  }

  small {
    font-size: 90%;
  }

  blockquote {
    margin: 0;
  }

  ul,
  ol {
    padding-left: 0;
    margin-top: 0;
    margin-bottom: 0;
  }

  ol ol,
  ul ol {
    list-style-type: lower-roman;
  }

  ul ul ol,
  ul ol ol,
  ol ul ol,
  ol ol ol {
    list-style-type: lower-alpha;
  }

  dd {
    margin-left: 0;
  }

  tt,
  code {
    font-family: "SF Mono", "Segoe UI Mono", "Roboto Mono", "Ubuntu Mono", Menlo, Courier, monospace;
    font-size: 13px;
  }

  pre {
    margin-top: 0;
    margin-bottom: 0;
    font-family: "SF Mono", "Segoe UI Mono", "Roboto Mono", "Ubuntu Mono", Menlo, Courier, monospace;
    font-size: 13px;
  }
`;
