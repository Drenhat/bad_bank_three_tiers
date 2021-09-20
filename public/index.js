function Spa() {
    return (
        <HashRouter>
            <NavBar/>
            <UserContext.Provider value={{users:[{name: "John", email: 'john@doe.com',
password:"secret", balance: 100}]}}>
                <Route path="/" exact component={Home}/>
                <Route path="/createaccount/" component={CreateAccount}/>
                <Route path="/login/" component={Login}/>
                <Route path="/deposit/"  component={Deposit}/>
                <Route path="/withdraw/"  component={Withdraw}/>
                <Route path="/alldata/"  component={AllData}/>
            </UserContext.Provider>
        </HashRouter>
            
    )
}

ReactDOM.render(
    <Spa/>,
    document.getElementById("root")
)


