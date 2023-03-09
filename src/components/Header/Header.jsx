import styles from "./Header.module.scss"
import logo from "../../global-css/svg/logo.svg"
import { MyProfile } from "../MyProfile/MyProfile"

export const Header = () => {

    return (
        <>
            <div className={styles.Header}>
                <img src={logo} className={styles.logo} alt="" />
                <MyProfile />
            </div>
        </>
    )
}
