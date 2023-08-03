### 1.原型

```js
 class Student extends Person {
            // 属性：
            constructor(name, score) {
                    // this.name = name,
                    // 调用父类,不是使用new Person
                    super(name);
                    this.score = score
                }
                // 方法
            introduce() {
                console.log(`我是类的方法，我的名字是${this.name},成绩是${this.score}`);
            }
        }
        // 调用类Student
        const student = new Student('张三', 99)
            // 打印Student的属性和和方法
        console.log('student', student);//student Student {name: '张三', score: 99}
        // 调用方法
        student.introduce();

```

1. 控制台可以通过 student.introduce()调用该对象的方法

但 **实例** 打印 student 时想获取属性和方法， 仅仅 直接显示 属性 ，他的方法在属性 __ proto __中称为隐式原型

2. 类的 Student.prototype(显式原型) 与实例的student.__ proto __（隐式原型）类型相等 ,都指向 student 对象的方法 

### 2.原型链

```js
 class Person {
            constructor(name) {
                this.name = name;
            }
     	drink(){
            console.log('喝水')
            }
        } 
class Teach extends Person {
            constructor(name, subject) {
                // this.name = name;
                super(name);
                this.subject = subject;
            }
            teach() {
                console.log(`${this.name}老师教${this.subject}`);
            }
        }
        const teacher = new Teach('李', '数据结构')
        console.log('teacher', teacher);//①
        //teacher Teach {name: '李', subject: '数据结构'}
        teacher.teach()

```

1.teacher是 new Teach实例化出来的一个实例对象，

打印teacher 即可以打印(实例)对象的两个属性（第一层），以及隐式原型__ proto __（包括Person这个对象中的teach属性，以及第三层中proto隐式原型中的drink方法）![image-20221214201853969](C:\Users\ChiShuiguo\AppData\Roaming\Typora\typora-user-images\image-20221214201853969.png)

2.访问一个对象的属性和方法，首先会从该对象的自身属性和方法寻找，否则是该对象的原型（再原型的原型...）

3.teacher.hasOwnProperty('name')判断该**对象自身属性**，否则是原型的属性 ![image-20221214202331393](C:\Users\ChiShuiguo\AppData\Roaming\Typora\typora-user-images\image-20221214202331393.png)

### 3.instanceof

1. 分辨结构类型，

2. 判断原型链（名称）是否存在，即只要在该对象的原型上可以找到就返回true

   

   1. 应用： 可以判断一个对象是否是特定构造函数创建的实例。

```js
class Rectangle {
    // ...
}

const rect = new Rectangle();
console.log(rect instanceof Rectangle);  // true
```

​         2.  应用：判断一个对象是否是某个类的子类的实例，或者是其原型链上某个构造函数的实例。

```js
class Shape {
    // ...
}

class Circle extends Shape {
    // ...
}

const circle = new Circle();
console.log(circle instanceof Shape);  // true
console.log(circle instanceof Circle);  // true

```

3. js中没有显示接口，instanceof判断**对象**的原型链是否实现接口，

```js
function Serializable() {
    // ...
}

class Shape {
    // ...
}

Shape.prototype = new Serializable();

const shape = new Shape();
console.log(shape instanceof Serializable);  // true

```

js中的接口是隐式的，ts中的接口是显示的，