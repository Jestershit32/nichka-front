import { Wrapper } from "../components/Wrapper/Wrapper"
import { List } from "../components/List/List"
import { PostMini } from "../components/PostMini/PostMini"
import { Panel } from '../components/Panel/Panel';
import { Profile } from '../components/Profile/Profile'
import { PostSettins } from "../components/PostSettins/PostSettins";
import { SettingsItem } from "../components/SettingsItem/SettingsItem";

export const ProfilePage = () => {
    return (
        <Wrapper>
            <Panel>
                <PostSettins>
                    <SettingsItem icon={"close"} name={"Заблокировать"} onClick={() => console.log("name")} />
                    <SettingsItem icon={"read"} name={"Редактировать"} onClick={() => console.log("блять")} />
                    <SettingsItem icon={"delete"} name={"Удалить"} onClick={() => console.log("блять")} />
                    <SettingsItem icon={"favorite"} name={"В избранное"} onClick={() => console.log("блять")} />
                </PostSettins>
            </Panel>
            <Profile />
            <List>
                <PostMini />
            </List>
        </Wrapper>
    )
}