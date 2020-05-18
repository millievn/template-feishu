import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'

import Feishu from '../../utils/feishu'

import './index.scss'

export default function Index() {
  const login = () => {
    Feishu.getUserInfo()
  }

  return (
    <View className='index'>
      <view className='slogan'>
        <Text>飞书模板项目</Text>
      </view>
      <View className='btns'>
        <AtButton type='primary' className='btn' onClick={login} circle>
          登录
        </AtButton>
      </View>
    </View>
  )
}

Index.config = {
  navigationBarTitleText: '首页',
} as Taro.Config
