const App = () => {
    return (
        <div>
            <Tweet username='coolcat' name='Cat' date='05/13/2023' message='Yo have you seen the milk prices! What is the deal with that?'/>
            <Tweet username='chilldog' name='Dog' date='05/12/2023' message='Something is wrong with the sticks at the Baldur gardens, I can not find the right stick'/>
            <Tweet username='highbird' name='Bird' date='05/12/2023' message="Pooped on this guy's sweater today! He was so mad bro."/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))