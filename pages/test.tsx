/*
 * @Author       : haocanweng@chatlabs.com
 * @Date         : 2022-10-13 16:57:39
 * @LastEditors  : haocanweng@chatlabs.com
 * @LastEditTime : 2023-05-10 11:17:52
 * @FilePath     : /my-app/pages/test.tsx
 */
import React from "react";
import List from "@/components/List";

const Test = () => {
  return (
    <>
      <div className="w-[14px]">Test</div>
      <List />
      <div className="w-[200px] h-[200px] bg-red-800/60 hover:bg-black/95 text-white transition duration-[1500ms]">
        Text
      </div>
    </>
  );
};

export default Test;
