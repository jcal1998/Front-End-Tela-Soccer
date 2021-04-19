import {createContext, useState, ReactNode, useEffect} from 'react'
import { api } from './services/api';

interface Teams {
    Name : string;
    Description: string;
    Avg: number;
    Website: string;
    Type : string;
    Formation : number;
    Players : any;
}

interface TeamsProviderProps {
    children:  ReactNode;
}

export const TeamsContext = createContext<Teams[]>([]);

export function TeamsProvider( {children}:TeamsProviderProps ){
    const [teams, setTeams] = useState<Teams[]>([])

    useEffect(()=>{
        api.get('http://localhost:3000/teams')
        .then(response => setTeams(response.data.teams))
        console.log(teams)
    })

    console.log(setTeams)
    return(
        <TeamsContext.Provider value={teams}>
            {children}
        </TeamsContext.Provider>
    )
}