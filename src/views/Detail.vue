<template>
  <div class="warp"> 
        <!-- 标题 -->
        <div class="title">
          <span>{{title}}</span>
        </div>
        <!-- 主题内容 -->
        <div class="conte">
          <!-- 图片 -->
           <img v-bind:src="pic" alt="图片加载中">
           <p class="warp-name">{{name}}</p>
           <p class="text-Introduction">详细参数配置：</p>
           <ul>
             <li>{{lione}}</li>
             <li>{{litwo}}</li>
             <li>{{lithree}}</li>
             <li>{{lifour}}</li>
             <li>{{liafter}}</li>
           </ul>
           <p></p>
        </div>
        <!-- 底部 -->
         <div class="floot">
            <p>体科健，为人类打造健康！</p>
            <p>www.tk.net.cn 400-013-4319</p>
        </div>
   </div> 
</template>
<script>
export default {
    data(){
        return{
          title:'',
          pic:'',
          name:'',
          lione:'',
          litwo:'',
          lithree:'',
          lifour:'',
          liafter:''  
        }
     },
     mounted(){
       if(this.$route.query.id == 1){
           this.title ="简约版";
           this.pic = require("../assets/images/48d6c3c91040e519a971bf0267f54fb.png");
           this.name = "8500T 电脑程式电动跑台";
           this.lione = "面板：采用液晶触摸屏,智能电脑，搭载最新的四核处理器。";
           this.litwo = "显示功能：时间、距离、速度、扬升、卡路里、心率等";
           this.lithree = "防滑踏板：铝合金防滑踏板";
           this.lifour = "跑带：防滑跑带";
           this.liafter = "自行保养功能：特别配置科学智能化加油润滑系统";
       }else if(this.$route.query.id == 2){
           this.title ="普通版";
           this.pic = require("../assets/images/208f8df6d257d872c9e4e4b1270797f.png");
           this.name = "8500T 电脑程式电动跑台";
           this.lione = "面板：采用液晶触摸屏,智能电脑，搭载最新的四核处理器。";
           this.litwo = "显示功能：时间、距离、速度、扬升、卡路里、心率等";
           this.lithree = "防滑踏板：铝合金防滑踏板";
           this.lifour = "跑带：防滑跑带";
           this.liafter = "自行保养功能：特别配置科学智能化加油润滑系统";
       }else if(this.$route.query.id == 3){
           this.title ="中等版";
           this.pic = require("../assets/images/a5ea10f816106469f179d43b01c4027.png");
           this.name = "8500T 电脑程式电动跑台";
           this.lione = "面板：采用液晶触摸屏,智能电脑，搭载最新的四核处理器。";
           this.litwo = "显示功能：时间、距离、速度、扬升、卡路里、心率等";
           this.lithree = "防滑踏板：铝合金防滑踏板";
           this.lifour = "跑带：防滑跑带";
           this.liafter = "自行保养功能：特别配置科学智能化加油润滑系统";
       }else if(this.$route.query.id == 4){
           this.title ="高等版";
           this.pic = require("../assets/images/208f8df6d257d872c9e4e4b1270797f.png");
           this.name = "8500T 电脑程式电动跑台";
           this.lione = "面板：采用液晶触摸屏,智能电脑，搭载最新的四核处理器。";
           this.litwo = "显示功能：时间、距离、速度、扬升、卡路里、心率等";
           this.lithree = "防滑踏板：铝合金防滑踏板";
           this.lifour = "跑带：防滑跑带";
           this.liafter = "自行保养功能：特别配置科学智能化加油润滑系统";
       }else{
           this.title ="豪华版";
           this.pic = require("../assets/images/48d6c3c91040e519a971bf0267f54fb.png");
           this.name = "8500T 电脑程式电动跑台";
           this.lione = "面板：采用液晶触摸屏,智能电脑，搭载最新的四核处理器。";
           this.litwo = "显示功能：时间、距离、速度、扬升、卡路里、心率等";
           this.lithree = "防滑踏板：铝合金防滑踏板";
           this.lifour = "跑带：防滑跑带";
           this.liafter = "自行保养功能：特别配置科学智能化加油润滑系统";
       }  
    }
}
</script>
<style >
body{
  padding: 0.5rem;
  color: #ffffff;
}
.warp{
  font-family: "楷体";
}
.warp .title{
  width: 100%;
  text-align: center;
  margin-top: 0.4rem;
  margin-bottom: 1rem;
}
.warp .title span{
  font-size:1.6rem;
  background: #d3d62f;
  color: #7a7d43;
}
.warp .conte{
  width: 100%;
}
.warp .conte img{
  width: 100%; 
}
.warp .conte .text-Introduction{
  margin-top: 0.5rem;
  font-size: 1.2rem;
}
.warp .warp-name{
  font-size:1.3rem;
  text-align: center;
   margin-top: 0.5rem;
} 
.warp .conte ul{
  margin-left: 2rem;
  font-size:1.2rem;
}
.warp .conte ul li{
  margin-top: 0.4rem;
}
.warp .floot{
  width: 100%;
  margin-top:2rem; 
  font-size: 1.4rem;
  text-align: center;
  font-family: "楷体";
}
.warp .floot p{
    margin-bottom:0.4rem;
    color: #ffffff;
}
.warp .toh{
    text-decoration: none;
    color: black;
}
</style>


</template>    