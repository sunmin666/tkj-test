<template>
    <div class="index">
        <!-- 头部 -->
        <div class="header">
            <p>logio</p>
            <div class="clear"></div>
        </div>
        <!-- 主题 -->
        <div class="conte">
            <p class="title">科学运动、适宜营养是提高个人免疫力的根本手段。运动需要：</p>
            <p class="title-f">1.设备  2.私教</p>
            <div class="clear"></div>
            <p class="title-el">大疫当下，人们去健身房与他人同运动、共呼吸的风险过大。咋办？</p>
            <p class="title-el">以“为人类打造健康”为己任的体科健研创出：“智慧个人健身房aiGYM”</p>
            <p class="title-el">私属健身房 宅急送 一键 一秒 一个健身房 搞定！</p>
            <button class="btn"><router-link to="/sun" class="ter">打造私属健身房</router-link></button>
            <div class="clear"></div>
        </div>
    </div>
</template>
<style>
body{
    height: 100%;
    background: #7b7b7b;
    font-family:'Consolas';
}
.index{
    padding: 0.4rem;
    color: #ffffff;
    text-decoration: none;
}
.index .header{
    width: 100%;
    height: 3rem;
    border: 0.01rem solid red;
    margin-bottom: 0.3rem;
    color: #403d3d;
    margin-top: 0.5rem;
}
.index .header p{
    float: left;
    line-height:3rem;
    color: #ffffff;
    font-size: 1.7rem;
    font-weight: bold;
}
.conte{
    width: 100%;
    text-align: center;
    letter-spacing:0.21rem;
    font-size: 1.4rem;
    margin-top: 1.6rem;
}
.index .title{
    line-height:2.5rem;
}
.index .title-f{
    text-align: center;
    margin:0 auto;
    margin-top: 0.2rem;
}
.title-el{
    margin-top: 2rem;
    font-size:1.4rem;
}
.clear{
    clear: both;
}
.index .btn{
    width: 12rem;
    height: 3rem;
    color: #ffffff;
    text-align: center;
    line-height: 3rem;
    border-radius:0.4rem;
    font-weight: 600;
    background: cornflowerblue;
    margin:auto;
    margin-top: 1.7rem;
    letter-spacing: 0.12rem;
    font-size: 1.3rem;
}
.ter{
    text-decoration: none;
    color: #ffffff;
}
</style>