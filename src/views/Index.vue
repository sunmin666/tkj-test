<template>
    <div class="index">
        <!-- 头部 -->
        <div class="header">
            <p> 3000￥= 宅急送(个性健身房+智慧私教)</p>
            <div class="clear"></div>
        </div>
        <!-- 主题 -->
        <div class="conte">
            <p class="title">科学运动、适宜营养是提高个人免疫力的根本手段。运动需要：</p>
            <p class="title-f">1.设备  2.私教</p>
            <div class="clear"></div>
            <p class="title-el">大疫当下，去健身房与他人同运动、共呼吸的风险太大。</p>
            <p class="title-zc">咋办？</p>
            <p class="title-el">猛疫当道，收入不足</p>
            <p class="title-zc">咋整?</p><br>
            <button class="btne">
                 <router-link to="/sun" class="btn">请按我</router-link>
            </button>
            <div class="clear"></div>
        </div>
        <!-- 底部 -->
        <div class="floot">
            <p>体科健，为人类打造健康</p>
            <p class="tel">www.tk.net.cn 400-013-4319</p>
        </div>
    </div>
</template>
<style>
body{
    height: 100%;
    background: #7b7b7b;
}
.index{
    padding: 0.4rem;
    color: #ffffff;
    text-decoration: none;
}
.index .header{
    width: 100%;
    height: 3rem;
    background:#d3d62f;
    margin-bottom: 0.3rem;
    color: #403d3d;
    margin-top: 0.5rem;
}
.index .header p{
    float: left;
    line-height:3rem;
    color: #7a7d43;
    font-size: 1.1rem;
    font-weight: 900;
    text-align: center;
   }
.index .conte{
    width: 100%;
    text-align: center;
    letter-spacing:0.21rem;
    font-size: 1.4rem;
    margin-top: 1.6rem;
    font-family: "楷体";
}
.index .title{
    line-height:2.5rem;
    font-size: 1.2rem;
}
.index .title-f{
    text-align: center;
    margin:0 auto;
    margin-top: 0.2rem;
    color: #d3d62f;
    font-weight:bold;
}
.index .title-el{
    margin-top: 2rem;
    font-size: 1.2rem;
}
.index .clear{
    clear: both;
}
.index .title-zc{
    color: #d3d62f; 
    font-weight:bold;
}
.index .title-zce{
    background:#d3d62f;
    color:black;
}
.index .btn{
    text-decoration: none;
    color: black;
}
.index .ter{
    text-decoration: none;
    color: #ffffff;
}
.index .btne{
    width: 10rem;
    height: 3rem;
    text-align: center;
    line-height: 3rem;
    background:#d3d62f;
    color: black;
    border-radius:0.4rem;
    border: 0;
    font-size: 2rem;
    box-shadow: 0.7rem 0.4rem 0.6rem;
}
.index .floot{
  width: 100%;
  margin-top:2rem; 
  font-size: 1.4rem;
  text-align: center;
  font-family: "楷体";
}
.index .floot p{
    margin-bottom:0.4rem;
}
</style>