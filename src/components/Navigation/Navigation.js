import "./Navigation.css";

const Navigation = ({onRouteChange, isSignedIn}) => {

		if (isSignedIn) {
			return (
				<nav style={{display: 'flex', justifyContent: 'flex-end'}}>
					<p onClick={() => onRouteChange('signout')}className='f3 link dim   pa3 pointer button'>Sign Out</p>
				</nav>
				);
		} else {
			return (
			<nav style={{display: 'flex', justifyContent: 'flex-end'}}>
				<p onClick={() => onRouteChange('signin')}className='button f3 link dim   pa3 pointer button'>Sign In</p>
				<p onClick={() => onRouteChange('register')}className='f3 link dim   pa3 pointer button'>Register</p>
			</nav>
			);
		}
}

export default Navigation;