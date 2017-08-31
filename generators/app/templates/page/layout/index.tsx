import * as React from 'react';

export interface IPropsInfo {
  title: string;
}

export interface IStateInfo {
}

export default class Layout extends React.Component<IPropsInfo, IStateInfo> {
  state: IStateInfo;
  constructor(props: IPropsInfo) {
    super(props);

    this.state = {
      size: 'test-size'
    };
  }

  handleSizeChange = (e: any) => {
    this.setState({ size: e.target.value });
  }

  render() {
    const { title } = this.props;

    return (
      <html>
        <head>
          <title>{ title }</title>
          <link rel='stylesheet' href='antd/dist/antd.css' />
          <link rel='stylesheet' href='/css/desktop.css' />
        </head>
        <body>
          {this.props.children}

          <script src='bundle.js' />
        </body>
      </html>
    );
  }
}

module.exports = Layout;
