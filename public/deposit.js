function Deposit () {
    const [show, setShow] = React.useState(true);
    const [status, setStatus] = React.useState('');

    return (
        <Card
            bgcolor='info'
            header='Deposit'
            status={status}
            body={show ?
                <DepositForm setShow={setShow} setStatus={setStatus}/> :
                <DepositMsg setShow={setShow} setStatus={setStatus}/>} 
        />
    )
}

function DepositMsg(props) {
    return (<>
        <h5>Success</h5>
        <button type="submit"
        className="btn btn-light"
        onClick={() => {
            props.setShow(true);
            props.setStatus('')
            }}>
                Deposit again
        </button>
    </>)
}

function DepositForm(props) {
    const [email, setEmail] = React.useState('');
    const [amount, setAmount] = React.useState('');

    function handle() {
        fetch(`/account/update/${email}/${amount}`)
            .then(response => response.text())
            .then(text => {
                try {
                    //create a JS object from the database
                    const data = JSON.parse(text);
                    //Print the deposit value up to the screen
                    props.setStatus(`Your balance is now : ${JSON.stringify(data.value.balance)}`);
                    props.setShow(false);
                    console.log(`JSON: ${data}`)
                } catch(err) {
                    props.setStatus(`deposit failed`);
                    console.log(`err: ${text}`)
                };
            })
    }
    return (<>
        Email<br/>
        <input 
            type="input"
            className="form-control"
            placeholder="Enter email"
            value={email} 
            onChange={e=> setEmail(e.currentTarget.value)}/><br/>

        Amount<br/>
        <input 
            type="number"
            className="form-control"
            placeholder="Enter amount"
            value={amount} 
            onChange={e=> setAmount(e.currentTarget.value)}/><br/>

        <button type="button"
            className="btn btn-light"
            onClick={handle}>Deposit</button>
    </>)
}