import { Wrapper } from "../components/Wrapper/Wrapper"
import { Panel } from '../components/Panel/Panel';
import { LoginWindow } from '../components/LoginWindow/LoginWindow'
export const LoginPage = () => {


    return (
        <Wrapper noProfile>
            <Panel />
            <LoginWindow />
        </Wrapper>
    )
}