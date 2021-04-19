import { useEffect, useState , useCallback, FormEvent, useContext} from 'react'
import {Container, TeamInformationDiv, CreateTitleDiv, RadioDiv, FormDiv, InputDiv,ChooseDiv, ConfigureSquadDiv, SquadContent, FormationDiv, SearchPlayersDiv, FormationType, SoccerField, Button, PlayersDiv, Div, WtfDiv} from './styles'
import { api } from '../../services/api';
import {debounce} from 'debounce'
import Modal from 'react-modal'
import {useHistory} from 'react-router-dom'
import {TeamsContext} from '../../TeamsContext'

Modal.setAppElement('#root')

export function TeamInformation(){
    const contextData = useContext(TeamsContext);
    const [ nameFocus, setNameFocus ] = useState (false)
    const [ siteFocus, setsiteFocus ] = useState (false) 
    const [Name , setName] = useState('')
    const [Website, setWebsite] = useState('')
    const [Type, setType] = useState('')
    const [Formation, setFormation] = useState('')
    const [Player1, setPlayer1] = useState('')
    const [Player2, setPlayer2] = useState('')
    const [Player3, setPlayer3] = useState('')
    const [ repositories, setRepositories] = useState ([])
    const [ search, setSearch] = useState ("")
    const [ successModalIsOpen, setSuccessModalIsOpen] = useState(false)
    let history = useHistory();

    const debounceSearch = useCallback(debounce((variable:any)=>{setSearch(variable);},700),[],) //eslint-disable-line react-hooks/exhaustive-deps

    console.log(contextData)

    const Variable = (e : any) => {
        const { value:variable } = e.target
        debounceSearch(variable);
    }

    const HandleCreateTeam = (event: FormEvent) =>{
        event.preventDefault();
        const data = {Name, Website, Type, Formation, Player1, Player2, Player3 };
        console.log(data);

        api.post('http://localhost:3000/teams', data)

        handleOpenSuccessModal()
    }

    const handleOpenSuccessModal = ()=> {
        setSuccessModalIsOpen(true)
    }



    const handleCloseSuccessModal = ()=> {
        setSuccessModalIsOpen(false)
        history.push("/")
    }

    useEffect(() => {
        // `https://v3.football.api-sports.io/players?search=${search}&season=2019`
        api.get(`https://v1.basketball.api-sports.io/teams?search=${search}`)
        .then(response => {
            setRepositories( response.data.response)
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
            <form onSubmit={HandleCreateTeam}>
                <TeamInformationDiv>
                    <h1>Team Information</h1>
                    <FormDiv>
                        <InputDiv isFocused={nameFocus===true} onFocus={()=>{setNameFocus(true)}} onBlur={()=>{setNameFocus(false)}}>
                            <label><h3>Team name</h3>
                                <input value={Name} onChange={e=>setName(e.target.value)} placeholder="insert team name" required/>
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
                                    <input onChange={e=>setType(e.target.value)} type="radio" id="real" name="Type" value="real" required/>
                                    <label htmlFor="real">Real</label>
                                </ChooseDiv>
                                <ChooseDiv isFocused={ Type ==='fantasy'}>                                
                                    <input onChange={e=>setType(e.target.value)} type="radio" id="fantasy" name="Type" value="fantasy" required />
                                    <label htmlFor="fantasy">Fantasy</label>
                                </ChooseDiv>
                            </div>
                        </RadioDiv>
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
                            <SoccerField>
                            <label><h3>Player1</h3>
                                <input onChange={e=>setPlayer1(e.target.value)} placeholder="insert team name" required/>
                            </label>
                            <label><h3>Player2</h3>
                                <input onChange={e=>setPlayer2(e.target.value)} placeholder="insert team name" required/>
                            </label>
                            <label><h3>Player3</h3>
                                <input onChange={e=>setPlayer3(e.target.value)} placeholder="insert team name" required/>
                            </label>
                            </SoccerField>
                            <Button>Save</Button>
                        </FormationDiv>
                        <SearchPlayersDiv>
                            <WtfDiv>
                                <label><h3>Search Teams</h3>
                                    <input onChange={Variable} placeholder="Player name" name="player"/>
                                </label>
                                {repositories.map(repository => (                                
                                    <PlayersDiv key={repository["id"]}>
                                        <Div>
                                            <div>
                                                Name: <h5>{repository["name"]}</h5>
                                            </div>
                                            <div>
                                                id: <h5>{repository["id"]}</h5>
                                            </div>
                                        </Div>
                                        <div>
                                            Nacional? <h5>{repository["nationnal"]}</h5>
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
            </form>
        </Container>
    )
}
