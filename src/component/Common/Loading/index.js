import React from 'react';
import { Spin } from 'antd';
import './index.less';
export function Loading (props) {
  if (!props.loading) {
    return null;
  }
  return (
    <div className='loading'>
      <Spin />
    </div>
  );
}
