import styled from 'styled-components';

export const Container = styled.header`
  background-color: transparent;
  background-image: linear-gradient(230deg,#532d8c 0%,#f2295b 100%);
  padding: 0.25rem 0;
`

export const Content = styled.div`
  max-width: 95%;
  margin: 0 auto;

  padding: 0 1rem 0rem;  
  display: flex;
  align-items: center;
  justify-content: space-between;

`

export const LogoDiv = styled.div`
  display: flex;
  align-items: center;

  h1{
    font-size: 1.4rem;
    color: #f3f5f7;
    margin: 0.65rem 1rem;
  }

  img{
    height:3.5rem;
    width:3.5rem;
  }
`

export const JohnDoeDiv = styled.div`
  display: flex;
  align-items: center;

  h1{
    font-size: 0.9rem;
    color: #f3f5f7;
    margin: 1rem 0.5rem;
  }
`

export const ImageDiv = styled.div`
  background-color: var(--white);
  padding: 0.5rem;
  border-radius: 50%;
`