import iconCls from ".././SettingsItem/icons/clsDark.svg"
import iconSearch from ".././SettingsItem/icons/searchDark.svg"

import { SettingsItem } from ".././SettingsItem/SettingsItem"
import styles from "./Search.module.scss"
import { FilterMenu } from "./FilterMenu/FilterMenu"

import { setPage, setSearchValue } from "../../redux/slices/listSettings"

import { useSelector, useDispatch } from "react-redux";

import { useState } from "react"



export const Search = () => {
	const dispatch = useDispatch()
	const searchValue = useSelector(state => state.listSettings.searchValue)
	const [toggleFilter, setToggleFilter] = useState(false)

	const toggle = () => {
		setToggleFilter(!toggleFilter)
		console.log(toggleFilter)
	};

	const handlerValue = (event) => {
		dispatch(setSearchValue({ searchValue: event.target.value }))
		dispatch(setPage({ page: 1 }))
	}


	return (
		<div className={styles.Search} >
			<div className={styles.InputBlock}>
				<img src={iconSearch} alt="" className={styles.Ico} />
				<input type="text"
					placeholder="Поиск"
					value={searchValue}
					className={styles.Input}
					onChange={handlerValue} />
				<img src={iconCls} alt="" className={styles.Ico} onClick={() => dispatch(setSearchValue({ searchValue: "" }))} />
			</div>
			<SettingsItem icon={"filter"} name={"Фильтр"} onClick={toggle} />
			{toggleFilter && <FilterMenu />}
		</div>
	)
}