import { Footer } from "../Footer/Footer"
import { Header } from "../Header/Header"
import styles from "./Wrapper.module.scss"


export const Wrapper = ({ children }) => {
	return (
		<div className={styles.Wrapper}>
			<Header />
			{children}
			<Footer />
		</div>
	)
}