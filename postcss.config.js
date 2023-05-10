module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    "postcss-pxtorem": {
      rootValue: 14, // 1rem = 22px, 设计稿中html元素字体大小/rootValue=转换后rem值
      unitPrecision: 5, //转换后保留的小数点位数
      propList: ["*"], //需要转换的属性
      mediaQuery: false, // 是否转换 @media 条件中的px（只影响条件，不影响代码块）
      minPixelValue: 2, // 1px 不转换，大于等于2px的转换
      exclude: "/node_modules/i",
    },
    "postcss-flexbugs-fixes": {},
    "postcss-preset-env": {
      autoprefixer: {
        flexbox: "no-2009",
      },
      stage: 3,
    },
  },
};
