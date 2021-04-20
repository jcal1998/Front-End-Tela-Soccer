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

    h3{
        display:block;
    }

    .divVanish{
        visibility: hidden;
        display: flex;
        align-items: center;
        width: 3rem;
        justify-content: space-between;
        margin-right:0.9rem;
    }

    &:hover{
        background-color: #f7eef7;
        border-radius:0.5rem;
        border-bottom: 0.1rem solid #ffffff;
        border-top: 0.1rem solid #ffffff;

        h3{
            display:block;
            color: #c673a1;
        }

        .divVanish{
            visibility: visible;
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

export const TeamInformationDiv = styled.div`
    padding: 1rem;
    width: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;


    h1{

        color: #c1c1c1;
        font-size: 1.5rem;
    }

`

export const FormDiv = styled.div`
    margin-top: 2rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

interface NameDivProps {
    isFocused : boolean
}

export const InputDiv = styled.div<NameDivProps >`
    margin-top: 1rem;
    width:40rem;
    font-size: 1rem;
    color: ${(props)=>props.isFocused? '#bc0f51' : 'black'} ;


    input{
        margin-top: 0.2rem;
        height:2.5rem;
        width:100%;
        border-radius:0.3rem;
        border: 2px solid #f7f3f7;
        padding: 0 1rem;
        outline-color: #bc0f51 ;


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
        margin-top: 0.24rem;
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
        outline: none !important;

        &:checked{
            background-color: purple;
        }
    }
    label{
        margin-top: 0.2rem;
        margin: 0 4rem 0 0.5rem;
    }
`
interface ChooseDivProps{
    isFocused: boolean;
}

export const ChooseDiv = styled.div<ChooseDivProps>`
    color: ${(props)=>props.isFocused? '#bc0f51' : 'black'} ;
`

export const ConfigureSquadDiv = styled.div`
    margin-top:4rem;
    display: flex;
    flex-direction: column;
    align-items: center;


    h1{

        color: #c1c1c1;
        font-size: 1.5rem;
    }

`

export const SquadContent = styled.div`

    width:100%;
    display: flex;

`
export const FormationDiv =styled.div`
    position: relative;
    margin: 3rem 1.5rem 3rem 3rem;
    width:50%;
    height:60rem;

    display: flex;
    flex-direction: column;
    align-items:center;
    padding: 2rem 1rem;
`

export const FormationType = styled.div`
    width:30rem;
    display: flex;

    font-size:0.9rem;
    label{
        margin-right:2rem;
    }

    select{
        padding: 0 0.6rem;
    }
`

export const SoccerField = styled.div`

    margin-top:1rem;
    width:30rem;
    height:52rem;
    background-image: linear-gradient(#ba3d7b, #6b3087);

`

export const Button = styled.button`
    margin-top: 2rem;
    color: #ffffff;
    width:30rem;
    height: 3rem;
    border:none;
    background-image: linear-gradient(#ba3d7b, #6b3087);
    font-size: 1.2rem;
`

export const SearchPlayersDiv =styled.div`
    margin: 3rem 3rem 3rem 1.5rem;
    width:50%;
    padding: 2rem 4rem 2rem 8rem ;
    input{
        margin-top: 0.2rem;
        height:2.5rem;
        width:30rem;
        border-radius:0.3rem;
        border: 2px solid #f7f3f7;
        padding: 0 1rem;
        margin-bottom:1rem;

        &::placeholder{
            color: #c1c1c1;
        }

    }

    label{
        margin-bottom:2rem;
    }
`
export const WtfDiv = styled.div`
    width:32rem;
    border-bottom: 0.15rem solid #f7f3f7;
    
`
export const PlayersDiv = styled.div`
    padding:1rem 2rem 1rem 1rem;
    width:30rem;
    border-radius:0.3rem;
    background-image: linear-gradient(#f9f9f9, #e7e7e7);
    background-color: #ececec;
    border: 1px dashed #f7f3f7;
    height:5.5rem;
    font-size:1rem;
    font-weight:600;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    & + &{
        margin: 0.5rem 0;
    }

    div{
        display: flex;
        align-items: center;
    }

    h5{
        margin-left:0.5rem;

        color:#bf0e4f;
        font-size:1rem;
        font-weight:600;
    }
`

export const Div = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

`

