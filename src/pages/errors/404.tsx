import React, { ReactElement } from 'react';
import { RouteComponentProps } from 'react-router-dom';

type Props = RouteComponentProps;

// 登录系统进入的首页
export default function Error404({ history }: Props): ReactElement {
  return (
    <>
      <div style={{ textAlign: 'right' }}>404 错误页面</div>
    </>
  );
}
