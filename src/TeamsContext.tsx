import {createContext, useState, ReactNode} from 'react'
import {Data} from './components/Data'

interface Player{
    name : string;
    age: number;
    nationality: string;
}

interface Team {
    TeamName : string;
    Description: string;
    Avg: number;
    Website: string;
    Type : string;
    Formation : string;
    Players : Player[];
}

interface TeamsProviderProps {
    children:  ReactNode;
}

interface TeamsContextData {
    teams: Team[];
    createTeam: (team: Team ) => void
}

export const TeamsContext = createContext<TeamsContextData>(
    {} as TeamsContextData
);

export function TeamsProvider( {children}:TeamsProviderProps ){
    const [teams, setTeams] = useState<Team[]>(Data)

    function  createTeam( team : Team) {
        setTeams([...teams, team])
    }

    return(
        <TeamsContext.Provider value={{teams , createTeam}}>
            {children}
        </TeamsContext.Provider>
    )
}