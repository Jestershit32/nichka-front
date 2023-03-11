
import styles from "./PostSettins.module.scss"
import { SettingsItem } from ".././SettingsItem/SettingsItem"


import iconCls from ".././SettingsItem/icons/cls.svg"
import iconRead from ".././SettingsItem/icons/read.svg"
import iconDel from ".././SettingsItem/icons/del.svg"
import iconFav from ".././SettingsItem/icons/fav.svg"


import iconVar from ".././SettingsItem/icons/var.svg"
import { useState } from "react"


export const PostSettins = () => {
	const [togglePanel, setTogglePanel] = useState(false)
	return (
		<div className={styles.PanelSettings}>
			<img className={styles.toggler} src={iconVar} alt="" onClick={() => setTogglePanel(!togglePanel)} />
			<div className={`${styles.PostSettins} ${togglePanel ? styles.active : " "}`} >
				<SettingsItem icon={iconCls} name={"Заблокировать"} />
				<SettingsItem icon={iconRead} name={"Редактировать"} />
				<SettingsItem icon={iconDel} name={"Удалить"} />
				<SettingsItem icon={iconFav} name={"В избранное"} />
			</div>
		</div>
	)
}