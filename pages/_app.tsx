/*
 * @Author       : haocanweng@chatlabs.com
 * @Date         : 2022-09-20 16:46:36
 * @LastEditors  : haocanweng@chatlabs.com
 * @LastEditTime : 2023-05-10 10:56:59
 * @FilePath     : /my-app/pages/_app.tsx
 */
import "@/styles/globals.scss";
// import "antd/dist/reset.css";
import { SWRConfig } from "swr";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        revalidateOnFocus: false,
      }}
    >
      <Component {...pageProps} />
    </SWRConfig>
  );
}

export default MyApp;
