/**
 *
 */
import * as React from 'react';
import { Content } from './content';

export interface IPropsInfo {
  data: {
    userId: string;
    name: string;
  };
}

export interface IStateInfo {
  size: string;
}

export class Home extends React.Component<IPropsInfo, IStateInfo> {
  state: IStateInfo;
  constructor(props: IPropsInfo) {
    super(props);

    this.state = {
      size: 'test-size'
    };
  }

  test() {
    console.log('test click');
  }

  render() {
    const { data } = this.props;

    console.log('t-data: ', data);

    return (
      <div>
        <p>name: { data.name }</p>
        <Content title={ data.userId } />
      </div>
    );
  }
}

module.exports = Home;
