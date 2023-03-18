import iconFilt from ".././SettingsItem/icons/filt.svg"
import iconCls from ".././SettingsItem/icons/clsDark.svg"
import iconSearch from ".././SettingsItem/icons/searchDark.svg"

import { SettingsItem } from ".././SettingsItem/SettingsItem"
import styles from "./Search.module.scss"
import { FilterMenu } from "./FilterMenu/FilterMenu"




import { useState } from "react"



export const Search = () => {
	const [toggleFilter, setToggleFilter] = useState(false)
	const [searchValue, setSearchValue] = useState("")

	const toggle = () => {
		setToggleFilter(!toggleFilter)
		console.log(toggleFilter)
	};

	const handlerValue = (event) => {
		setSearchValue(event.target.value)
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
				<img src={iconCls} alt="" className={styles.Ico} />
			</div>
			<SettingsItem icon={"filter"} name={"Фильтр"} onClick={toggle} />
			{toggleFilter && <FilterMenu />}
		</div>
	)
}