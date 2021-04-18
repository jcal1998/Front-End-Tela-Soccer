import {Container, TeamInformationDiv, CreateTitleDiv, RadioDiv, FormDiv, NameDiv, WebsiteDiv,ChooseDiv, } from './styles'
import {ConfigureSquad} from '../ConfigureSquad'

export function TeamInformation(){
    return (
        <Container>
            <CreateTitleDiv>
                <h1>Create your team</h1>
            </CreateTitleDiv>
            <form>
                <TeamInformationDiv>
                    <h1>Team Information</h1>
                    <FormDiv>
                        <NameDiv>
                            <label><h3>Team name</h3>
                                <input placeholder="insert team name" />
                            </label>
                        </NameDiv>
                        <WebsiteDiv>
                            <label><h3>Team website</h3>
                                <input placeholder="http://myteam.com" />
                            </label>
                        </WebsiteDiv>
                        <RadioDiv>
                            <h3>Team type</h3>
                            <ChooseDiv>
                                <div>                                
                                    <input type="radio" id="real" name="teamType" value="real" />
                                    <label htmlFor="real">Real</label>
                                </div>
                                <div>                                
                                    <input type="radio" id="fantasy" name="teamType" value="fantasy" />
                                    <label htmlFor="fantasy">Fantasy</label>
                                </div>
                            </ChooseDiv>
                        </RadioDiv>
                    </FormDiv>
                </TeamInformationDiv>
                <ConfigureSquad />
            </form>
        </Container>
    )
}
