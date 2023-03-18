import styles from "./SettingsItem.module.scss"

import iconCls from "./icons/cls.svg"
import iconRead from "./icons/read.svg"
import iconDel from "./icons/del.svg"
import iconFav from "./icons/fav.svg"
import iconAdd from "./icons/add.svg"
import iconFilt from "./icons/filt.svg"

export const SettingsItem = ({ icon, name, onClick }) => {

	function iconSrc(item) {
		switch (item) {
			case "close":
				return iconCls;
			case "read":
				return iconRead;
			case "delete":
				return iconDel;
			case "favorite":
				return iconFav;
			case "filter":
				return iconFilt;
			case "add":
				return iconAdd;
			default:
				break;
		}
	}



	return (
		<span className={styles.SettingsItem} onClick={onClick}>
			<img src={iconSrc(icon)} alt="" className={styles.icon} />
			<span className={styles.name} >
				{name}
			</span>
		</span>
	)
}