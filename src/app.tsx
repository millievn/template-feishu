import Taro, { Component } from '@tarojs/taro'
import 'taro-ui/dist/style/index.scss'

import Index from './pages/index'
import './app.scss'

class App extends Component {
  config: Taro.Config = {
    pages: ['pages/index/index'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'feishu',
      navigationBarTextStyle: 'black',
    },
  }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return <Index />
  }
}

Taro.render(<App />, document.getElementById('app'))
