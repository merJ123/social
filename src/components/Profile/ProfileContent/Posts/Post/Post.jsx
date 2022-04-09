import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.post}>
            <div className={s.post_author}>
                <img src="https://i.imgur.com/4yahKLS.jpeg" alt="ava" />
                <p>User User</p>
            </div>
            <p>{props.message}</p>
            <p className={s.likes}>{props.likes}</p>
        </div>
    )
}

export default Post;