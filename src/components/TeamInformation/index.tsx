import { useEffect, useState , useCallback,  useContext} from 'react'
import {Container, TeamInformationDiv, CreateTitleDiv, RadioDiv, FormDiv, InputDiv,ChooseDiv, Content,ConfigureSquadDiv, SquadContent, FormationDiv, SearchPlayersDiv, FormationType, SoccerField, Button, PlayersDiv, Div, WtfDiv} from './styles'
import { api } from '../../services/api';
import {debounce} from 'debounce'
import Modal from 'react-modal'
import {useHistory} from 'react-router-dom'
import {TeamsContext} from '../../TeamsContext'

Modal.setAppElement('#root')

export function TeamInformation(){
    const { createTeam,teams } = useContext(TeamsContext)
    const [ nameFocus, setNameFocus ] = useState (false)
    const [ siteFocus, setsiteFocus ] = useState (false) 
    const [ descriptionFocus, setDescriptionFocus ] = useState (false) 
    const [TeamName , setTeamName] = useState('')
    const [Description, setDescription] = useState('')
    const [Website, setWebsite] = useState('')
    const [Type, setType] = useState('')
    const [Formation, setFormation] = useState('1')
    const [ repositories, setRepositories] = useState ([])
    const [ search, setSearch] = useState ('Neymar')
    const [ successModalIsOpen, setSuccessModalIsOpen] = useState(false)
    let history = useHistory();

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
        let Avg = 2;
        createTeam({
            TeamName,
            Description,
            Website,
            Type,
            Formation,
            Players : [Player1 , Player2],
            Avg
        })
        console.log(teams)
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
        // `https://v3.football.api-sports.io/players?search=${search}&season=2019`
        api.get(`https://v2.api-football.com/players/search/${search}`)
        .then( response => {
            console.log("chamou a API")
            setRepositories (response.data.api.players)
        })
        .catch(err => {
            console.log(err);
        });
    }, [search]);
    
    return (
        <Container>
            <CreateTitleDiv>
                <h1>Create your team</h1>
            </CreateTitleDiv>
            <Content>
                <TeamInformationDiv>
                    <h1>Team Information</h1>
                    <FormDiv >
                        <InputDiv isFocused={nameFocus===true} onFocus={()=>{setNameFocus(true)}} onBlur={()=>{setNameFocus(false)}}>
                            <label><h3>Team name</h3>
                                <input value={TeamName} onChange={e=>setTeamName(e.target.value)} placeholder="insert team name" required/>
                            </label>
                        </InputDiv>
                        <InputDiv isFocused={descriptionFocus===true} onFocus={()=>{setDescriptionFocus(true)}} onBlur={()=>{setDescriptionFocus(false)}}>
                            <label><h3>Team fullname</h3>
                                <input value={Description} onChange={e=>setDescription(e.target.value)} placeholder="insert team name" required/>
                            </label>
                        </InputDiv>
                        <InputDiv isFocused={siteFocus===true} onFocus={()=>{setsiteFocus(true)}} onBlur={()=>{setsiteFocus(false)}}>
                            <label><h3>Team website</h3>
                                <input value={Website} onChange={e=>setWebsite(e.target.value)} placeholder="http://myteam.com" type="url" required/>
                            </label>
                        </InputDiv>
                        <RadioDiv>
                            <h3>Team type</h3>
                            <div> 
                                <ChooseDiv isFocused={ Type ==='real'}>                                
                                    <input onChange={e=>ChangeType(e.target.id)} type="radio" id="real" name="Type" value="real" required/>
                                    <label htmlFor="real">Real</label>
                                </ChooseDiv>
                                <ChooseDiv isFocused={ Type ==='fantasy'}>                                
                                    <input onChange={e=>ChangeType(e.target.id)} type="radio" id="fantasy" name="Type" value="fantasy" required />
                                    <label htmlFor="fantasy">Fantasy</label>
                                </ChooseDiv>
                            </div>
                        </RadioDiv>
                        <button type="submit" />
                    </FormDiv>
                </TeamInformationDiv>
                <ConfigureSquadDiv>
                    <h1>Configure Squad</h1>
                    <SquadContent>
                        <FormationDiv>
                            <FormationType>
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
                            </FormationType>
                            {/* fazer um if return aqui */}
                            <form onSubmit={HandleCreateTeam}> 
                                <SoccerField>       
                                    <label htmlFor="name"><h3>Player1</h3></label>
                                    <input name="name" placeholder="insert team name" required/>
                                    <label htmlFor="age"><h3>Age</h3> </label>
                                    <input name="age" type="number" placeholder="insert team name" required/>
                                    <label htmlFor="nationality"><h3>Nationality</h3></label>
                                    <input name="nationality" placeholder="insert team name" required/>
                                    <label htmlFor="carro"><h3>Player2</h3></label>
                                    <input name="carro" placeholder="insert team name" required/>
                                    <label htmlFor="aviao"><h3>Age2</h3> </label>
                                    <input name="aviao" type="number" placeholder="insert team name" required/>
                                    <label htmlFor="barco"><h3>Nationality2</h3></label>
                                    <input name="barco" placeholder="insert team name" required/>
                                </SoccerField>
                            <Button type="submit">Save</Button>
                            </form>
                        </FormationDiv>
                        <SearchPlayersDiv>
                            <WtfDiv>
                                <label><h3>Search player</h3>
                                    <input onChange={ e=>Variable(e.target.value)} placeholder="Player name" name="player"/>
                                </label>
                                {repositories.map(repository => (                                
                                    <PlayersDiv key={repository["player_id"]}>
                                        <Div>
                                            <div>
                                                Name: <h5>{repository["player_name"]}</h5>
                                            </div>
                                            <div>
                                                Age: <h5>{repository["age"]}</h5>
                                            </div>
                                        </Div>
                                        <div>
                                            Nationality <h5>{repository["nationality"]}</h5>
                                        </div>
                                    </PlayersDiv>
                                ))}
                            </WtfDiv>
                        </SearchPlayersDiv>
                    </SquadContent>
                </ConfigureSquadDiv>
                <Modal isOpen={successModalIsOpen} onRequestClose={handleCloseSuccessModal} className="react-modal-content" overlayClassName="react-modal-overlay">
                    <h2>Time cadastrado com sucesso !! 🎉✨🎇🎆</h2>
                    <button type="button" onClick={handleCloseSuccessModal} className="react-modal-close"><p>Clique para sair</p></button>
                </Modal>
            </Content>
        </Container>
    )
}
