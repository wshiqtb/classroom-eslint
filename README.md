# 为什么会有ESlint？

曾经有个赏金猎人 A 的眼睛被另外一个赏金猎人B 弄瞎了，B 想赔偿 A 一个金币，A 却认为应该赔偿两个金币，于是他们发生了争吵，于是当地治安官介入。治安官怎么解决这个问题呢？"诶，这个 so easy 啊。这汉谟拉比法典上不是写的清清楚楚么，'以眼还眼，以牙还牙'”。于是 B 的眼睛也瞎了，虽然最后谁也没有得到自己想要的，但总算，问题解决了。

这个故事告诉我们，要解决问题，就要有规矩，把规矩写到文件里，于是ESlint就诞生了。

当工作中只有你一个人的时候，什么问题都不是问题，但是当你是团队中的一员时，就会有各种问题。





# ESlint是什么？

由<mark>尼古拉斯·泽卡斯</mark>，在2013年创建，是一个开源的<mark> JavaScript</mark>编写的运行在<mark>node</mark>环境的代码校验和修复工具，使用<mark> [Espree](https://github.com/eslint/espree) </mark> 将 JavaScript 代码解析成抽象语法树 (AST)，然后通过 <mark>AST</mark> 来分析我们代码，从而给予我们代码问题提示。

* javascript编写
* 运行在node环境
* 代码质量问题
* 代码风格问题



# ESlint怎么用？

终于有一天，你在打dota的时候遇到了一位前端队友，你抱怨了自己遇到的问题，对方友好的给你推荐了ESlint，从此你发现了新大陆。然后小哥哥拉上Lucy和Tony一起开了个会，在你苦口婆心的劝说下，大家终于同意使用2个空格作为缩进，并把它作为第一个ESlint的规则，你们迈进了规范化的学堂。



## 安装ESlint

由于校验能力是ESlint提供，ESlint是一个javascript编写的node包，所以我们直接安装这个包：

```bash
# 安装
yarn global eslint
# 或者
npm install eslint -g

# 使用
eslint dir   #校验
eslint dir --fix #修复

```



## 编写ESlint配置

情人眼里出西施，一千个人眼里有一千个哈姆雷特。每个团队都可能有更适合自己的校验规则，ESlint当然不会强人所难，其提供了丰富的配置功能，这意味着你可以关闭每一个规则而只运行基本语法验证，或混合和匹配 ESLint 默认绑定的规则和你的自定义规则。主要提供了两种配置方式：

1. **Configuration Files**：文件配置
2. **Configuration Comments**：注释配置（禁用文件、禁用行等）



## 文件配置

可以配置一个独立的 [`.eslintrc.*`](https://eslint.bootcss.com/docs/user-guide/configuring#configuration-file-formats) 文件，或者直接在 [`package.json`](https://docs.npmjs.com/files/package.json) 文件里的 `eslintConfig` 字段指定配置，ESLint 会查找和自动读取它们，再者，你可以在[命令行](https://eslint.bootcss.com/docs/user-guide/command-line-interface)运行时指定一个任意的配置文件。



### 文件种类

* .eslintrc.js
* .eslintrc.yaml
* .eslintrc.yml
* .eslintrc.json
* .eslintrc
* package.json
* 命令行指定 `eslint -c、--config filepath`

这么多配置方式，我们先随便挑一个 `.eslintrc.js`，ok，编写我们的第一个规则，可是我需要配什么东西啊？？？



### 配置参数

* `rules` 启用的规则及其错误级别
* `root` 配置文件的检索方式
* `env` 指定脚本的运行环境。每种环境都有一组特定的预定义全局变量
* `globals` 脚本在执行期间访问的额外的全局变量
* `extends` 指定一个包含所有配置的扩展文件
* `plugins` 第三方插件，其可以提供自己的规则和扩展配置
* `overrides` 通过glob对文件进行更精细的配置控制
* `parserOptions` 解析器配置，针对es语法解析的配置
  * `ecmaVersion` es版本
  * `sourceType` es模块
* `processor` 处理器，可以在预处理中转换 JavaScript 代码，然后让 ESLint 检测 JavaScript 代码。
* `parser` 解析器，将代码解析为AST语法树。ESLint 默认使用[Espree](https://github.com/eslint/espree)作为其解析器

#### `rules`

配置eslint的校验规则，默认，我们能使用的规则，都是eslint内置的规则。[规则列表](https://eslint.bootcss.com/docs/rules/)

##### 参数类型

- **`Number`**:    `0` 关闭;	`1` 警告;	`2` 报错
- **`String`**:    `'off'`、`'warn'`、`'error'` 分别 对应 0、1、2
- **`Array`**:    [<Number、String>, <其它选项>]

```json
// .eslintrc.js
module.exports = {
  rules: {
    "indent": [1, 2],
    "eqeqeq": 2,
    "no-unused-vars": "error"
  }
}
```

##### 规则分类

* `Possible Errors`

  这些规则与 JavaScript 代码中可能的错误或逻辑错误有关。例如：[ no-dupe-keys](https://eslint.bootcss.com/docs/rules/no-dupe-keys)

* `Best Practices` 
  这些规则是关于最佳实践的，帮助你避免一些问题。例如：[eqeqeq](https://eslint.bootcss.com/docs/rules/eqeqeq)

* `Strict Mode`
  该规则与使用严格模式和严格模式指令有关。例如：[no-unused-vars](https://eslint.bootcss.com/docs/rules/no-unused-vars)

* `Stylistic Issues`
  这些规则是关于风格指南的，而且是非常主观的。例如：[semi](https://eslint.bootcss.com/docs/rules/semi)，[quotes](https://eslint.bootcss.com/docs/rules/quotes)

* `Node.js and CommonJS`
  这些规则是关于Node.js 或 在浏览器中使用CommonJS 的。

* `ECMAScript 6`
  这些规则只与 ES6 有关, 即通常所说的 ES2015。这里为什么只提了ES6，可能是ES6比较经典:joy:（迈向现代化的重大升级）
  例如：[no-var](https://eslint.bootcss.com/docs/rules/no-var)

> 总结为两大类：
>
> * 容易引起程序bug的。
>
> * 视觉上看着很难受的。



#### `root`

当我们执行校验命令的时候，ESLint 会在要检测的文件目录里寻找配置文件，紧接着是父级目录，一直到文件系统的根目录，如果都没有，会去找你的家目录配置文件（~/.eslintrc）

ESlint检索配置文件规则：

1. 当前目录寻找
2. 父级目录寻找，一直到文件系统的根目录
3. 如果①和②里都没有，则在家目录寻找

> 但是如果遇到了某一个配置文件中配置了 `root: true`, 则不再向上寻找。
>
> 其中①和②，不是或的关系，是并的关系。



#### `globals`

当访问当前源文件内未定义的变量时，[no-undef](https://eslint.bootcss.com/docs/rules/no-undef) 规则将发出警告。

* 全局变量未定义的告警是基于 [no-undef](https://eslint.bootcss.com/docs/rules/no-undef)  规则的。
* 配置方式有3种。`off` 禁用、`readonly` 可用只读、`writeable` 可用可写
* 由于历史原因，布尔值 `false` 和字符串值 `"readable"` 等价于 `"readonly"`。类似地，布尔值 `true` 和字符串值 `"writeable"` 等价于 `"writable"`。但是，不建议使用旧值。

```js
module.exports = {
  "globals": {
    "Promise": 'off',
    "$": 'readonly',
    "App": "writeable"
  }
}
```



#### `env`

一个环境定义了一组预定义的全局变量。重点：==browser==、==node==、==es6==。

- **`browser`** - 浏览器环境中的全局变量。
- **`node`** - Node.js 全局变量和 Node.js 作用域。
- `commonjs` - CommonJS 全局变量和 CommonJS 作用域 (用于 Browserify/WebPack 打包的只在浏览器中运行的代码)。
- `shared-node-browser` - Node.js 和 Browser 通用全局变量。
- **`es6`** - 启用除了 modules 以外的所有 ECMAScript 6 特性（该选项会自动设置 `ecmaVersion` 解析器选项为 6）。
- `worker` - Web Workers 全局变量。
- `amd` - 将 `require()` 和 `define()` 定义为像 [amd](https://github.com/amdjs/amdjs-api/wiki/AMD) 一样的全局变量。
- `mocha` - 添加所有的 Mocha 测试全局变量。
- `jasmine` - 添加所有的 Jasmine 版本 1.3 和 2.0 的测试全局变量。
- `jest` - Jest 全局变量。
- `phantomjs` - PhantomJS 全局变量。
- `protractor` - Protractor 全局变量。
- `qunit` - QUnit 全局变量。
- `jquery` - jQuery 全局变量。
- `prototypejs` - Prototype.js 全局变量。
- `shelljs` - ShellJS 全局变量。
- `meteor` - Meteor 全局变量。
- `mongo` - MongoDB 全局变量。
- `applescript` - AppleScript 全局变量。
- `nashorn` - Java 8 Nashorn 全局变量。
- `serviceworker` - Service Worker 全局变量。
- `atomtest` - Atom 测试全局变量。
- `embertest` - Ember 测试全局变量。
- `webextensions` - WebExtensions 全局变量。
- `greasemonkey` - GreaseMonkey 全局变量。
- ==来自`plugin`的导出==



#### `extends`

一个配置文件可以被基础配置中的已启用的规则继承。[配置](https://eslint.bootcss.com/docs/user-guide/configuring#extending-configuration-files)

属性值可以是：

- `String`:  字符串 (配置文件的路径、可共享配置的名称、`eslint:recommended` 或 `eslint:all`)
- `Array`：字符串数组，每个配置继承它前面的配置

1. 文件路径

   ```js
   module.exports = {
     extends: "./extends.js"
   }
   ```

2. `eslint:*`

   ```js
   module.exports = {
     extends: "eslint:recommended"
   }
   ```

3. 可共享配置
   [可共享的配置](https://eslint.bootcss.com/docs/developer-guide/shareable-configs) 是一个 npm 包，它输出一个配置对象。`extends` 属性值可以省略包名的前缀 `eslint-config-`。

   ```js
   module.exports = {
   	extends: ["airbnb", "plugin:vue/essential", "@vue/prettier"]
   }
   ```



#### `plugins`

[插件](https://eslint.bootcss.com/docs/developer-guide/working-with-plugins) 是一个 npm 包，通常输出规则。一些插件也可以输出一个或多个命名的 [配置](https://eslint.bootcss.com/docs/developer-guide/working-with-plugins#configs-in-plugins)。`plugins` [属性值](https://eslint.bootcss.com/docs/user-guide/configuring#configuring-plugins) 可以省略包名的前缀 `eslint-plugin-`。

使用`plugins`输出的`extends`， 属性值可以由以下组成：

- `plugin:`
- 包名 (省略了前缀，比如，`vue`)
- `/`
- 配置名称 (比如 `recommended`)

以 [eslint-plugin-vue](https://github.com/vuejs/eslint-plugin-vue/blob/master/lib/index.js) 为例

```
module.exports = {
  parserOptions: {
    "sourceType": 'module'
  },
  parser: require.resolve('vue-eslint-parser'),
  plugins: ['vue'],
  processor: 'vue/.vue',
  rules: {
    "vue/no-template-key": 2
  },
  extends: 'plugin:vue/recommended'
}
```



#### `overrides`

若要禁用一组文件的配置文件中的规则，请使用 `overrides` 和 `files`。例如:

```js
module.exports = {
  rules: {
    "semi": 2
  },
  overrides: [
    {
      files: ['other-*.js'],
      rules: {
        "semi": 0
      }
    }
  ]
}
```



#### `parserOptions`

ESLint 允许你指定你想要支持的 JavaScript 语言选项。默认情况下，ESLint 支持 ECMAScript 5 语法。你可以覆盖该设置，以启用对 ECMAScript 其它版本和 JSX 的支持。

```js
module.exports = {
  parserOptions: {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
        "jsx": true
    }
  }
}
```



# 开发一个plugin

* 遵循 eslint-plugin-xxx 或者 @scope/eslint-plugin-xxxx 命名规范
* 使用 `yeoman` 工具搭配 `generator-eslint` 模板来初始化项目。文档：[yeoman](https://yeoman.io/)、 [generator-eslint](https://www.npmjs.com/package/generator-eslint)

* 创建并导出规则、共享配置等



到此eslint自身的能力基本就讲完了，但是！我们开发过程中并没有这么麻烦，每次写完代码还要执行一次 eslint命令，这肯定是不行的。所以针对eslint就有了各种应用实践。





# 应用实践

指各应用框架、IDE对eslint能力的应用

## vscode-eslint

安装vscode的eslint扩展后，编码阶段，IDE就可以以波浪线的形式给我们实时提示报错的地方。

<img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/dda6f4f56db347eba53fc7ce99f15a06~tplv-k3u1fbpfcp-watermark.image" alt="image-20220331103836608" />

### 配置

vscode-eslint支持很多配置，一般我们不需要做修改，默认即可。[文档](https://github.com/microsoft/vscode-eslint#settings-options)

```json
{
	"eslint.enable": Boolean,	// 为工作区文件夹启用/禁用 ESLint。默认启用
 
  "eslint.probe": Array,	// ESLint 验证文件的语言类型。如果对探测语言的验证失败，则扩展程序会说静默。默认为["javascript", "javascriptreact", "typescript", "typescriptreact", "html", "vue", "markdown"]
  
  "eslint.validate": Array, // 和probe类型，废弃了。默认为["javascript", "javascriptreact"]
  
  "eslint.useESLintClass": Boolean,	// 是否使用 ESLint 类 API。和 eslint.options配套使用
  
  // 用于配置如何使用ESLint 类 API或CLIEngine API启动 ESLint 的选项。https://eslint.org/docs/developer-guide/nodejs-api#cliengine
  "eslint.options": {
    "cwd": String,	// 默认为process.cwd()。工作目录。这必须是绝对路径。
    "extensions": Array,		// 要校验的文件扩展
    "overrideConfig": Object,	// 正常的eslint的配置
    "overrideConfigFile": String,	// 指定一个配置文件。options.overrideConfig会merge此选项
    "useEslintrc": Boolean,	// 默认为true。如果false存在，ESLint 不会加载配置文件（.eslintrc.*文件）。只有构造函数选项的配置是有效的
    "fix": Boolean,	// 自动修复
  },
  
}
```

## vue-cli

通过集成 `@vue/cli-plugin-eslint` 实现在开发过程中，输入编译警告、页面上出现错误提示等。[@vue/cli-plugin-eslint 源码](https://github.com/vuejs/vue-cli/blob/dev/packages/%40vue/cli-plugin-eslint/index.js)



## git hooks

通过在git钩子中执行 `eslint ` 校验来阻断git的提交





# 课后习题

* 创建一个plugins
* 创建一个配置
* 创建一个规则
* 还能创建什么？





