import { useEffect, useState , useCallback} from 'react'
import { api } from '../../services/api';
import {ConfigureSquadDiv, SquadContent, FormationDiv, SearchPlayersDiv, FormationType, SoccerField, Button, PlayersDiv, Div, WtfDiv} from './styles'
import {debounce} from 'debounce'

export function ConfigureSquad(){
    const [repositories, setRepositories] = useState ([])
    const [search, setSearch] = useState ("")

    const debounceSearch = useCallback(debounce((variable:any)=>{setSearch(variable);},700),[],) //eslint-disable-line react-hooks/exhaustive-deps

    const Variable = (e : any) => {
        const { value:variable } = e.target
        debounceSearch(variable);
    }

    useEffect(() => {
        console.log("pqpviu")
        // `https://v3.football.api-sports.io/players?search=${search}&season=2019`
        api.get(`https://v1.basketball.api-sports.io/teams?search=${search}`)
        .then(response => {
            setRepositories( response.data.response)
            console.log("pqpviu")
        })
        .catch(err => {
            console.log(err);
        });
    }, [search]);

    return (
        <ConfigureSquadDiv>
            <h1>Configure Squad</h1>
            <SquadContent>
                <FormationDiv>
                    <FormationType>
                        <label htmlFor="formation"><h3>Formation</h3></label>
                        <select name="formation" id="formation">
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
                    </SoccerField>
                    <Button>Save</Button>
                </FormationDiv>
                <SearchPlayersDiv>
                    <WtfDiv>
                        <label><h3>Search Teams</h3>
                            <input onChange={Variable} placeholder="Player name" name="player"/>
                        </label>
                        {repositories.map(repository => {
                            if(repository["nationnal"])
                                return (                                
                                <PlayersDiv>
                                    <Div>
                                        <div>
                                            Name: <h5>{repository["name"]}</h5>
                                        </div>
                                        <div>
                                            id: <h5>{repository["id"]}</h5>
                                        </div>
                                    </Div>
                                    <div>
                                        Nacional? <h5>Não</h5>
                                    </div>
                                </PlayersDiv>
                                )
                            else                                 
                                return (                                
                                    <PlayersDiv>
                                        <Div>
                                            <div>
                                                Name: <h5>{repository["name"]}</h5>
                                            </div>
                                            <div>
                                                id: <h5>{repository["id"]}</h5>
                                            </div>
                                        </Div>
                                        <div>
                                            Nacional? <h5>Não</h5>
                                        </div>
                                    </PlayersDiv>
                                )
                        })}
                    </WtfDiv>

                </SearchPlayersDiv>
            </SquadContent>
        </ConfigureSquadDiv>
    )
}