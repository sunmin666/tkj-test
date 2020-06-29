<template>
    <div class="sun">
        <!-- 头部 -->
        <div class="header">
            <p>图片</p>
            <div class="clear"></div>
        </div>
        <!-- 主题 -->
        <div class="conte">
            <p class="title">为世界人民打造健康</p>
            <p class="title-f">打造自己专属的健身房</p>
            <div class="clear"></div>
        </div>
        <!-- 产品 -->
        <div class="pic">
            <div class="pic-left">
                <img src="../assets/images/48d6c3c91040e519a971bf0267f54fb.png" alt="加载中...">
            </div>
            <div class="pic-right">
                <p>跑步机是家庭及健身房常备的健身器材，而且是当今家庭健身器材中最简单的一种，是家庭健身器的最佳选择。1965年北欧芬兰唐特力诞生了全球第一台家用的跑步机，设计师根据传速带的原理改变而成1965年北欧芬兰唐特力诞生了全球第一台家用的跑步</p>
            </div>
            <div class="clear"></div>
           <button class="btn">￥3000</button> 
        </div>
         <div class="pic">
            <div class="pic-left">
                <img src="../assets/images/208f8df6d257d872c9e4e4b1270797f.png" alt="加载中...">
            </div>
            <div class="pic-right">
                <p>跑步机是家庭及健身房常备的健身器材，而且是当今家庭健身器材中最简单的一种，是家庭健身器的最佳选择。1965年北欧芬兰唐特力诞生了全球第一台家用的跑步机，设计师根据传速带的原理改变而成1965年北欧芬兰唐特力诞生了全球第一台家用的跑步</p>
            </div>
            <div class="clear"></div>
           <button class="btn">￥6000</button> 
        </div>
         <div class="pic">
            <div class="pic-left">
                <img src="../assets/images/a5ea10f816106469f179d43b01c4027.png" alt="加载中...">
            </div>
            <div class="pic-right">
                <p>跑步机是家庭及健身房常备的健身器材，而且是当今家庭健身器材中最简单的一种，是家庭健身器的最佳选择。1965年北欧芬兰唐特力诞生了全球第一台家用的跑步机，设计师根据传速带的原理改变而成1965年北欧芬兰唐特力诞生了全球第一台家用的跑步</p>
            </div>
            <div class="clear"></div>
           <button class="btn">￥9000</button> 
        </div>
    </div>
</template>
<style>
body{
    height: 100%;
     background: #7b7b7b;
}
.sun{
    padding: 0.4rem;
    color: #ffffff;
}
.sun .header{
    width: 100%;
    height: 3rem;
    border: 0.01rem solid red;
    margin-bottom: 0.3rem;
    color: #403d3d;
}
.sun .header p{
    float: left;
    line-height:3rem;
}
.sun .conte{
    width: 100%;
    border: 0.01rem solid red;
    text-align: center;
    letter-spacing:0.3rem;
    padding-bottom:1rem;
    margin-bottom: 0.6rem;
}
.sun .conte .title{
    font-size: 2rem;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
    margin-bottom: 0.4rem;
}
.sun .title-f{
    font-size:1.5rem;
    font-weight: bold;
}
.sun .pic{
    width: 100%;
    background: #ffffff;
    color: black;
    margin-bottom: 0.5rem;
}
.pic-left{
    width: 50%;
    height: 11.8rem;
    float: left;
}
.pic-left img{
    width: 100%;  
    height: 100%; 
}
.pic-right{
    width: 50%;
    height: 11.8rem;
    float: right;
}
.pic-right p{
    margin-top: 1.1rem;
    font-size: 0.9rem;
}
.clear{
    clear: both;
}
.btn{
    width: 5rem;
    height: 2rem;
    border-radius:6px;
    text-align: center;
    line-height: 2rem;
    border: 0;
    background:#1E90FF;
    color: #ffffff;
    font-size: 1.2rem;
    margin-left: 3rem;
    margin-bottom: 1rem;
}
</style>