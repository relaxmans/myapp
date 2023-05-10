/*
 * @Author       : haocanweng@chatlabs.com
 * @Date         : 2022-10-31 16:45:54
 * @LastEditors  : haocanweng@chatlabs.com
 * @LastEditTime : 2022-12-08 14:03:20
 * @FilePath     : /my-app/global.d.ts
 */
declare module "*.css";
declare module "*.less";
declare module "*.png";
declare module "*.svg" {
  export function ReactComponent(
    props: React.SVGProps<SVGSVGElement>
  ): React.ReactElement;
  const url: string;
  export default url;
}

declare type Key = string | number;
