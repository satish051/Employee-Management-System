
export default function SignUpAsGuest() {
  return (
    <div className='container d-flex justify-content-center align-items-center' style={{ height: "100vh" }} >
      {/* <h1>Sign up as guest</h1> */}
      <form action="">
        <div className='mb-3'>
          <label htmlFor="firstname" className="form-label">First Name:</label>
          <input type="text" className="form-control" id="firstname" ></input>
        </div>
        <div className='mb-3'>
          <label htmlFor="lastname" className="form-label">Last Name:</label>
          <input type="text" className="form-control" id="lastname" ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="useremail" className="form-label">Email address</label>
          <input type="email" className="form-control" id="useremail" aria-describedby="emailHelp"></input>
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className='mb-3'>
          <label htmlFor="userphone" className="form-label">Phone No:</label>
          <input type="tel" className="form-control" id="userphone"></input>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}