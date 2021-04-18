import styled from 'styled-components'


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

