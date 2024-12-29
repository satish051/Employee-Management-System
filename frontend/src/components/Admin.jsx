export default function Admin({ id, name,  email }) {
    return (
        <div >
            <div className="card" style={{width: "18rem;"}}>
                <img src="..." className="card-img-top" alt="images of admins"></img>
                <div className="card-body">

                    <h5 className="card-title">{id} -- {name}</h5>
                    <p className="card-text">Email -- {email}</p>
                    <a href="#" className="btn btn-primary">show detail</a>
                </div>
            </div>
        </div>
    )
}