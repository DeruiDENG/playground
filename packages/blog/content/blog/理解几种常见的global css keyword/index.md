---
title: 理解几种常见的global css keyword
date: "2020-11-05T00:22:39.284Z"
description: "最近因为工作的缘故，接触到了`inherit`, `unset`等4种CSS global keyword，发现自己对它们只有比较模糊的理解，因此翻了翻MDN，在这里做一些归纳总结。"
---

最近因为工作的缘故，接触到了`inherit`, `unset`等几种CSS keyword，发现自己对它们只有比较模糊的理解，因此翻了翻MDN，在这里做一些归纳总结。

# initial, inherit, unset, revert 

在众多的CSS keyword中，有且四种keyword被称作global keyword。

他们有一个共同的特点，就是可以被用于`任何`的CSS属性。

既然是global keyword，那么它们的含义肯定就不限定于任何特定的CSS属性的，而是global level的了，但是initial ,inherit, unset, revert这四个关键字，读起来却有些confuse了，下面就让我们细细分析

# CSS的继承

在我们理解这四种关键字的作用之前，可能我们需要先要复习一下CSS属性的继承。

这个概念其实非常容易理解，在CSS的众多属性中，有一些属性是可以继承的，例如font-size，当我们在父层的container定义font-size时，container包含的所有元素默认便包含了父层所设置的font-size。

而另一些CSS的属性，则不可继承，例如padding，当我们在父元素设置padding时，子元素显然不会被自动添加父层所设置的padding。

对于可继承和不可继承的属性，上面提到的四个关键字的作用可能有所不同。

```css
.container {
	font-size: 16px; // 会被子元素继承
    padding: 16px; // 不会被子元素继承
}
```

下面我们就来看看这四种keyword的职责



# initial

initial大概是最容易理解的一个关键字，顾名思义，通过使用这个关键字，我们可以将一个CSS属性的值设置为该属性的`默认值`。

每一个CSS属性的默认值，通常在W3C标准中定义，由useragent(也就是浏览器)来实现。注意一个CSS属性的默认值是与具体的元素无关的，例如display属性的默认值被定义为inline，即便div元素的display属性默认为block。

更具体地说，对于可继承的属性，useragent通常只会将默认值设置在根节点上（该默认值会因为继承被apply到所有的子节点），而对于不可继承属性，useragent则会在所有的元素上设置属性的默认值（如果没有显示设定CSS属性的话）

在下面的例子中，我们为p标签设定了color属性，由于color属性可继承，子元素中包含的Derui也会变成蓝色。

```html
<p>
    Hello, <em>Derui</em>
</p>
```

```css
p {
    color: blue;
}
```

如果这不是我们期待的，我们使用initial关键字，将color属性设置为其默认值。

```css
p em {
    color: initial;
}
```

由于color是可继承属性，我们实际上是将useragent在根节点上定义的属性apply到这个元素上，它的取值与em元素的任何父元素所定义的CSS属性无关。

注意：

即便在一个CSS属性上apply了initial，它也仍然是可以override，例如：

```css
body p em {
    color: red; // override了前面设置的initial属性
}
```



# inherit

顾名思义，该关键字时一个element使用它在`父层元素`中的computed value。

还是用上面的例子，我们为body标签设定了color属性，同时为子元素em设置了另一个color。

```html
<p>
    Hello, <em>Derui</em>
</p>
```

```css
body {
    color: blue;
}

em {
    color: green;
}
```

通过使用inherit, 我们可以使em元素使用其父层`p`的computed value。在这里例子中，color是一个可继承属性，所以color在其父层p的computed value是定义在body上的`color: blue`

```css
body em {
    color: inherit; // 将em设置为blue
}
```



在针对不可继承属性时，使用inherit需要特别小心。如果你的父级元素没有直接定义相应的CSS属性，那么该属性的`默认值`作为父元素的computed value，会被apply给子元素，这通常非常confusing。

所以，在使用inherit关键字之前，我们最好搞清楚CSS属性是否是可继承的，在必要的情况下，直接使用initial关键字或下面即将介绍的unset关键字可能更make sense。



# unset

乍一看，unset可能与initial有点难以区分，但是实际上它是一个很`聪明`的关键字，它是initial和inherit两种关键字的集合体。

对于可继承的CSS属性，unset关键字等同于inherit，对于不可继承的CSS属性，unset关键字则等同于initial。

继续使用上面的例子，我们为body标签设定了color属性，同时为p标签设置了一个不可继承的border属性。

```html
<p>
    Hello, <em>Derui</em>
</p>
```

```
body {
    color: blue;
}

p {
	border: 1px solid red;
}

em {
    color: green;
    border: 1px solid blue;
}
```

如果我们使用unset关键字，情况会怎么样呢？

```css
body em {
    color: unset;
    border: unset;
}
```

由于color是可继承属性，border不可继承，上述代码等同于：

```CSS
body em {
    color: inherit;
    border: initial;
}
```

因此，em标签的颜色会被设置为父层定义的蓝色，而border属性则会使用默认值空，而不是父层定义的红色边框。



讲到这里，我们可以会觉得，unset同时有两种行为好令人困惑啊，其实这两种不同的行为，在一定程度上是统一的，即`取消直接在该元素上设置的属性`，也就是相当于没有在该元素上设置相应的CSS属性。

如果一个元素没有设置一个CSS属性，如果这个属性是可继承的，那在该元素上生效的属性就是父层的computed value，如果不可继承，那生效的属性就是默认值。如果这样想，unset的职责是不是就清晰许多了？



# revert

revert这个英文词汇与unset非常相似，相应的，它的职责也与unset有很多相似之处。

revert与unset在处理可继承和不可继承属性的逻辑是相同的，两者的主要区别在于默认值的处理上，revert会将CSS属性还原为“考虑了标签因素”的默认值，而unset则不考虑标签因素。

举个例子，

```html
<h1>
    Hello, Derui
</h1>
```

```css
h1 {
    font-weight: normal;
}
```

则使用revert和unset会存在差异：

```html
<h1 style="font-weight: unset">
    文字的font-weight为normal，因为font-weight的默认值为normal
</h1>
<h1 style="font-weight: revert">
    文字的font-weight为bold，因为font-weight在h1标签上的默认值为bold
</h1>
```



# 总结

4种global关键字各自有其用武之地。

当我们想将浏览器默认行为apply给一个元素时，可以使用initial。

如果我们想让一个元素使用其父级元素的属性，可以使用inherit，但是因为inherit在一些情况下令人困惑的行为，也许revert或者unset在一些情况下是更好的选择。



# 参考：

* https://developer.mozilla.org/en-US/docs/Web/CSS/inheritance#Inherited_properties
* https://developer.mozilla.org/en-US/docs/Web/CSS/initial

