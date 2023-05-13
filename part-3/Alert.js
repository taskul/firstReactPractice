const Alert = (props) => {
    let alertType;
    if (props.aType==='success') {
        alertType = 'success'
    } else {
        alertType = 'danger'
    }
    return (
        <div className={alertType}>
            <p>{props.aType}</p>
            <hr/>
            <p><i>{props.message}</i></p>
        </div>
    )
}