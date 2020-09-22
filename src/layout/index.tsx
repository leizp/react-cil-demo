import { Button, Layout } from 'antd'
import { inject, observer } from 'mobx-react'
import React, { Component } from 'react'
import DocumentTitle from 'react-document-title'
import { RouteComponentProps } from 'react-router-dom'
import AppStore from '@/store/AppStore'
import UserStore from '@/store/UserStore'
import '@/layout/layout.module.less'

interface IBasicLayoutProps extends RouteComponentProps {
  title?: string
  loading?: boolean
  appStore?: AppStore
  userStore?: UserStore
}

const { Header, Content } = Layout

/**
 * 基础布局组件
 */

@inject('appStore', 'userStore')
@observer
export default class BasicLayout extends Component<IBasicLayoutProps> {
  // eslint-disable-next-line
  constructor(props: IBasicLayoutProps) {
    super(props)
  }

  render() {
    const { userStore } = this.props
    const layout = (
      <DocumentTitle title="系统">
        <Layout>
          <Header className="header">
            <div>菜单</div>
            <Button
              onClick={() => {
                // this.props.history.push('/login');
                userStore?.loginOutAction()
              }}
            >
              退出
            </Button>
          </Header>
          <Content className="cont" id="mainContainer">
            { this.props.children }
          </Content>
        </Layout>
      </DocumentTitle>
    )
    return layout
  }
}
