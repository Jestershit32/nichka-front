
import { useDispatch } from "react-redux"
import styles from "./Tag.module.scss"
import { setSearchValue } from "../../redux/slices/listSettings"
import { useNavigate } from "react-router-dom"



export const Tag = ({ name }) => {
	const dispatch = useDispatch()
	const nav = useNavigate()

	const tagSearch = () => {
		nav("/")
		dispatch(setSearchValue({ searchValue: "#" + name }))

	}

	return (
		<span className={styles.Tag} onClick={tagSearch}>
			#{name}
		</span>
	)
}