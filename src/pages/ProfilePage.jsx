import { Wrapper } from "../components/Wrapper/Wrapper"
import { Panel } from '../components/Panel/Panel';
import { Profile } from '../components/Profile/Profile'
import { PostSettins } from "../components/PostSettins/PostSettins";
import { SettingsItem } from "../components/SettingsItem/SettingsItem";
import { ProfilePosts } from "../components/ProfilePosts/ProfilePosts"
import { useProfileByIdQuery } from "../redux"

import { useParams } from "react-router-dom"


export const ProfilePage = () => {

    let { id } = useParams();


    let { data, isLoading } = useProfileByIdQuery(id);

    if (isLoading) {
        return <h1>жди нахуй</h1>
    }
    console.log(data)
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
            <Profile user={data.user} />
            <ProfilePosts userID={id} postsFav={data.user.favorites} />
        </Wrapper>
    )
}