module.exports = {
  meta: {
    type: 'suggestion',
    docs: {
      description: '规则描述',
      category: 'Best Practices',
      recommanded: true,  //是否推荐
      url: 'https://www.baidu.com'
    },
    fixable: 'code',
    schema: [],
    deprecated: false,
    replacedBy: []
  },
  create:function(context){
    const sourceCode = context.getSourceCode()
    if(sourceCode.text.match(/张三/)){
      context.report({
        node: sourceCode.ast,
        message: "不能带有张三关键词",
      });
    }
    return {}
  }
}