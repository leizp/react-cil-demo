import Home from '@/pages/home'
import Login from '@/pages/login'

export interface IRouterProps {
  name?: string // 名称
  path: string // 路径
  component: any // 对应的组件
  needLogin: boolean // 是否需要登录
}

const routers: IRouterProps[] = [
  { name: '登录', path: '/login', component: Login, needLogin: false },
  { name: '首页', path: '/', component: Home, needLogin: true }
]

export default routers
