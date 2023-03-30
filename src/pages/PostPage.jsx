import { Wrapper } from "../components/Wrapper/Wrapper"
import { Panel } from '../components/Panel/Panel';
import { SettingsItem } from "../components/SettingsItem/SettingsItem";

import {
    useGetOnePostQuery,
    useMyProfileByTokenQuery,
    useRemoveInFavoritesMutation,
    useAddInFavoritesMutation,
    useRemovePostMutation,
    useRemoveFileMutation
} from "../redux";
import { useDispatch } from "react-redux";
import { PostSettins } from "../components/PostSettins/PostSettins";
import { useNavigate, useParams } from "react-router-dom";
import { Post } from "../components/Post/Post"

import { addMessage } from "../redux/slices/messages";
import { useState } from "react";
import { AlertWindow } from "../components/AlertWindow/AlertWindow";

export const PostPage = () => {
    const [isOpen, setOpen] = useState(false);
    const nav = useNavigate();
    let { id } = useParams();
    const post = useGetOnePostQuery(id);
    const { data } = useMyProfileByTokenQuery();
    const [addInFavorites] = useAddInFavoritesMutation()
    const [removeInFavorites] = useRemoveInFavoritesMutation()
    const [removePost] = useRemovePostMutation();
    const [removeFile] = useRemoveFileMutation();
    const dispatch = useDispatch()
    if (post.isLoading) {
        return (<h1>*</h1>)
    }


    let checkOptions = false;
    let checkInFavorites = false;

    const addInFavoritesClick = async (id) => {
        try {
            const add = await addInFavorites(id).unwrap()
            console.log({ add })
            dispatch(addMessage({
                message: "запись " + add.post.title + " добавлена в ваше избранное",
                status: "success"
            }))
        }
        catch (error) {
            console.log(error.data.message)
            dispatch(addMessage({
                message: error.data.message,
                status: "error"
            }))
        }
    }

    const removeInFavoritesClick = async (id) => {
        try {
            const remove = await removeInFavorites(id).unwrap()
            console.log({ remove })
            dispatch(addMessage({
                message: "запись " + remove.post.title + " удалена из ваших избранных",
                status: "success"
            }))
        }
        catch (error) {
            console.log(error.data.message)
            dispatch(addMessage({
                message: error.data.message,
                status: "error"
            }))
        }
    }
    const removePostClick = async (id) => {
        try {
            const backState = await removePost(id).unwrap()
            console.log(backState)
            const backStateFile = await removeFile({ url: backState.post.fileUrl })
            dispatch(addMessage({
                message: "Пост " + backState.post.title + " удален",
                status: "success"
            }))
            console.log({ backState, backStateFile })
            nav('/')
        } catch (error) {
            console.log(error.data.message)
            dispatch(addMessage({
                message: error.data.message,
                status: "error"
            }))
        }
    }

    if (data && post?.data.doc) {
        // console.log(post.data.doc);
        if (data?._id && post.data.doc.user?._id) {
            // console.log("Дошло");
            // console.log(post.data.doc.user._id)
            checkOptions = data._id === post.data.doc.user?._id || data.rule === "admin"
        }
        if (post.data.doc._id && data.favorites) {
            checkInFavorites = data.favorites.some(item => item === post.data.doc._id)
        }
        if (checkOptions) {
            console.log(data.rule, post.data.doc._id, "есть доступ к редактированию")
        } else {
            console.log(data.rule, post.data.doc._id, "Нет доступа к редактированию")
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
                        <SettingsItem icon={"read"} name={"Редактировать"} onClick={() => nav("/edit/" + post.data.doc._id)} />
                        <SettingsItem icon={"delete"} name={"Удалить"} onClick={() => setOpen(prev => !prev)} />                    </> : null
                    }
                    {checkInFavorites ? <SettingsItem icon={"close"} name={"Удалить из избранных"} onClick={() => removeInFavoritesClick(id)} /> : <SettingsItem icon={"favorite"} name={"В избранное"} onClick={() => addInFavoritesClick(id)} />}
                </PostSettins> : null
                }
            </Panel>
            <Post post={post.data.doc} />
            <AlertWindow message={`Вы действительно хотите удалить пост`} H={`${post.title}`} inOk={() => removePostClick(post.data.doc._id)} inOkName={"удалить"} open={isOpen} back={() => setOpen(prev => !prev)} />        </Wrapper>
    )
}
