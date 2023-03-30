import styles from "./EditPostWindow.module.scss"
import iconAdd from "./add.svg";
import iconDel from "./cls.svg";
import { useDispatch, useSelector } from "react-redux";
import {
	setTitleValue,
	setDescriptionValue,
	addTag, setOneTagValue,
	removeTag,
	setError,
	addAllTags
} from "../../redux/slices/createAndUpdatePost";
import {
	useUploadFileMutation,
	useUpdatePostMutation,
	useMyProfileByTokenQuery,
	useGetOnePostQuery,
	useRemoveFileMutation
} from "../../redux"
import { useEffect, useRef } from "react";

import { useNavigate, useParams } from "react-router-dom";

export const EditPostWindow = () => {
	const dispatch = useDispatch();
	const { title, description, oneTag, tags, errors } = useSelector(state => state.createAndUpdate)
	const [updatePost] = useUpdatePostMutation()
	const [uploadFile] = useUploadFileMutation();
	const [removeFile] = useRemoveFileMutation()
	const inputFile = useRef([])
	const nav = useNavigate()
	const { data, isLoading } = useMyProfileByTokenQuery();
	const { id } = useParams();
	const { data: post = {} } = useGetOnePostQuery(id);


	useEffect(() => {
		if (post?.doc) {
			dispatch(setTitleValue({ title: post.doc.title }))
			dispatch(setDescriptionValue({ description: post.doc.description }))
			dispatch(addAllTags({ tags: post.doc.tags }))
		}
	}, [post])



	if (isLoading) {
		return <h1>loading</h1>
	}


	if (!data) {
		nav('/')
	}

	const titleHandler = (event) => {
		dispatch(setTitleValue({ title: event.target.value }))
	}

	const descriptionHandler = (event) => {
		dispatch(setDescriptionValue({ description: event.target.value }))
	}


	const oneTagHandler = (event) => {
		dispatch(setOneTagValue({ oneTag: event.target.value }))
	}

	const addTagHandler = () => {
		dispatch(addTag())
	}


	const removeTagHandler = (indexTag) => {

		dispatch(removeTag({ indexTag }))
	}




	const submiteHandler = async () => {
		dispatch(setError({ errors: [] }))
		try {
			const backAlertPost = await updatePost({
				body: {
					title,
					description,
					tags
				}, id
			})

			if (backAlertPost?.error) {
				console.log(backAlertPost)
				dispatch(setError({ errors: backAlertPost.error.data }))
				throw ("пост не загрузился")
			}
			if (inputFile.current.files.length === 0) {
				dispatch(setError({ errors: [{ msg: "файл не загружен" }] }))
				// nav("/post/" + backAlertPost.data.doc._id)
			}
			let formData = new FormData();
			formData.append("file", inputFile.current.files[0])

			const backAlertFile = await uploadFile({ body: formData, id: backAlertPost.data.post._id })

			if (backAlertFile?.error) {
				console.log(backAlertFile.error.data.message)
				dispatch(setError({ errors: [{ msg: backAlertFile.error.data.message }] }))
				throw ("фаил не загрузился")
			} else {
				const backOfRemoveFile = await removeFile({ url: post.doc.fileUrl })
				if (backOfRemoveFile?.success) {
					console.log("пост загружен")
				} else {
					console.log("не удалось загрузить файл")
				}
			}

			nav("/post/" + backAlertFile.data.doc._id)
			console.log("Успешно загружено")
		} catch (error) {
			console.log(error)
		}



	}

	return (
		<div className={styles.AddPostWindow}>
			<div className={styles.Window}>
				<h1 className={styles.H1}>Изменить док </h1>
				<div className={styles.Form}>
					<div className={`${styles.TextBlock} ${"" && styles.error}`}>
						<input type="text" placeholder="Введите Название" className={styles.TextInput} value={title} onChange={event => titleHandler(event)} />
					</div>

					<div className={`${styles.TextBlock} ${"" && styles.error}`}>
						{/* <input type="text" placeholder="Введите Имя" className={styles.TextInput} required /> */}
						<textarea className={styles.TextInput + " " + styles.TextArea} cols="30" rows="auto" placeholder="Ведите описание" defaultValue={description} onChange={event => descriptionHandler(event)}></textarea>
					</div>

					<div className={styles.addTegblock}>
						<div className={styles.addTegTextBar}>
							<div className={`${styles.addTagInput} ${styles.TextBlock} ${"" && styles.error}`}>
								<input type="text" placeholder="Введите тег без знака решетка" onChange={event => oneTagHandler(event)} className={styles.TextInput} value={oneTag} />
							</div>
							<input type="button" value={"+"} onClick={addTagHandler} className={styles.addTegButton} />
						</div>
						<div className={styles.tegBox}>{
							tags.map((item, key) => {
								return (
									<span key={key} className={styles.Teg}>
										#{item}
										<img className={styles.TegDel} src={iconDel} onClick={() => removeTagHandler(key)} alt="" />
									</span>
								)
							})
						}
						</div>
					</div>

					<form action="" method="post">
						<input ref={inputFile} type="File" id="myfile" className={styles.fileInput} required />
						<a href={'http://localhost:1337' + post.doc?.fileUrl}>Ссылка на имеющийся файл </a>
					</form>
					<label htmlFor="myfile" className={styles.fileBlock}>
						<img src={iconAdd} alt="" className={styles.filePic} />
						<span className={styles.fileText}>{"Добавьте файл"}</span>
					</label>

					<input type="submit" value="Изменить" onClick={submiteHandler} className={styles.TextButton} />

				</div>
				<p className={styles.errorName}>
					{errors ?
						errors.map((item, key) => {
							return <span key={key} >{item.msg}</span>
						})
						: null
					}
				</p>
			</div>
		</div>
	)
}