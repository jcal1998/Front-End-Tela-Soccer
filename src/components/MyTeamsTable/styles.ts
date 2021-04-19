import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    margin-top:1rem;
    padding: 0 0.75rem 1rem 0.75rem;
`
export const TeamsDiv= styled.button`
    height: 4rem;
    background: transparent;
    border: 0;
    outline:none;
    width: 100%;
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
    height: 6rem;
    margin: 0 auto;
    width:70%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0.5rem 1rem 0.5rem;
`

export const Team= styled.div`
    height: 4rem;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0.18rem;
    border-bottom: 0.075rem solid #f7f3f7;
    border-top: 0.075rem solid #f7f3f7;
    button{
        background:transparent;
        border:0;
        outline: none;
    }

    img{
        visibility: hidden;
        height:1rem;
        width:1rem;
        margin:0.5rem;
    }
    h3{
        display:block;
    }

    &:hover{
        background-color: #f7eef7;
        border-radius:0.5rem;
        border-bottom: 0.1rem solid #ffffff;
        border-top: 0.1rem solid #ffffff;

        div{
            img{
                visibility: visible
                ;
                height:1rem;
                width:1rem;
                margin:0.5rem;
            }
        }

        h3{
            display:block;
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
