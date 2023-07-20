# html5+css3新增属性

### 1.属性选择器

### 2.结构伪类选择器 权重是10

一般用于选择1父级里面第几个孩子，

![image-20220806140539574](C:\Users\冰块派对\AppData\Roaming\Typora\typora-user-images\image-20220806140539574.png)

#### 1.nth-child(n) 

![image-20220806140231568](C:\Users\冰块派对\AppData\Roaming\Typora\typora-user-images\image-20220806140231568.png)

偶数 even 奇数 odd

#### 2.nth-of-type(n)与nth-child(n)区别

nth-of-type  先找指定盒子再对指定元素计算安排属性

nth-child     先数第几个元素(可能和后续指定盒子不匹配)，再匹配盒子

对于无序列表，使用   nth-child 

子盒子包含多种不同标签，使用 nth-of-type

### 3.伪元素选择器 权重为1

1. 是行内元素，不能设置宽高，转化样式

2. 利用css创建新标签元素盒子，不需要HTML标签.不是元素

3. **<u>应用</u>**：小米系侧边栏右侧箭头，鼠标经过视频黑色遮罩层

#### element：：after( )  权重2

放在盒子内里面的后面

```css
 content:'我后插内容';
```

#### element：：before( )

放在盒子内里面的前面，放置内容  

```css
 content:'我是前插内容'
```

#### 使用场景一：伪元素字体图标

与icomoon合作使用，口  放在content内

**子绝父相**，安置位置

#### 使用二：伪元素仿土豆效果

.toma::before  中间不加空格 

.toma:hover::before

#### 使用三：伪元素清除浮动

1. 父级添加after元素

   ![image-20220806152927684](C:\Users\冰块派对\AppData\Roaming\Typora\typora-user-images\image-20220806152927684.png)

```css
.clearfix::after {
            content: '';
            display: block;
            height: 0;
            clear: both;
            visibility: hidden;
        }
```

2. 闭合浮动

   ```css
   		.clearfix:before,
           .clearfix:after {
               content: '';
               display: table;
           }
           
           .clearfix:after {
               clear: both;
           }
   ```

   

   ### 4.CSS3盒子模型

   为避免padding,border撑大盒子，通过box-sizing指定盒模型，可指定为content-box，border-box.

   #### 1.box-sizing

   content-box = height + padding + border

   **box-sizing:border-box;** 设置属性后，padding和border就不会撑大盒子了（前提padding和border不会超过width）

```css
* {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
```

### 5.css3新特性

1.图片模糊   滤镜filter: 函数名（）；

```css
	img {
		filter: blur(5px);
	}
```

数值越大 越模糊。

2.执行计算

​    calc(100% - 30px); 相对于父盒子少30像素。可以有 + - * %

```css
son {
    width:calc(100% - 30px);
}
```

### 6.CSS3过渡 transition :all .5s;

**过渡做到本身上，谁做过渡给谁加**，后面两个可以省略

transition；要过渡属性  花费时间  运动曲线  何时开始

属性：宽高，背景颜色，内外边距等，多个属性同时变化写all

时间：单位秒 

曲线：逐渐变慢 ease , 匀速 linear，加速 ease-in，减速 ease-out，先加速再减速 ease-in-out 

何时开始：单位秒

```css
 		.ten {
            width: 100px;
            height: 100px;
            background-color: pink;
            transition: all .5s;
        }
        
        .ten:hover {
            width: 200px;
            height: 200px;
            background-color: green;
        }
```

**HTML5 = HTML5 + CSS3 + JS**

# 1.  平移，旋转,与过渡配合

### 1.   2D平移, transform ：translate

平移，旋转，

1.移动盒子位置（定位，盒子外边距，2D转换），translate,**不会影响其他盒子位置，**

1. **<u>*应用：商品浏览图hover上浮*</u>**

2. ### **transform:translate(100px,100px);**

​		只移动X：transform:translateX(100px);

​		只移动Y：transform:translateY(100px);

3. 数值可是百分比，**参考自身属性**而非可视区

4. 对行内标签没有效果。

5. 实现盒子垂直水平居中：

```css
//定位，宽高写死
.father {
	position:relitive;
	width:500px;
	height:500px;
	background-color:pink;
}
.son {
	position:absolate;
	width:200px;
	height:200px;
	top:50%;
	left:50%;
    
	/* margin-top:-100px;
    margin-left:-100px;*/
    transform:translate(-50%,-50%);
    
    background-color:red;
}
```

### 2.  2D旋转    transform:rotate(度数deg)

1.正值顺时针，负逆时针

### 3. 2D转换中心点  transform-origin: x y;

1. 空格隔开x,y
2.  默认中心50% 50%
3. x y处可以写top bottom left right

### 4. 2D转换之缩放  transform:scale(x,y);

1. 里面数字是倍数，没有单位。

2. 一个数子表示宽高缩放同样大小
3. 优势：不会撑大本盒子，**不会影响其他盒子**，不会影响重新排版
4. 可以设置中心点。利用transform-origin:x y ;设置

### 5.2D综合写法

**transform : translate(x,y)，rotate(90deg)，scale(1.1);**

代码有执行顺序：盒子移动方向，移动度数，缩放

# 2.动画

可以通过设置多个节点精确控制一个或一组

#### 1.关键帧keyframes定义动画，可以做多个状态变化

```css
 @keyframes 动画名称 {
            0% {
                width: 100px;
            }
            100% {
                width: 200px;
            }
        }
```

#### 2.简写属性

```css
 animation: name duration timing-function delay iteration-count direction fill-mode;
```

动画名称，持续时间 duration ，运动曲线  timing-function ，何时开始delay  ，播放次数  iteration-count ，是否反方向direction ，动画其实或结束 fill-mode。不包括animation-play-state.

```css
 animation: move 2s linear 0s 1 alternate forwards;
```

**timing-function：** 属性：linear, ease....steps(5),分5步完成，有steps不要其他。steps应用：打字机效果。

# 3.  3D

1.x,y,z轴

2.3D位移和3D旋转

#### 1.3D位移：translate3d(x,y,z)

transform: translateX(100px),  

 transform: translateY(100px),

transform: translateZ(100px)。【透视固定】【移动物体，数值越大，物体越大】

简写：transform:translate3d(x,y,z),t

【应用：旋转木马，**子盒子**指定不同大小，有立体感】

#### 2.旋转：rotate3d(x,y,z，60deg)；

transform:rotateX(45deg);

transform:rotateY(45deg);

transform:rotateZ(45deg);

x:正倒负趴，y：正右负左，z:正顺负逆

#### 3.透视 perspecive；

1. 视距，单位px
2. 写在被观察元素**父盒子**上
3. 数值越小，离得越近，物体越大

#### 4.3D呈现 transform-style

1. transform-style:preserve-3d;子元素开启立体空间

2. 写给父级

























