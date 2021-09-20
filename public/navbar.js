function NavBar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">BadBank</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#/createaccount/">Create Account</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#/login/">Login</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#/deposit/">Deposit</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#/withdraw/">Withdraw</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#/alldata/">All Data</a>
                        </li>
                    </ul>
                </div>
            </nav>
            
        </>
    )
}

