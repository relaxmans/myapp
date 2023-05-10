/*
 * @Author       : haocanweng@chatlabs.com
 * @Date         : 2022-10-25 18:10:26
 * @LastEditors  : haocanweng@chatlabs.com
 * @LastEditTime : 2023-05-10 17:31:34
 * @FilePath     : /myapp/components/List/index.tsx
 */
import React, { FC } from "react";
import { Button } from "antd";
import CSSModules from "react-css-modules";

import styles from "./index.module.scss";

const List: FC = () => {
  return (
    <div styleName="list" className="flex items-center">
      <div styleName="list__left" className="align-middle">
        <Button type="primary">Primary Button</Button>
      </div>
      <div styleName="list__right">456</div>
      <h1 className="flex-[2_2_0%]">Hello world!</h1>
    </div>
  );
};

export default CSSModules(List, styles);
