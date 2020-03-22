// 此文件专门处理postcss插件
// 导出一个对象
module.exports = {
  // 所有的postcss插件
  plugins: {
    // 自动的给css样式加前缀的属性 display：flex => 自动加其他浏览器的前缀
    autoprefixer: {},
    'postcss-pxtorem': {
      // 基准值   rootValue 是转换px的基准值，参考设备iPhone6，设备宽度375px。
      rootValue: 37.5,
      // 包括哪些文件  所有文件都转化rem
      propList: ['*']
    }
  }
}
