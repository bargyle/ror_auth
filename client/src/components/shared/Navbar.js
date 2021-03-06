import { AuthConsumer } from '../../providers/AuthProvider';
import { Menu } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
const Navbar = ({ location, user, handleLogout, history }) => {
  const rightNavItem = () => {
    if (user) {
      return (
        <Menu.Menu position='right'>
          <Link to='/tacos'>
            <Menu.Item
              name='tacos'
              id='tacos'
              active={location.pathname === '/tacos'}
            />
          </Link>
          <Menu.Item
            name='logout'
            onClick={() => handleLogout(history)}
          />
        </Menu.Menu>
      )
    } else {
      return (
        <Menu.Menu position='right'>
          <Link to='/login'>
            <Menu.Item
              name='login'
              id='login'
              active={location.pathname === '/login'}
            />
          </Link>
          <Link to='/register'>
            <Menu.Item
              name='register'
              id='register'
              active={location.pathname === '/register'}
            />
          </Link>
        </Menu.Menu>
      )
    }
  }
  return(
    <>
      <Menu pointing secondary>
        <Link to='/'>
          <Menu.Item
            name='home'
            id='home'
            active={location.pathname === '/'}
          />
        </Link>
        { rightNavItem() }
      </Menu>
    </>
  )
}
const ConnectedNavbar = (props) => (
  <AuthConsumer>
    { auth =>
      <Navbar {...props} {...auth} />
    }
  </AuthConsumer>
)
export default withRouter(ConnectedNavbar);