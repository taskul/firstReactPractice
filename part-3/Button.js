const Button = (props) => {
    let buttonType;
    if (props.bType==='primary') {
        buttonType='primary'
    } else {
        buttonType='secondary'
    }
    return (
        <button className={buttonType}>{props.text}</button>
    )
}