---
title: Media Query与屏幕像素
date: "2021-07-08"
description: "也许Media Query是一个看起来很简单的task, 在CSS代码中加一些@media似乎就能解决所有的问题。但是实际上，可以访问一个网站的设备千千万万，需要考虑的问题还有很多。本文着重讨论Media Query中的px与设备分辨率的关系"
---

# 前言

基于CSS的Media Query是解决Web响应式(Responsive)的常见方法。

它的格式非常简单，例如如下的代码，就表示当屏幕的像素不大于600px时，括号里的CSS样式生效

```scss
  @media only screen and (max-width: 600px) {
    font-size: 14px;
  }
```

除了支持基于screen的响应式，也支持一些其他的媒体类型，例如基于打印的：

```scss
 @media only print and (max-width: 600px) {
    font-size: 14px;
  }
```

甚至一些更复杂feature：

```scss
@media (prefers-color-scheme: dark) {
  .day.dark-scheme   { background:  #333; color: white; }
  .night.dark-scheme { background: black; color:  #ddd; }
}

@media (orientation: landscape) {
  body {
    flex-direction: row;
  }
}

@media (min-resolution: 72dpi) {
  p {
    text-decoration: underline;
  }
}
```

你可以打开这里查看更多： [Using media queries - CSS: Cascading Style Sheets | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries#media_features)



# 问题

当我们使用基于屏幕或者打印纸的响应式设计时，往往需要跟像素打交道。

对于下面的代码，

```scss
 @media only screen and (max-width: 600px) {
    font-size: 14px;
  }
```

它会在IPhone X中生效，因为通过ChromeDevTools我们可以看到Iphone X的屏幕宽度是375px，低于我们在这里设置的600px。

但是如果你足够细心，会发现这并不是IphoneX的真实屏幕分辨率，它的分辨率高达1125*2436 pixels

![image-20210708233625363](.\image-20210708233625363.png)



为什么会存在这样的gap？真实的分辨率与media query中的分辨率又是如何换算的？



# 解释

## 为什么需要换算？

因为基于实际分辨率来执行media query是有bug的。

例如5.8寸的IPhone X的分辨率是1125\*2436 pixel，而我正在使用的这台27寸显示器的分辨率是2560\*1440 pixel，这两个设备分辨率相似，但是尺寸差了n倍，使用同一套响应式设计显然说不通。

IphoneX显然应该使用与它尺寸类似的Iphone 6相同的响应式设计，而后者的分辨率只有750\*1334。



所以，浏览器在处理media query时，都会使用一套换算机制，这套机制似乎是基于屏幕的尺寸大小而不是分辨率来计算的，比如Iphone 6与Iphone X的宽度都被当作了375px。



## 如何换算？

我从很早就知道media query中的px并不等同于设备的实际分辨率，但是对于如何换算却一直没有深入研究。

研究了Web标准( [CSS Values and Units Module Level 3 (w3.org)](https://www.w3.org/TR/css-values-3/#absolute-lengths))，才发现答案原来是如此简单，然而我之前的理解是错误的。



关于“如何换算”这个问题的答案，是`根本没有换算`。

在标准中，px作为一种距离单位，被划入了"Absolute Length Unit"，也就是说，它跟cm, inch, mm这一类的单位一样，都是可以被物理测量的。正因为如此，这些单位之间存在固定的换算关系（例如1cm=10mm），也因此被叫做“绝对长度单位”。

在标准中，px的定义是`1/96th of 1in`,  也就是`一英寸（2.54厘米）的1/96`。也就是说，在Web领域，一个屏幕的宽度是多少px，跟屏幕分辨率或者像素密度完全没有关系，只跟屏幕的尺寸相关。



一切似乎到此为止了，我本着认真负责的精神，基于Iphone X 375\*812的尺寸，计算了下它的对角线长度

```javascript
export function playground() {
  const screenSize = 5.8; // 5.8英寸，屏幕的物理尺寸（对角线长度）
  const width = 375; // 宽度
  const height = 812; // 高度
  const diagonal = Math.sqrt(
    Math.pow(width / 96, 2) + Math.pow(height / 96, 2)
  );
  console.log(screenSize, diagonal); //  5.8 9.316769388595908
}
```

发现得到的结果完全不对，怎么算出来的对角线长度成了9.32inch，与标称的5.8英寸屏幕相差甚远。
