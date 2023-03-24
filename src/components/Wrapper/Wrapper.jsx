import { Footer } from "../Footer/Footer"
import { Header } from "../Header/Header"
import { MessagePanel } from "../MessagePanel/MessagePanel"

import styles from "./Wrapper.module.scss"

export const Wrapper = ({ children, noProfile }) => {
	return (<>
		<div className={styles.Wrapper}>
			<Header noProfile={noProfile} />
			{children}
			<Footer />
			<MessagePanel />
		</div>
	</>
	)

}