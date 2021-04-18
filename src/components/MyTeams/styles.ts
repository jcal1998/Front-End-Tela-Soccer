import styled from "styled-components";

export const Container = styled.div`
    background-color: #ffffff;
    height:100%;
    width: 100%;
    border-radius: 1.2rem 1.2rem 0 0;
    margin: 2rem 2rem 0 2rem;
    display: flex;
    flex-direction:column;
    align-items: center;
`

export const DescriptionDiv = styled.div`
    height: 6rem;
    width: 100%;
    border-bottom: 0.15rem solid #f7f3f7;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    h1{ 
        display:block;
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
        font-size: 2.1rem;
        font-weight: 50;
        color: #ffffff;
        margin: auto;
        }

    }
`


// import styled from "styled-components";

// export const Container = styled.div`
//     background-color: #ffffff;
//     width: 100%;
//     border-radius: 1.2rem 1.2rem 0 0;
//     margin: 2rem 2rem 0 2rem;
//     display: flex;
//     flex-direction:column;
//     align-items: center;
//     border: 2px solid black;
// `

// export const DescriptionDiv = styled.div`
//     height: 6rem;
//     width: 100%;
//     border-bottom: 0.15rem solid #f7f3f7;
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     padding: 1rem;
//     h1{ 
//         display:block;
//         font-size: 1.5rem;
//         color: var(--purpleh1);
//         margin: auto 1.2rem;
//     }

//     button{
//         height: 3rem;
//         width: 3rem;
//         margin: auto 0.5rem;
//         background-color: #98367d;
//         border: 0;
//         border-radius:0.7rem;

//         transition : filter 0.2s;

//         &:hover{
//             filter: brightness(0.85) ;
//         }

//         h2{
//         font-size: 2.1rem;
//         font-weight: 50;
//         color: #ffffff;
//         margin: auto;
//         }

//     }
// `
