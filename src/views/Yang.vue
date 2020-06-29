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
        this.title = "4545645645",
        this.content ="4878787878"
    }else if(this.$route.query.id == 2){
       this.title = "4545454545454545454",
        this.content ="7878787878787"
    }else{
        this.title = "11111111111",
        this.content ="2222222222"
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
    display: flex;
    flex-direction: column;
    background-color: #989292;
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


