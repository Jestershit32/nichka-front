
import styles from "./MessagePanel.module.scss"
import { useSelector, useDispatch } from "react-redux";
import { removeMessage } from "../../redux/slices/messages"

export const MessagePanel = () => {

	const messages = useSelector((state) => state.messages.messages)
	const dispatch = useDispatch();

	return (
		<div className={styles.MessagePanel}>
			{messages.map((item, key) => {
				return (
					<div className={styles.message + " " + (item.status === "error" ? styles.err : styles.succ)}>
						<span className={styles.message}>
							{item.message}
						</span>
						<button className={styles.close} onClick={() => dispatch(removeMessage({}))}>
							<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
								<g clip-path="url(#clip0_70_616)">
									<path d="M19.2023 17.5L26.6431 10.0591C27.1157 9.58652 27.1157 8.82459 26.6431 8.352C26.1705 7.87941 25.4086 7.87941 24.936 8.352L17.4951 15.7929L10.0591 8.352C9.58652 7.88423 8.82459 7.88423 8.352 8.352C7.88423 8.82459 7.88423 9.58652 8.352 10.0591L15.7929 17.5L8.352 24.9408C7.87941 25.4134 7.87941 26.1753 8.352 26.6479C8.58829 26.8842 8.89692 27 9.20555 27C9.51418 27 9.82281 26.8842 10.0591 26.6479L17.5 19.2071L24.9408 26.6479C25.1771 26.8842 25.4858 27 25.7944 27C26.103 27 26.4116 26.8842 26.6479 26.6479C27.1205 26.1753 27.1205 25.4134 26.6479 24.9408L19.2071 17.5H19.2023Z" fill={item.status === "error" ? "#d44551" : "#79e16d"} />
								</g>
								<defs>
									<clipPath id="clip0_70_616">
										<rect width="19" height="19" fill="white" transform="translate(8 8)" />
									</clipPath>
								</defs>
							</svg>
						</button>
					</div>
				)
			})}

		</div>
	)
}