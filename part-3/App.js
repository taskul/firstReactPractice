const App = () => {
    return (
        <div>
            <Alert aType='success' message='Component created!' />
            <Alert aType='danger' message='You are using old version of React' />
            <Card>
            <Person name='Tommy' age={15} hobbies={['video games', 'skateboarding']}/>
            <Button bType='secondary' text='Vote' />
            </Card>
            <Card>
            <Person name='Anna' age={22} hobbies={['soccer', 'weight lifting', 'painting']} />
            <Button bType='primary' text='Vote' />
            </Card>
            <Card>
            <Person name='Jenna' age={34} hobbies={['playing video games', 'playing with dogs', 'crafts']} />
            <Button bType='primary' text='Vote' />
            </Card>
            <Card>
            <Person name='Xan' age={12} hobbies={['robotics', 'legos', 'coding']} />
            <Button bType='secondary' text='Vote' />
            </Card>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))