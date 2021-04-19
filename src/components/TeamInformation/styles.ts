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

