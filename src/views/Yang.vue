<template>
  <div class="warp"> 
    <div class="header">
        {{title}}
    </div>
    <div class="content">
        {{content}}
    </div>
    <div class="floote">联系电话:13121921833</div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      title:"",
      content:""
    }
  },
  mounted(){
    if(this.$route.query.id == 1){
        this.title = "跑步机",
        this.content ="跑步机是家庭及健身房常备的健身器材，而且是当今家庭健身器材中最简单的一种，是家庭健身器的最佳选择。1965年北欧芬兰唐特力诞生了全球第一台家用的跑步机，设计师根据传速带的原理改变而成1965年北欧芬兰唐特力诞生了全球第一台家用的跑步"
    }else if(this.$route.query.id == 2){
       this.title = "滑雪机",
        this.content ="我们致力于滑雪运动的传播与发展，为广大滑雪爱好者、青少年滑雪项目普及与开展，为滑雪产业经营者、国家和省市专业队提供最优的产品及服务。“纽科尔斯”系列滑雪机在滑行的状态下，接近真实的滑雪场地，让使用者拥有置身于大自然般的体验，目前以广泛应用于学校、社区、俱乐部、拓展中心、商业中心、健身会所、私人别墅等领域。"
    }else{
        this.title = "健身",
        this.content ="越来越多的姑娘开始欣赏肌肉美与线条美，重视健身塑形了。其实健身不仅能练就好的身材，更能带来好的身体状态。坚持健身，你会发现自己随时精气神十足，神采奕奕，整个人都在一个良性循环的状态中。"
    }
  }
}
</script>
<style scoped>
  body{
    background-color: red;
  }
  .warp{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: #989292;
    color: #fff;
  }
  .header{
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0.8rem 0.6rem;
    flex-wrap:wrap;
    font-weight: 500;
    font-size: 2.6rem;
    font-family: "DFKai-SB";
  }
  .content{
    display: flex;
    flex-direction: column;

    
    padding: 0 1.5rem;
    margin: 0 0 3.5rem 0;
    font-family: "DFKai-SB";
  }
  .content span{
    display: inline-block;
    text-indent: 2.7rem;
    padding: 1.5rem 0;
    letter-spacing: 0.3rem;
  }
  .floote{
    padding: 0 1.5rem 2rem 1.5rem;
    text-align: center;
  }
</style>


