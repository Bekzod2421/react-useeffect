import { Link, NavLink } from 'react-router-dom'
const Header = () => {

	return (
		<header>
			<nav className="navbar navbar-expand-lg bg-light">
				<NavLink className="navbar-brand" to="/">Logo</NavLink>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to="/about">About</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to="/news">News</NavLink>
						</li>
					</ul>
					<form className="d-flex" role="search">
						<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
						<button className="btn btn-outline-success" type="submit">Search</button>
					</form>
				</div>
			</nav>
		</header>
	)
}

export default Header;