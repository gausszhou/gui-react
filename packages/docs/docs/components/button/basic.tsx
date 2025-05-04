import React from 'react';
import { GButton } from '@gui-react/components';

const Example: React.FC = () => {
    return (
      <div className="example">
        <div>
          <GButton>默认按钮</GButton>
          <GButton type="primary">主要按钮</GButton>
          <GButton type="success">成功按钮</GButton>
          <GButton type="info">信息按钮</GButton>
          <GButton type="warning">警告按钮</GButton>
          <GButton type="danger">危险按钮</GButton>
          <br />
          <br />
          <GButton plain>朴素按钮</GButton>
          <GButton type="primary" plain>主要按钮</GButton>
          <GButton type="success" plain>成功按钮</GButton>
          <GButton type="info" plain>信息按钮</GButton>
          <GButton type="warning" plain>警告按钮</GButton>
          <GButton type="danger" plain>危险按钮</GButton>
          <br />
          <br />
          <GButton round>圆角按钮</GButton>
          <GButton type="primary" round>主要按钮</GButton>
          <GButton type="success" round>成功按钮</GButton>
          <GButton type="info" round>信息按钮</GButton>
          <GButton type="danger" round>危险按钮</GButton>
          <br />
          <br />
          <GButton circle icon="g-icon-upload"></GButton>
          <GButton type="primary" circle icon="g-icon-alarm"></GButton>
          <GButton type="success" circle icon="g-icon-arrowdown"></GButton>
          <GButton type="info" circle icon="g-icon-arrowleft"></GButton>
          <GButton type="danger" circle icon="g-icon-arrowright"></GButton>
        </div>
      </div>
    );
  };
  
  export default Example;