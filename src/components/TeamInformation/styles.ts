import styled from 'styled-components'

export const Container = styled.div`

    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;

    form{
        padding: 1rem;
        width: 100%;
    }
`

export const CreateTitleDiv = styled.div`
    height: 5rem;
    width: 100%;
    border-bottom: 0.15rem solid #f7f3f7;
    display: flex;
    align-items: center;
    padding: 0 1rem;

    h1{
        font-size: 1.5rem;
        color: var(--purpleh1);
        margin: auto 1rem;
    }
`

export const TeamInformationDiv = styled.div`

    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;


    h1{

        color: #c1c1c1;
        font-size: 1.5rem;
        font-weight: 500;
    }

`

export const FormDiv = styled.div`
    margin-top: 2rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const NameDiv = styled.div`
    margin-top: 1rem;
    width:40rem;
    font-size: 1rem;

    input{
        margin-top: 0.2rem;
        height:2.5rem;
        width:100%;
        border-radius:0.3rem;
        border: 2px solid #f7f3f7;
        padding: 0 1rem;

        &::placeholder{
            color: #c1c1c1;
        }
    }
`

export const WebsiteDiv = styled.div`
    margin-top: 1rem;
    width:40rem;

    font-size: 1rem;

    input{
        margin-top: 0.2rem;
        height:2.5rem;
        width:100%;
        border-radius:0.3rem;
        border: 2px solid #f7f3f7;
        padding: 0 1rem;


        &::placeholder{
            color: #c1c1c1;
        }

    }
`
export const RadioDiv = styled.div`
    margin-top: 1rem;
    width:40rem;
    display:flex;
    flex-direction:column;

    div{
        display:flex;
        align-items:center;
    }
    
    input{
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        display: inline-block;
        width: 1.3rem;
        height: 1.3rem;
        padding: 0.1rem;
        background-clip: content-box;
        border: 2px solid #bbbbbb;
        background-color: #ffffff;
        border-radius: 50%;

        &:checked{
            background-color: purple;
        }
    }
    label{
        margin-top: 0.2rem;
        margin: 0 4rem 0 0.5rem;
    }
`

export const ChooseDiv = styled.div`
    div{

    }
`
