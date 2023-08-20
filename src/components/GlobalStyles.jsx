import { createGlobalStyle } from 'styled-components';
import 'modern-normalize'
export const CreateGlobalStyles = createGlobalStyle`

p,
h1,
h2,
h3,
h4,
h5,
h6 {
    margin: 0;
}

ul, ol {
    margin: 0;
    padding-left: 0;
}

.list {
    list-style: none;
    padding-left: 0;
    margin: 0;
}

.link {
    text-decoration: none;
}

td, th {
    padding-top: 0;
    padding-left: 0;
    padding-right: 0;
    padding-bottom: 0;
}
p:last-child {
    margin-bottom: 0;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  
  a {
    color: currentColor;
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }
  
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
  
  li {
    list-style: none;
  }`;
