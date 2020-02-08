import React, { Component } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Provider } from 'react-redux';
import store from './store'
import Content from './Content';

class App extends Component {

  render() {

    return (

      <Provider store={store}>
        <Content />
      </Provider>
    )
  }
}

export default App;