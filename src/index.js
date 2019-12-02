import React from 'react';
import ReactDOM from 'react-dom';
import './components/css/style.min.css'
import {BrowserRouter} from 'react-router-dom'
import 'swiper/css/swiper.min.css'
import './mock/mock'
import {Provider} from 'react-redux'
import {store} from './Store/Store'

import App from './components/App';
import 'antd-mobile/dist/antd-mobile.css'

ReactDOM.render(<Provider store={store}>
<BrowserRouter><App /></BrowserRouter>
</Provider>

, document.getElementById('root'));
