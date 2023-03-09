import styles from "./SettingsItem.module.scss"


export const SettingsItem = ({ icon, name, onClick }) => {
	return (
		<span className={styles.SettingsItem} onClick={onClick}>
			<img src={icon} alt="" className={styles.icon} />
			<span className={styles.name} >
				{name}
			</span>
		</span>
	)
}