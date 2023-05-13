const Person = (props) => {
    let canVoteMsg;
    if (props.age >= 18) {
        canVoteMsg = "Please go vote!"
    } else {
        canVoteMsg = 'You must be 18 to vote'
    }
    return (

        <div className="person">
            <p>Learn some information about this person</p>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p> 
            <p>Voting status: {canVoteMsg}</p>
            <div>
                <p>Hobbies</p>
                <ul>
                    {props.hobbies.map(item => <li>{item}</li>)}
                </ul>
            </div>
        </div>
    )
}