import styled from "styled-components";

export const Container = styled.div`
    background-color: #ffffff;
    height: 80vh;
    width: 100%;
    border-radius: 1.2rem 1.2rem 0 0;
    margin: 2rem 2rem 0 2rem;
    display: flex;
    flex-direction:column;
    align-items: center;
`

export const DescriptionDiv = styled.div`
    height: 13%;
    width: 100%;
    border-bottom: 0.15rem solid #f7f3f7;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    h1{
        font-size: 1.5rem;
        color: var(--purpleh1);
        margin: auto 1.2rem;
    }

    button{
        height: 3rem;
        width: 3rem;
        margin: auto 0.5rem;
        background-color: #98367d;
        border: 0;
        border-radius:0.7rem;

        transition : filter 0.2s;

        &:hover{
            filter: brightness(0.85) ;
        }

        h2{
        font-size: 1.7rem;
        color: #ffffff;
        margin: auto;
        }

    }
`

export const TeamsDiv= styled.div`
    height: 13%;
    width: 97%;
    display: flex;
    align-items: center;
    padding: 0.18rem;
`

export const NameDiv = styled.div`
    height: 60%;
    margin: 0 auto;
    width:30%;
    border-right: 0.15rem solid #f7f3f7;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0.5rem 1rem 1.3rem;

`

export const Description= styled.div`
    height: 80%;
    margin: 0 auto;
    width:70%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0.5rem 1rem 0.5rem;
`

export const Team= styled.div`
    height: 9%;
    width: 97%;
    display: flex;
    align-items: center;
    padding: 0.18rem;
    border-bottom: 0.075rem solid #f7f3f7;
    border-top: 0.075rem solid #f7f3f7;

    &:hover{
        background-color: #f7eef7;
        border-radius:0.5rem;
        border-bottom: 0.1rem solid #ffffff;
        border-top: 0.1rem solid #ffffff;

        div{

            img{
                height:1rem;
                width:1rem;
                margin:0.5rem;
            }
        }

        h3{
            color: #c673a1;
        }
        
    }

`

export const TeamName= styled.div`
    height: 60%;
    margin: 0 auto;
    width:30%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0.5rem 1rem 1.3rem;
`

export const TeamDescription= styled.div`
    height: 80%;
    margin: 0 auto;
    width:70%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0.5rem 1rem 0.5rem;

`
