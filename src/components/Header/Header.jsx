import styles from "./Header.module.scss"
import logo from "../../global-css/svg/logo.svg"
import { MyProfile } from "../MyProfile/MyProfile"
import { Link } from "react-router-dom"
// import { useSelector } from 'react-redux'




export const Header = () => {

    // const user = useSelector(state => state.myProfile.user)

    return (
        <>
            <div className={styles.Header}>
                <Link to="/">
                    <img src={logo} className={styles.logo} alt="" />
                </Link>
                <MyProfile />

            </div>
        </>
    )
}
