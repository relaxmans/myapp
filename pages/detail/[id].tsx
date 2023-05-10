/*
 * @Author       : haocanweng@chatlabs.com
 * @Date         : 2022-10-14 17:52:12
 * @LastEditors  : haocanweng@chatlabs.com
 * @LastEditTime : 2022-12-15 13:37:45
 * @FilePath     : /my-app/pages/detail/[id].tsx
 */
import { GetServerSideProps, NextPage } from "next";
import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
// import CSSModules from "react-css-modules";
import useProduct from "@/hooks/useProduct";
import classnames from "classnames";

import styles from "./index.module.scss";

const Detail: NextPage = (props: any) => {
  const { data } = props;
  const router = useRouter();
  const { id } = router.query;

  console.log("props ===== ", data, props, router.query);

  const { data: data1, isLoading, isError } = useProduct({ shouldFetch: true });
  console.log("data1 ===== ", data1, isLoading, isError);

  return (
    <>
      <p
        className={classnames(
          styles.title,
          "font-bold",
          "w-32",
          "text-center",
          "btn-blue",
          "cursor-pointer"
        )}
      >
        测试专用
      </p>
      {data?.product_list?.map((item: any) => {
        return (
          <div key={item.spu_id}>
            <div>
              <Image
                src={item.spu_main_image}
                alt={item.brand_name}
                width="200"
                height="200"
              />
              code： {item.spu_code}
            </div>
          </div>
        );
      })}
    </>
  );
};

// This gets called on every request
export const getServerSideProps = async () => {
  // Fetch data from external API
  let respond = {};
  let respond1 = {};
  const res = await fetch(
    `https://clx-be-staging.chatlabs.net/api/product/1555055329673077762`,
    {
      method: "get",
    }
  );
  if (res.status === 200) {
    const resp = await res.json();
    const { data } = resp;
    respond = data;
  }
  console.log("res ===== ", res);

  const X_ORG_ID = "1443507816921366529";
  const res1 = await fetch(
    `https://${X_ORG_ID}.open-api.sc.sfgcrproducts.cn/storefront/v1/products`,
    {
      method: "get",
      headers: {
        "x-channel": "2",
        "x-org-id": X_ORG_ID,
        "x-storefront-id": "1585445065091660290",
        Referer: "https://clc-graff-dev.chatlabs.net/",
      },
    }
  );

  if (res1.status === 200) {
    const resp = await res1.json();
    respond1 = resp;
  }

  // Pass data to the page via props
  return { props: { data: { ...respond, respond1 } } };
};

// export default CSSModules(Detail, styles);
export default Detail;
