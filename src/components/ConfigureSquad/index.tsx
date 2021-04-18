import { useEffect, useState } from 'react'
import {ConfigureSquadDiv, SquadContent, FormationDiv, SearchPlayersDiv, FormationType, SoccerField, Button, PlayersDiv, Div, WtfDiv} from './styles'



export function ConfigureSquad(){
    const [player, setPlayer] = useState ( { name : '' , age : '' , nacionality : ''})

    useEffect(() => {
        // fetch(`https://v3.football.api-sports.io/players?id=276&season=2019`, {
        //     "method": "GET",
        //     "headers": {
        //         "x-rapidapi-host": "v3.football.api-sports.io",
        //         "x-rapidapi-key": "4fcaa9a41f416a9721da54281b7a293e"
        //     }
        // })
        fetch('http://localhost:3000/api/players')
        .then(response => response.json())
        .then(data => {
            const newPlayer = { name : data[0].player.firstname.concat(" ").concat(data[0].player.lastname), age : data[0].player.age , nacionality : data[0].player.nationality }
            setPlayer (newPlayer)
        })
        .catch(err => {
            console.log(err);
        });
    }, []);
    console.log(player);;

    // const name = data.response[0].player.firstname.concat(data.response[0].player.lastname)

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

                            <label><h3>Search Players</h3>
                                <input placeholder="Player name" name="player"/>
                            </label>

                        <PlayersDiv>
                            <Div>
                                <div>
                                    Name: <h5>{player.name}</h5>
                                </div>
                                <div>
                                    Age: <h5>{player.age}</h5>
                                </div>
                            </Div>
                            <div>
                                Nacionality: <h5>{player.nacionality}</h5>
                            </div>
                        </PlayersDiv>
                    </WtfDiv>

                </SearchPlayersDiv>
            </SquadContent>
        </ConfigureSquadDiv>
    )
}