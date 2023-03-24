import { Wrapper } from "../components/Wrapper/Wrapper"
import { Panel } from '../components/Panel/Panel';
import { SettingsItem } from "../components/SettingsItem/SettingsItem";


import { useGetOnePostQuery, useMyProfileByTokenQuery } from "../redux";



// import { useState } from "react";
import { PostSettins } from "../components/PostSettins/PostSettins";
import { useParams } from "react-router-dom";
import { Post } from "../components/Post/Post"
// import { useEffect } from "react";




export const PostPage = () => {
    let { id } = useParams();
    const post = useGetOnePostQuery(id);
    const { data } = useMyProfileByTokenQuery();

    let checkOptions = false;
    let checkInFavorites = false;

    if (post.isLoading) {
        return (<h1>жди нахуй</h1>)
    }


    if (post && data) {

        if (data._id && post.data.user) {
            checkOptions = data._id === post.data.doc.user._id || data.rule === "admin"
            if (post.data.doc._id && data.favorites) {
                checkInFavorites = data.favorites.some(item => item === post.data.doc._id)
            }
        }
        if (checkInFavorites) {
            console.log(data.rule, post.data.doc._id, "у тебя в избранных")
        } else {
            console.log(data.rule, post.data.doc._id, "нет у тебя в избранных")
        }

    }








    return (
        <Wrapper>
            <Panel >
                {data ? <PostSettins>
                    {checkOptions ? <>
                        {/* <SettingsItem icon={"close"} name={"Заблокировать"} /> */}
                        <SettingsItem icon={"read"} name={"Редактировать"} />
                        <SettingsItem icon={"delete"} name={"Удалить"} />
                    </> : null
                    }
                    {!checkInFavorites ? <SettingsItem icon={"favorite"} name={"В избранное"} /> : <SettingsItem icon={"close"} name={"Удалить из избранных"} />}
                </PostSettins> : null
                }
            </Panel>
            <Post post={post.data.doc} />
        </Wrapper>
    )
}