<template>
    <div class="sun">
        <!-- 价格按钮 -->
        <div class="cont-one">
             <p>
                <button><router-link to="/detail?id=1" class="toh">￥3000</router-link></button>
            </p>
            <p>
                 <button><router-link to="/detail?id=2" class="toh">￥6000</router-link></button>
            </p>
            <p>
                <button><router-link to="/detail?id=3" class="toh">￥9000</router-link></button>
            </p>
            <p>
                <button><router-link to="/detail?id=4" class="toh">￥15000</router-link></button>
            </p>
            <p>
                <button><router-link to="/detail?id=5" class="toh">￥30000</router-link></button>
            </p>
        </div>
        <!-- 功能按钮 -->
       <div class="cont-two">
           <p>
             <button class="btn-two">塑体形功能</button>
           </p>
            <p>
                <button class="btn-two">减脂肪功能</button>
            </p>
            <p>
                 <button class="btn-two">提高免疫力</button>
            </p>
       </div>
        <!-- 底部 -->
         <div class="floot">
            <p>体科健，为人类打造健康！</p>
            <p>www.tk.net.cn 400-013-4319</p>
        </div>
    </div>
    
</template>
<style>
body{
    height: 100%;
    background: #7b7b7b;
}
.sun{
    margin-top: 2rem;
}
.sun p{
    margin: 0 auto;  
    text-align: center;  
}
.sun p button{
    width: 10rem;
    height:3.4rem;
    text-align: center;
    border-radius: 0.4rem;
    line-height: 3.4rem;
    background: chartreuse;
    font-size: 1.4rem;
    border: 0;
    margin-top:0.5rem;
    box-shadow: 0.7rem 0.4rem 0.6rem;
}
.sun .btn-two{
   background: #d3d62f; 
}
.sun .floot{
  width: 100%;
  margin-top:2rem; 
  font-size: 1.4rem;
  text-align: center;
  font-family: "楷体";
}
.sun .floot p{
    margin-bottom:0.4rem;
    color: #ffffff;
}
.sun .toh{
    text-decoration: none;
    color: black;
}
.sun .cont-two{
    margin-top: 2.3rem;
}
</style>