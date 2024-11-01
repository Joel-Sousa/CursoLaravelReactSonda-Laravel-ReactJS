
function Navbar() {
    return(
        <nav
            id="sidebarMenu"
            className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
            style={{}}
          >
            <div className="position-sticky pt-3">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-home"
                      aria-hidden="true"
                    >
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                      <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                    Dashboard
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-file"
                      aria-hidden="true"
                    >
                      <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
                      <polyline points="13 2 13 9 20 9" />
                    </svg>
                    Orders
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-shopping-cart"
                      aria-hidden="true"
                    >
                      <circle cx={9} cy={21} r={1} />
                      <circle cx={20} cy={21} r={1} />
                      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                    </svg>
                    Products
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-users"
                      aria-hidden="true"
                    >
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx={9} cy={7} r={4} />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                    Customers
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-bar-chart-2"
                      aria-hidden="true"
                    >
                      <line x1={18} y1={20} x2={18} y2={10} />
                      <line x1={12} y1={20} x2={12} y2={4} />
                      <line x1={6} y1={20} x2={6} y2={14} />
                    </svg>
                    Reports
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-layers"
                      aria-hidden="true"
                    >
                      <polygon points="12 2 2 7 12 12 22 7 12 2" />
                      <polyline points="2 17 12 22 22 17" />
                      <polyline points="2 12 12 17 22 12" />
                    </svg>
                    Integrations
                  </a>
                </li>
              </ul>
              <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                <span>Saved reports</span>
                <a className="link-secondary" href="#" aria-label="Add a new report">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-plus-circle"
                    aria-hidden="true"
                  >
                    <circle cx={12} cy={12} r={10} />
                    <line x1={12} y1={8} x2={12} y2={16} />
                    <line x1={8} y1={12} x2={16} y2={12} />
                  </svg>
                </a>
              </h6>
              <ul className="nav flex-column mb-2">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-file-text"
                      aria-hidden="true"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1={16} y1={13} x2={8} y2={13} />
                      <line x1={16} y1={17} x2={8} y2={17} />
                      <polyline points="10 9 9 9 8 9" />
                    </svg>
                    Current month
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-file-text"
                      aria-hidden="true"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1={16} y1={13} x2={8} y2={13} />
                      <line x1={16} y1={17} x2={8} y2={17} />
                      <polyline points="10 9 9 9 8 9" />
                    </svg>
                    Last quarter
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-file-text"
                      aria-hidden="true"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1={16} y1={13} x2={8} y2={13} />
                      <line x1={16} y1={17} x2={8} y2={17} />
                      <polyline points="10 9 9 9 8 9" />
                    </svg>
                    Social engagement
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-file-text"
                      aria-hidden="true"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1={16} y1={13} x2={8} y2={13} />
                      <line x1={16} y1={17} x2={8} y2={17} />
                      <polyline points="10 9 9 9 8 9" />
                    </svg>
                    Year-end sale
                  </a>
                </li>
              </ul>
            </div>
          </nav>
    )
}

export default Navbar;