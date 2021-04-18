import styled from 'styled-components';

export const Container = styled.div`
    height: 17.27rem;
    width: 100%;
    overflow: hidden;

    & + &{
        border-left: 1px solid white;
    }
`

export const Content = styled.div`
    padding: 1.5rem 2.5rem 2.6rem 2.5rem;
    display: flex;
    color: #ffffff;
    flex-direction: column;

    div{
        display: flex;
        margin-left:1.5rem;
        margin-top: 1rem;
        h2{
            margin-left: 1rem;
            height: 2.3rem;
            border-bottom: solid #ffffff 2px;
        }
    }
`
export const Player = styled.h1`
    color: #6b3087;
    margin-left: 1rem;
    font-size:4rem;
    height:10rem;
    width:10rem;
    padding:2rem;
    border-radius:50%;
    background-color: #ffffff;
`
