## 高度坍塌

1. 首先纠正我之前的误解，BFC并不是高度坍塌，**BFC是高度坍塌的一种解决办法，**

2. 高度坍塌：父元素高度无法正确包裹子元素，导致父元素高度为0或者无法撑开
3. 原因：**子元素有浮动或绝对定位**脱离正常文档流，不对父元素产生影响，父元素无正确计算包含子元素的高度；内联块元素的空白节点：当**使用行内块**时，HTML 中的空白节点（空格或换行符）会影响元素之间的间距，导致父元素的高度增加。可以通过移除或合并空白节点来避免高度坍塌；**父元素有百分比高度且没有明确高度**；**父元素使用额外的清除浮动clearfix**等
4. 可以使用 BFC 来创建新的块级格式化上下文。BFC 会改变元素的布局规则，并且在某些情况下可以解决高度坍塌问题。例如，给父元素添加 `overflow: hidden;` 或 `overflow: auto;` 属性，这会触发创建 BFC，从而使父元素能够正确包裹其子元素。
5. 解决方法：清除浮动，clearfix,BFC

## BFC全称：块级格式化上下文

1. 作用：解决高度坍塌

2. BFC，在 CSS 中的一种布局机制，用于规定块级元素如何进行尺寸计算、定位与排列。

3. 创建：

   根元素(HTML元素）是一个BFC

   浮动( float)的元素会创建一个BFC。

   。绝对定位( position: absolute/fixed )的元素会创建一个BFC。
   。块级容器( display: inline-block/table-cell/table-caption; overflow: hidden/scroll/auto)也会创建一个BFC。
   overflow: hidden .  overflow: auto。  overflow: scroll(非默认值）等设置为除visible以外的值会创建一个BFC。

4. 块级元素，垂直方向排列；容器独立，内部盒子不影响外部元素；属于同一个BFC的两个盒子，外边距 margin 会发生重叠，取最大外边距；

5. 计算BFC高度，浮动元素也参与

6. 使用场景1

#### 父级元素没有高度时，子级元素浮动会使父级元素高度塌陷的问题


```html
    body {
            margin: 0;
            padding: 0;
    }
    .continer{
            width: 900px;
            background: black;//父级没有高度
            overflow: hidden;
		//不设置会导致高度坍塌，这里用了BFC
     }
    .box1{
        height: 300px;
        width: 300px;
        background: red;
        float: left;
    }

    .box2{
        height: 300px;
        width: 300px;
        background: blue;
        float: left;
    }
</style>
    <div class="continer">
        <div class="box1"></div>
        <div class="box2"></div>
    </div>
</html>
```
使用场景2

#### 子级元素外边距会使父级元素塌陷的问题

```css
   body {
            margin: 0;
            padding: 0;
        }
   .continer{
            width: 100px;
            height: 200px;
            background: green;
            overflow: hidden;//父级设置BFC
   }
   .box{
        margin-top: 20px;
        height: 50px;
        width: 50px;
        background: red;
    }

    <div class="continer">
        <div class="box"></div>
    </div>
```























