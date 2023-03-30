import { Wrapper } from "../components/Wrapper/Wrapper"
import { List } from "../components/List/List"
import { PostMini } from "../components/PostMini/PostMini"
import { Panel } from '../components/Panel/Panel';
import { Search } from '../components/Search/Search';
import { useGetPostsQuery } from "../redux";

import { setPage } from "../redux/slices/listSettings";

import { useSelector, useDispatch } from "react-redux";

export const HomePage = () => {
    const dispatch = useDispatch()
    const { page, inOnePage, newOrOld, searchValue } = useSelector(state => state.listSettings)
    const { data = {}, isLoading } = useGetPostsQuery({ page, inOnePage, newOrOld, searchValue });


    const str = "/uploads/file/1680048326115.pdf"
    console.log(str.slice(1))

    if (isLoading) return <h1>чето не так соре</h1>
    console.log(data);
    return (
        <Wrapper>
            <Panel noBack>
                <Search />
            </Panel>
            <List isLoading={isLoading} activ={page} pages={data.countPages} pageNumbSet={(i) => dispatch(setPage(i))}  >
                {data.posts.map((item) => {
                    return <PostMini post={item} key={item._id} />
                })}
            </List>
        </Wrapper>
    )
}