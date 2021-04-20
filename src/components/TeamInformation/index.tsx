import { useEffect, useState , useCallback,  useContext} from 'react'
import * as S from './styles'
import { api } from '../../services/api';
import {debounce} from 'debounce'
import Modal from 'react-modal'
import {useHistory} from 'react-router-dom'
import {TeamsContext} from '../../TeamsContext'

Modal.setAppElement('#root')

interface repositoriesArray{
    player_name : string ,
    player_id: string, 
    age: number,
    nationality: string
}

export function TeamInformation(){
    const { createTeam} = useContext(TeamsContext)
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
    const [ successModalIsOpen, setSuccessModalIsOpen] = useState(false)
    const [ isSearching, setIsSearching ] = useState(false)
    let history = useHistory();

    const debounceSearch = useCallback(debounce((variable: string)=>{//eslint-disable-line react-hooks/exhaustive-deps
        if(variable.length>3){
            setIsSearching(true)
            setSearch(variable);
        }
    },700),[],) 

    const Variable = ( value : string ) => {
        setIsSearching(true)
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
        setIsSearching(false)
        handleOpenSuccessModal()
    }

    const handleOpenSuccessModal = ()=> {
        setSuccessModalIsOpen(true)
    }


    const handleCloseSuccessModal = ()=> {
        setSuccessModalIsOpen(false)
        history.push("/")
    }

    const ChangeType = ( value : any)=>{
        setType(value)
    }

    useEffect(() => {
        if(isSearching){
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
            <S.CreateTitleDiv>
                <h1>Create your team</h1>
            </S.CreateTitleDiv>
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
                                    <input onChange={e=>ChangeType(e.target.id)} type="radio" id="real" name="Type" value="real" required/>
                                    <label htmlFor="real">Real</label>
                                </S.ChooseDiv>
                                <S.ChooseDiv isFocused={ Type ==='fantasy'}>                                
                                    <input onChange={e=>ChangeType(e.target.id)} type="radio" id="fantasy" name="Type" value="fantasy" required />
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
                <Modal isOpen={successModalIsOpen} onRequestClose={handleCloseSuccessModal} className="react-modal-content" overlayClassName="react-modal-overlay">
                    <h2>Time cadastrado com sucesso !! 🎉✨🎇🎆</h2>
                    <button type="button" onClick={handleCloseSuccessModal} className="react-modal-close"><p>Clique para sair</p></button>
                </Modal>
        </S.Container>
    )
}
