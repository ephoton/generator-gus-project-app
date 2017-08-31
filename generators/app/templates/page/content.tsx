import { Button, DatePicker } from 'antd';
import * as React from 'react';

import {
  Router,
  Route,
  Link
} from 'react-router-dom';

import { createBrowserHistory, createMemoryHistory } from 'history';

export interface IPropsInfo {
  title: string;
}

export interface IStateInfo {
  size: string;
}

export class Content extends React.Component<IPropsInfo, IStateInfo> {
  state: IStateInfo;
  constructor(props: IPropsInfo) {
    super(props);

    this.state = {
      size: 'test-size'
    };
  }

  handleDateChange(e: any) {
    // this.setState({ size: e.target.value });
    console.log('handle bandleChange: ', e);
  }

  handleBtnClick(event: Event) {
    console.log('btn click.');

    this.setState({
      size: 'click'
    });
  }

  render() {
    const { title } = this.props;
    const { size } = this.state;
    const history = process.env.browser === 'app-server' ? createMemoryHistory() : createBrowserHistory();
    // const Router = BrowserRouter;

    console.log(`Progress env: ${ JSON.stringify(process.env)} _______\n ${JSON.stringify(process.env.browser) }`);

    return (
      <Router history={ history }>
      <div>
        <div>
          <h1>title - :{ title }</h1>
          <p>size: { size }</p>
          <Button onClick={ this.handleBtnClick.bind(this) } >搜索</Button>
          <DatePicker onChange={ this.handleDateChange.bind(this) } />
        </div>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
        </ul>

        <hr/>

        <Route exact={true} path='/' component={Home}/>
        <Route path='/about' component={About}/>
      </div>
    </Router>
    );
  }
}

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

