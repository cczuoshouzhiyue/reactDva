import * as React from 'react';
import { Link,withRouter } from  'dva/router';
import { menuList } from '../../common/menu';
import './index.scss';

@withRouter
class Header extends React.Component {
  state = {
    currentRouter: ''
  };
  constructor (props) {
    super(props);
  }
  componentWillMount() {
    const { location } = this.props;
    if (location && location.pathname && location.pathname === '/') {
      this.setState({
        currentRouter: menuList[0].path,
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    const { location } = nextProps;
    this.setState({
      currentRouter: location.pathname,
    });
  }

  render() {
    const { currentRouter } = this.state;
    const menuNode = () => menuList.map(item => <li key={item.path}><Link to={item.path} className={currentRouter === item.path ? 'active' : ''}>{item.name}</Link></li>);
    return (
      <header>
        <div>
          <div className="brand">
            <img src="https://static2.cnodejs.org/public/images/cnodejs_light.svg" alt="" />
          </div>
          <div className="search">
            <a>
              <input type="text" />
            </a>
          </div>
          <div className="menu">
            <ul>
              { menuNode() }
              <li>退出</li>
            </ul>
          </div>
        </div>

      </header>
    );
  }
}
export default Header;