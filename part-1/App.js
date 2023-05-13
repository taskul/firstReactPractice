const App = () => {
    return (
        <div>
            <FirstComponent />
            <NamedComponent name='Tas'/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))