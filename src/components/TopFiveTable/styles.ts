import styled from 'styled-components';

export const Container = styled.div`

    width: 100%;
    padding: 0.5rem 1.3rem;
`

export const Content = styled.div`
`
export const TopFiveDiv = styled.div`
    margin-top:0.5rem;
    padding: 0.4rem;
    background-color: #f7f3f7;
    border-radius:0.8rem;
`

export const TeamDiv = styled.div`
    background-color: #ffffff;
    border-radius:0.8rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    height: 3.5rem;

    h2{
        font-size:1rem;
        font-weight: 500;
    }


    & + &{
        margin-top:0.3rem;
    }
`