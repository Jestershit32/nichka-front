
import styles from "./PostSettins.module.scss"






import iconVar from ".././SettingsItem/icons/var.svg"
import { useState } from "react"


export const PostSettins = ({ children }) => {
	const [togglePanel, setTogglePanel] = useState(false)

	if (!children) {
		return null
	}

	return (
		<div className={styles.PanelSettings}>
			<img className={styles.toggler} src={iconVar} alt="" onClick={() => setTogglePanel(!togglePanel)} />
			<div className={`${styles.PostSettins} ${togglePanel ? styles.active : " "}`} >
				{children}
			</div>
		</div>
	)
}