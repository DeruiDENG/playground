---
title: 登陆表单的最佳实践
date: "2020-12-30"
description: "凑巧在同事的电脑上看到这篇Signin Form Best Practice的video。原来表单的最佳实践，不是什么高端的pattern，而是回归原生，回归纯粹，下面是一些简要笔记"
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/alGcULGtiv8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


Tips：
* 使用`<form>`, `<input>`, `<label>`标签，而不是其他花哨的东西, 
  * 这通常会带来更好的accessibility，跨浏览器的良好用户体验，例如点击label可以focus到对应的input输入框
  * 不应该用input的placeholder来替代label，因为一旦用户输入，placeholder就不显示了，这并不是好的用户体验
* 使用`<button>`标签来表示按钮，而不是`<div>`
  * 使用有意义的button文字
  * 在点击button后将其改为disabled状态，避免用户重复点击
* 元素的样式应该合理，尤其是在移动设备上，人的手指点击位置是不准确的
  * 太小的input/button的用户体验很糟，mobile: 15px padding, desktop: 10px padding
  * input元素之间的距离应该足够大
  * input应该有border，让用户更容易识别
  * 字体应该足够大，尤其是在移动设备上
* 输入校验
  * 可以使用默认的输入校验，通过指定input元素上的type或者其他相关属性。在submit form时，相关错误信息会在浏览器上弹出。它的浏览器兼容性很好。
  * 可以通过:invalid伪类来自定义错误input的样式
* 利用好`<input>`元素的多种attribute
  * autofocus，页面加载后自动focus
  * type, 使用好input的多种type类型。可以用于校验。提示浏览器存储密码。正确的type可以确保移动系统能调用正确的键盘给用户。
  * inputmode，同样可以提示移动系统调用正确的键盘
  * name=“new-password"，提示 浏览器这是一个新密码，避免触发自动完成，于此同时支持的浏览器还可以跳出密码自动生成器等工具。name="current-password"提示浏览器这是一个输入已有密码的input框
  * required, 将输入框标记为必选，浏览器会在必要时候提示用户输入内容
  * aria-describeby，告诉屏幕阅读器一个输入框的输入限制
* 可以使用Javascript进行额外的表单校验
  * constraint validation API
* 用户数据帮助你了解用户行为
  * Analytics，记录用户行为，包括如何与表单交互
  * RUM
* 关注网站性能
  * Core Web Vitals！
* 最后，
  * 将登陆登出链接放的显眼，容易理解
  * 向用户提供注册登陆的好处
  * 避免过于复杂的交互设计
  * 支持email或手机号
  * 支持reset password
  * 隐私政策
  * 登录界面与网站风格保持一致





另外在评论区也看到一个简单的总结：

* 01:59 Well formed HTML is the backbone of a good sign-in experience04:34 Don't repeat inputs
* 04:57 Use buttons for buttons
* 07:13 Make sure inputs are clearly visible
* 07:40 Design for thumbs
* 08:00 Make text big enough
* 08:51 Warn of invalid input values
* 09:29 Help users start faster with input attributes
* 11:04 Prevent keyboards obscuring the sign in button
* 11:57 Help users avoid re-entering data with input name, id, type and autocomplete
* 14:25 Enable the browser to suggest a strong password
* 14:48 Add the required attribute to both email and password fields
* 15:03 Make sure to add a Show Password button to enable users to check the text they've entered
* 15:57 Validate data before submission
* 16:40 What you cannot measure, you cannot improve
* 17:35 Website performance
* 17:52 General guidelines: Don't make users hunt, keep it focused, minimize complexity, incentives sign in, allow email or phone, make password reset easy, link to terms and policies, keep branding and style consistent

写在最后，其实作者的这篇博客比我写得更好...
https://web.dev/sign-in-form-best-practices/


Happy Coding 😊
