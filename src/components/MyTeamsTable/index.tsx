import * as S from './styles'
import { useState, useContext, useCallback, useEffect} from 'react'
import Modal from 'react-modal'
import { TeamsContext } from '../../TeamsContext'

import { IoMdTrash } from 'react-icons/io'
import { MdEdit} from 'react-icons/md'
import { FaSort } from 'react-icons/fa'
import debounce from 'debounce'
import { api } from '../../services/api'

interface repositoriesArray{
    player_name : string ,
    player_id: string, 
    age: number,
    nationality: string
}

interface Player{
    name : string;
    age: number;
    nationality: string;
}

export function MyTeamsTable(){
    const [isModalOpen, setIsModalOpen] = useState(false);
    const {teams, setTeams ,createTeam} = useContext(TeamsContext);
    const [sortBool , setSortBool] = useState(false)
    const [ nameFocus, setNameFocus ] = useState (false)
    const [ siteFocus, setsiteFocus ] = useState (false) 
    const [ descriptionFocus, setDescriptionFocus ] = useState (false) 
    const [TeamName , setTeamName] = useState('')
    const [Description, setDescription] = useState('')
    const [Website, setWebsite] = useState('')
    const [Type, setType] = useState('')
    const [Formation, setFormation] = useState('1')
    const [ repositories, setRepositories] = useState <repositoriesArray[]> ([])
    const [ search, setSearch] = useState ('Neymar')
    const newTeam = [ ...teams ]
    const [Players , setPlayers] = useState<Player[]>([])
    const [variable, setVariable] = useState('')

    const debounceSearch = useCallback(debounce((variable: string)=>{//eslint-disable-line react-hooks/exhaustive-deps
        if(variable.length>3)
        setSearch(variable);
    },700),[],) 

    const Variable = ( value : string ) => {
        debounceSearch(value);
    }


    const HandleCreateTeam = (event: any) =>{
        event.preventDefault();
        const {name , age, nationality , carro , aviao, barco} = event.target
        const Player1 = { name : name.value, age : age.value, nationality : nationality.value}
        const Player2 = { name: carro.value , age: aviao.value , nationality: barco.value }
        let Avg = 0;

        Avg = (parseInt(Player1.age) + parseInt(Player2.age))/2;

        createTeam({
            TeamName,
            Description,
            Website,
            Type,
            Formation,
            Players : [Player1 , Player2],
            Avg
        })
        handleRemoveTeam(variable)
        handleCloseModal()
    }

    const ChangeType = ( value : any)=>{
        setType(value)
    }

    function handleEditTeam( TeamNameToEdit :any ) {
        const editItem = newTeam.filter( team => team.TeamName === TeamNameToEdit)
        setTeamName(editItem[0].TeamName);
        setDescription(editItem[0].Description)
        setWebsite(editItem[0].Website)
        setType(editItem[0].Type)
        setFormation(editItem[0].Formation)
        setPlayers(editItem[0].Players)
        setVariable(TeamNameToEdit)
        handleOpenModal()
    }

    function handleOpenModal() {
        setIsModalOpen(true)
    }

    function handleCloseModal() {
        setTeamName('');
        setDescription('')
        setWebsite('')
        setType('')
        setFormation('1')
        setIsModalOpen(false)
    }

    const handleSortBool = () => {
        setSortBool(!sortBool)
        if(sortBool){
            newTeam.sort( ( a: any, b: any) =>{
                let x = a.TeamName.toUpperCase()
                let y = b.TeamName.toUpperCase()
                return x===y ? 0 : x < y ? 1: -1;
            })
            setTeams(newTeam)
        }else{
            newTeam.sort( ( a: any, b: any) =>{
                let x = a.TeamName.toUpperCase()
                let y = b.TeamName.toUpperCase()
                return x===y ? 0 : x > y ? 1: -1;
            })
            setTeams(newTeam)
        }
    }

    const handleRemoveTeam = ( TeamNameToDelete :any ) => {
        newTeam.splice((newTeam.map( team => team.TeamName).indexOf(TeamNameToDelete)), 1)
        setTeams(newTeam)
    };

    useEffect(() => {
        if(isModalOpen){
            console.log('chamou ein')
            api.get(`https://v2.api-football.com/players/search/${search}`)
            .then( response => {
                setRepositories (response.data.api.players)
            })
            .catch(err => {
                console.log(err);
            });
        }
    }, [search]);

    return (
        <S.Container>
            <S.TeamsDiv onClick={handleSortBool}>
                <S.NameDiv>
                    <h3>Name</h3>
                    <h3><FaSort size="1.2rem" /></h3>
                </S.NameDiv>
                <S.Description>
                    <h3>Description</h3>
                    <h3><FaSort size="1.2rem"  /></h3>
                </S.Description>
            </S.TeamsDiv>
            {newTeam.map(team =>(
                <S.Team key={team.TeamName}>
                    <S.TeamName><h3>{team.TeamName}</h3></S.TeamName>
                    <S.TeamDescription>
                        <h3>{team.Description}</h3>
                        <div className="divVanish">
                            <button onClick={() => handleRemoveTeam(team.TeamName)}><IoMdTrash size="1.2rem" color="#c673a1"/></button>
                            <button onClick={() => handleEditTeam(team.TeamName)}><MdEdit size="1.2rem" color="#c673a1" /></button>
                        </div>

                    </S.TeamDescription>
                </S.Team>
            ))}
            <Modal isOpen={isModalOpen} onRequestClose={handleCloseModal}>
                <form onSubmit={HandleCreateTeam}>
                    <S.TeamInformationDiv>
                        <h1>Team Information</h1>
                        <S.FormDiv >
                            <S.InputDiv isFocused={nameFocus===true} onFocus={()=>{setNameFocus(true)}} onBlur={()=>{setNameFocus(false)}}>
                                <label><h3>Team name</h3>
                                    <input value={TeamName} onChange={e=>setTeamName(e.target.value)} placeholder="insert team name" required/>
                                </label>
                            </S.InputDiv>
                            <S.InputDiv isFocused={descriptionFocus===true} onFocus={()=>{setDescriptionFocus(true)}} onBlur={()=>{setDescriptionFocus(false)}}>
                                <label><h3>Descriptions</h3>
                                    <input value={Description} onChange={e=>setDescription(e.target.value)} placeholder="insert team name" required/>
                                </label>
                            </S.InputDiv>
                            <S.InputDiv isFocused={siteFocus===true} onFocus={()=>{setsiteFocus(true)}} onBlur={()=>{setsiteFocus(false)}}>
                                <label><h3>Team website</h3>
                                    <input value={Website} onChange={e=>setWebsite(e.target.value)} placeholder="http://myteam.com" type="url" required/>
                                </label>
                            </S.InputDiv>
                            <S.RadioDiv>
                                <h3>Team type</h3>
                                <div> 
                                    <S.ChooseDiv isFocused={ Type ==='real'}>                                
                                        <input onChange={e=>ChangeType(e.target.id)} checked={Type==='real'} type="radio" id="real" name="Type" value="real" required/>
                                        <label htmlFor="real">Real</label>
                                    </S.ChooseDiv>
                                    <S.ChooseDiv isFocused={ Type ==='fantasy'}>                                
                                        <input onChange={e=>ChangeType(e.target.id)} checked={Type==='fantasy'} type="radio" id="fantasy" name="Type" value="fantasy" required />
                                        <label htmlFor="fantasy">Fantasy</label>
                                    </S.ChooseDiv>
                                </div>
                            </S.RadioDiv>
                            <button type="submit" />
                        </S.FormDiv>
                    </S.TeamInformationDiv>
                    <S.ConfigureSquadDiv>
                        <h1>Configure Squad</h1>
                        <S.SquadContent>
                            <S.FormationDiv>
                                <S.FormationType>
                                    <label htmlFor="formation"><h3>Formation</h3></label>
                                    <select onChange={e=>setFormation(e.target.value)} name="formation" id="formation" required>
                                        <option value="1" >3 - 4 - 3</option>
                                        <option value="2" >3 - 2 - 2 - 3</option>
                                        <option value="3" >3 - 5 - 2</option>
                                        <option value="4" >4 - 2 - 3 - 1</option>
                                        <option value="5" >4 - 3 - 1 - 1</option>
                                        <option value="6" >4 - 3 - 2</option>
                                        <option value="7" >4 - 4 - 2</option>
                                        <option value="8" >4 - 5 - 1</option>
                                        <option value="9" >5 - 4 -1</option>
                                    </select>
                                </S.FormationType>
                                {/* fazer um if return aqui */}
                                    <S.SoccerField>       
                                        <label htmlFor="name"><h3>Player1</h3></label>
                                        <input id="name" name="name" placeholder="insert team name" required/>
                                        <label htmlFor="age"><h3>Age</h3> </label>
                                        <input id="age" name="age" type="number" placeholder="insert team name" required/>
                                        <label htmlFor="nationality"><h3>Nationality</h3></label>
                                        <input id="nationality" name="nationality" placeholder="insert team name" required/>
                                        <label htmlFor="carro"><h3>Player2</h3></label>
                                        <input id="carro" name="carro" placeholder="insert team name" required/>
                                        <label htmlFor="aviao"><h3>Age2</h3> </label>
                                        <input id="aviao" name="aviao" type="number" placeholder="insert team name" required/>
                                        <label htmlFor="barco"><h3>Nationality2</h3></label>
                                        <input id="barco" name="barco" placeholder="insert team name" required/>
                                    </S.SoccerField>
                                <S.Button type="submit">Save</S.Button>
                            </S.FormationDiv>
                            <S.SearchPlayersDiv>
                                <S.WtfDiv>
                                    <label><h3>Search player</h3>
                                        <input onChange={ e=>Variable(e.target.value)} placeholder="Player name" name="player"/>
                                    </label>
                                    {repositories.map(repository => (                                
                                        <S.PlayersDiv key={repository.player_id}>
                                            <S.Div>
                                                <div>
                                                    Name: <h5>{repository.player_name}</h5>
                                                </div>
                                                <div>
                                                    Age: <h5>{repository.age}</h5>
                                                </div>
                                            </S.Div>
                                            <div>
                                                Nationality <h5>{repository.nationality}</h5>
                                            </div>
                                        </S.PlayersDiv>
                                    ))}
                                </S.WtfDiv>
                            </S.SearchPlayersDiv>
                        </S.SquadContent>
                    </S.ConfigureSquadDiv>
                </form> 
            </Modal>
        </S.Container>
    )
}
