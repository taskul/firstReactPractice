const Tweet = (props)=> {
    return (
        <div className="tweet">
            <p><b>{props.username}</b>: {props.name} <i>{props.date}</i></p>
            <p>{props.message}</p>
        </div>
    )
}