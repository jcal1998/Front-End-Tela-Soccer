import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root{
    --background: #f7f3f7;
    --red: #f2295b;
    --purple: #532d8c;
    --purpleh1: #633e94;
    --white: #f3f5f7;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    @media (max-width: 1080px){
      font-size: 93.75%;
    }

    @media (max-width: 720px){
      font-size: 87.5%;
    }
  }

  body{
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button{
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4 , h5, h6 , strong{
    font-weight: 600;
  }

  button{
    cursor: pointer;
  }

  [disabled]{
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay{
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top:0;
    bottom:0;
    right:0;
    left:0;

    display:flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content{
    width: 100%;
    max-width: 400px;
    background-image: linear-gradient(#ba3d7b, #6b3087);
    padding:3rem;
    position: relative;
    border-radius: 0.6rem;
    color: #c1c1c1;
  }

  .react-modal-close{
    position: absolute;
    bottom:1rem;
    left: 8.5rem;
    border:0;
    background: transparent;
    color: #ffffff;
    transition: filter 0.2s; 

    &:hover{
      filter: brightness(0.5);
    }
  }
`