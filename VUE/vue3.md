0. #### vue2中各文件的作用

index.js  组织和导出整个Vuex模块  export

main.js  整个应用程序的入口，初始化和启动vue。创建store实例并挂载到vue实例；注册vuex插件

1. #### Vue3新的特性：快，少

   1. Composition API（组合API）
      setup配置
      ref与reactive
      watch与watchEffect
      provide与 inject
   2. 新的内置组件
      Fragment
      Teleport
      Suspense
   3. 其他改变
      新的生命周期钩子
      data 选项应始终被声明为一个函数
      移除keyCode支持作为 v-on 的修饰符


2. ##  vite创建工程

```vite
npm init vite-app <项目名称>
		//需要自己安装node_modules
cd <项目名称>
npm i
		// 运行
npm run dev 
```

## 对比**vue-cli创建**

（基于webpack构建应用程序，生产模式下使用，**更稳**）: vite启动**更快**，开发模式下使用，基于Rollup的插件机制方便扩展项目

```js
vue create  <项目名称> 
cd <项目名称>
npm run serve  //启动开发服务器并运行程序
```

3. #### 根节点挂载 main.js

   vue3组件中可以没有根标签

```js
import { createApp } from 'vue'
import App from './App.vue'

//创建应用实例对象---app类似于vue2中vm,但app比vm更轻
const app = createApp(App);
// console.log(app);
//挂载
app.mount('#app');

//可以合并为
//createApp(App).amount('#app')

```

对比vue2

```js
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
    el:'#app',
    render: h => h(App),
})
```

4. #### 组合式API

   vue2中的data,methods，computed,等等都在

   ```js
setup( ){ 
       return{ name,sayHelo} 
   }
   // 返回对象 或者 渲染函数(引入vue中的{h}，对应模板字符串使用)
   import {h} from 'vue'
   return ()=>h('h1','你好')
   ```

5. #### ref 函数 响应式数据     .value调用

```js
<!--Vue3的setup函数配置-->
<template>
  <h1>个人信息</h1>
  <h2>姓名：{{ username }}</h2>
  <h2>性别：{{ sex }}</h2>
  <button @click="changeInfo">修改信息</button>
</template>
<script>
  // 导入reactive
  import {ref} from "vue";

  export default {
    name: 'App',
    setup() {
      // 定义变量,使用ref函数响应式声明
      let username = ref('Shier')
      let sex = ref('男')

      // 定义修改信息函数
      function changeInfo() {
        username.value = 'shier1122'
        sex.value = '女'
      }

      // 返回值，上面定义的变量、函数、方法
      return {
        username,
        sex,
        changeInfo,
        job
      }
    }
  }
</script>

```

接收数据：基本类型（依靠Obj.defineproperty的get,set完成）

以及对象类型(求助reactive的proxy代理实例对象)

5. 1. ####  reactive

6. 处理**<u>对象以及数组</u>**类型的数据更方便

7. ```js
   let 代理对象 = reactive(源对象)
   //返回一个代理对象，proxy实例对象，
   ```

   3.Proxy代理可以进行深层次的响应式数据（可以劫持Obj.property对象属性中的前腰属性或数组进行更新）

```js
<!--Vue3的reactive-->
<template>
  <h1>个人信息</h1>
  <h2>姓名：{{ person.username }}</h2>
  <h2>性别：{{ person.sex }}</h2>
  <h2 v-show="person.age">年龄：{{ person.age }}</h2>
  <h2 v-show="person.type">工作：{{ person.type }}</h2>
  <h2>薪水：{{ person.salary }}</h2>
  <button @click="changeInfo">修改信息</button>
  <button @click="deleteInfo">删除工作</button>
  <button @click="addAge">添加年龄</button>
</template>
<script>
  // 导入reactive
  import {reactive} from "vue";

  export default {
    name: 'App',
    setup() {
      // 使用reactive创建对象数据类型
      let person = reactive({
        username: 'Shier',
        sex: '男',
        type: '全栈工程师',
        salary: '40k',
        // 使用reactive创建数组数据类型
        hobby: reactive(['学习', '跑步', '编程'])
      })

      // 定义修改信息函数
      function changeInfo() {
        person.username = 'shier22'
        person.sex = '女'
        // reactive修改对象数据
        person.salary = '45k'
        person.type = '产品经理'
        // reactive 修改数组数据：通过索引值修改
        person.hobby[0] = '打王者'
      }
      // Vue3中增删改查
      function addAge() {
        person.age = '18'
      }
      function deleteInfo() {
       delete person.type
      }

      // 返回值，上面定义的变量、函数、方法
      return {
        person,
        changeInfo,
        addAge,
        deleteInfo
      }
    }
  }
</script>

```

6. #### vue2与3响应式对比

7. 对于数组方法：vue2需要调用this.$set(属性名，属性值，修改值)

或者引入	vue 使用 Vue.set( ) 进行更改

直接通过下标修改，增删改界面不会更新

2. 3中ref同样Obj.defineProperty()的get与set，需要调用  .value
3. 3中reactive通过使用***<u>proxy</u>***实现响应式，通过Reflect操作源对象内部数据

```js
<!--Vue3的reactive-->
<template>
  <h1>个人信息</h1>
  <h2>姓名：{{ person.username }}</h2>
  <h2>性别：{{ person.sex }}</h2>
  <h2 v-show="person.age">年龄：{{ person.age }}</h2>
  <h2 v-show="person.type">工作：{{ person.type }}</h2>
  <h2>薪水：{{ person.salary }}</h2>
  <button @click="changeInfo">修改信息</button>
  <button @click="deleteInfo">删除工作</button>
  <button @click="addAge">添加年龄</button>
</template>
<script>
  // 导入reactive
  import {reactive} from "vue";

  export default {
    name: 'App',
    setup() {
      // 使用reactive创建对象数据类型
      let person = reactive({
        username: 'Shier',
        sex: '男',
        type: '全栈工程师',
        salary: '40k',
        // 使用reactive创建数组数据类型
        hobby: reactive(['学习', '跑步', '编程'])
      })

      // 定义修改信息函数
      function changeInfo() {
        person.username = 'shier22'
        person.sex = '女'
        // reactive修改对象数据
        person.salary = '45k'
        person.type = '产品经理'
        // reactive 修改数组数据：通过索引值修改
        person.hobby[0] = '打王者'
      }
      // Vue3中增删改查
      function addAge() {
        person.age = '18'
      }
      function deleteInfo() {
       delete person.type
      }

      // 返回值，上面定义的变量、函数、方法
      return {
        person,
        changeInfo,
        addAge,
        deleteInfo
      }
    }
  }
</script>

```

































