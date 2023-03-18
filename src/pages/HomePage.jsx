import { Wrapper } from "../components/Wrapper/Wrapper"
import { List } from "../components/List/List"
import { PostMini } from "../components/PostMini/PostMini"
import { Panel } from '../components/Panel/Panel';
import { Search } from '../components/Search/Search';

export const HomePage = () => {
    return (
        <Wrapper>
            <Panel noBack>
                <Search />
            </Panel>
            <List>
                <PostMini />
            </List>
        </Wrapper>
    )
}