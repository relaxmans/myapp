/*
 * @Author       : haocanweng@chatlabs.com
 * @Date         : 2022-10-25 18:10:26
 * @LastEditors  : haocanweng@chatlabs.com
 * @LastEditTime : 2023-05-10 13:46:56
 * @FilePath     : /my-app/components/List/index.tsx
 */
import React, { FC } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Button } from "antd";
import CSSModules from "react-css-modules";

import styles from "./index.module.scss";

const List: FC = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div styleName="list" className="flex items-center">
        <div styleName="list__left" className="align-middle">
          <Button type="primary">Primary Button</Button>
        </div>
        <div styleName="list__right">456</div>
        <h1 className="flex-[2_2_0%]">Hello world!</h1>
      </div>
    </DndProvider>
  );
};

export default CSSModules(List, styles);
