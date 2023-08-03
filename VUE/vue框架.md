可以用来创建： 

1. 自定义组件，my-component

```js
Vue.component('my-component', {
 	 el:"#app",
        data() {
          return {
            message: "Hello, Vue!",
          };
        },
        beforeCreate: function () {
          console.log(
            "111自定义组件的beforeCreate实例初始化之后、数据观测之前调用 hook"
          );
        },
        created: function () {
          console.log("222自定义组件的created在组件实例创建完成后调用 hook");
        },
        beforeMount: function () {
          console.log(
            "333自定义组件的beforeMount挂载之前调用。在这个阶段，模板编译已完成，但尚未将渲染结果挂载到页面上。 hook"
          );
        },

        mounted: function () {
          console.log(
            "444自定义组件的mounted挂载完成后调用。在这个阶段，组件已经被渲染到页面上，并且可以访问到 DOM 元素。 hook"
          );
        },

        beforeUpdate: function () {
          console.log(
            "555自定义组件的beforeUpdate数据更新之前调用。在这个阶段，组件的数据发生改变，但尚未重新渲染。 hook"
          );
        },
        updated: function () {
          console.log(
            "666自定义组件的数据更新完成后调用。在这个阶段，组件的数据已经更新，DOM 也已经重新渲染。 hook"
          );
        },
        beforeDestroy: function () {
          console.log(
            "777自定义组件的实例销毁之前调用。在这个阶段，组件实例仍然可用，可以执行清理操作。 hook"
          );
        },
        destroyed: function () {
          console.log(
            "888自定义组件的实例销毁后调用。在这个阶段，组件实例被销毁，无法再访问到。 hook"
          );
        },
      });

```

编译结果

```
111自定义组件的beforeCreate实例初始化之后、数据观测之前调用 hook
333自定义组件的beforeMount挂载之前调用。在这个阶段，模板编译已完成，但尚未将渲染结果挂载到页面上。 hook
333自定义组件的beforeMount挂载之前调用。在这个阶段，模板编译已完成，但尚未将渲染结果挂载到页面上。 hook
444自定义组件的mounted挂载完成后调用。在这个阶段，组件已经被渲染到页面上，并且可以访问到 DOM 元素。 hook
```

自定义组件被作为根节点实例的子组件来使用，所以在父组件的 `mounted` 钩子函数中，自定义组件的生命周期钩子函数会再次被触发。



2. 根实例
3. 混入 （Mixins）。在多个组件之间共享公共功能的方式。

```js
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Vue Mixins Example</title>
  <script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.min.js"></script>
</head>
<body>
  <div id="app">
    <h1>{{ message }}</h1>
  </div>

  <script>
    var mixin = {
      data: function() {
        return {
          message: 'Hello from mixin!'
        };
      },
      created: function() {
        console.log('Mixin created hook');
      }
    };

    new Vue({
      el: '#app',
      mixins: [mixin],
      created: function() {
        console.log('Component created hook');
      }
    });
  </script>
</body>
</html>

```

4. 路由 vue router

```js
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Vue Router Example</title>
  <script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.min.js"></script>
  <script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>
</head>
<body>
  <div id="app">
    <h1>{{ message }}</h1>
    <router-link to="/about">Go to About</router-link>
    <router-view></router-view>
  </div>

  <script>
    // 定义组件
    var Home = { template: '<div>Home Component</div>' };
    var About = { template: '<div>About Component</div>' };

    // 创建路由实例
    var router = new VueRouter({
      routes: [
        {
          path: '/',
          component: Home
        },
        {
          path: '/about',
          component: About
        }
      ]
    });

    //  路由挂载在根实例
    new Vue({
      el: '#app',
      router: router,
      data: function() {
        return {
          message: 'Hello from Vue Router!'
        };
      },
      created: function() {
        console.log('Component created hook');
      }
    });
  </script>
</body>
</html>

```

5. vuex状态管理

