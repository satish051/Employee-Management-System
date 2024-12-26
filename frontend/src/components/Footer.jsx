

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-4 pb-2">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-md-4 mb-3">
            <h5>About Us</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac
              nisi condimentum, gravida ante a, dapibus est.
            </p>
          </div>
          <div className="col-sm-6 col-md-4 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-white">Home</a>
              </li>
              <li>
                <a href="#" className="text-white">Employees</a>
              </li>
              <li>
                <a href="#" className="text-white">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="col-sm-6 col-md-4 mb-3">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>
                <a href="mailto:info@example.com" className="text-white">Email: info@example.com</a>
              </li>
              <li>
                <a href="tel:+123456789" className="text-white">Phone: +1 234 567 89</a>
              </li>
              <li>
                <address className="text-white">
                  123 Street Name,<br />
                  City, Country 12345
                </address>
              </li>
            </ul>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12 text-center">
            <p className="mb-0">&copy; 2024 Your Company. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
