/**
 *
 */
// import { Button } from 'antd';
import * as React from 'react';
import * as ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// import { Home } from './page';


// tslint:disable-next-line
const unescapeHtml = require('unescape-html');
// tslint:disable-next-line
const Home = require('./page');

declare const window: {
  __data__: any;
  console: any
};


function init() {
  const container = document.getElementById('content');
  let data = unescapeHtml(window.__data__);
  data = JSON.parse(data);

  ReactDom.render(
      <BrowserRouter>
        <Home data={data} />
      </BrowserRouter>,
    container);
}

init();
