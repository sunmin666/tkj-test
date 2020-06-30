<template>
  <div class="warp"> 
    <button class="back" @click="$router.back(-1)">返回</button>
    <div class="header">
      <div>
        {{title}}
      </div>
    </div>
    <div class="contentA">
      这里存放图片
    </div>
    <div class="content">
      {{content}}
    </div>
    <button class="Buynow">
        去支付
      </button>
    <div class="floote">联系电话：4000134319</div>
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
  methods:{
  },
  mounted(){
    //在生命周期中添加方法，根据id判断添加内容
    if(this.$route.query.id == 1){
        this.title = "￥3000",
        this.content =`
                先帝创业未半而中道崩殂，今天下三分，益州疲弊，此诚危急存亡之秋也。然侍卫之臣不懈于内，忠志之士忘身于外者，盖追先帝之殊遇，欲报之于陛下也。诚宜开张圣听，以光先帝遗德，恢弘志士之气，不宜妄自菲薄，引喻失义，以塞忠谏之路也。
            宫中府中，俱为一体，陟罚臧否，不宜异同。若有作奸犯科及为忠善者，宜付有司论其刑赏，以昭陛下平明之理，不宜偏私，使内外异法也。
            侍中、侍郎郭攸之、费祎、董允等，此皆良实，志虑忠纯，是以先帝简拔以遗陛下。愚以为宫中之事，事无大小，悉以咨之，然后施行，必能裨补阙漏，有所广益。
            将军向宠，性行淑均，晓畅军事，试用于昔日，先帝称之曰能，是以众议举宠为督。
            愿陛下托臣以讨贼兴复之效，不效，则治臣之罪，以告先帝之灵。若无兴德之言，则责攸之、祎、允等之慢，以彰其咎；陛下亦宜自谋，以咨诹善道，察纳雅言，深追先帝遗诏，臣不胜受恩感激。
            今当远离，临表涕零，不知所言。
        `
    }else if(this.$route.query.id == 2){
        this.title = "￥6000",
        this.content =`
                先帝创业未半而中道崩殂，今天下三分，益州疲弊，此诚危急存亡之秋也。然侍卫之臣不懈于内，忠志之士忘身于外者，盖追先帝之殊遇，欲报之于陛下也。诚宜开张圣听，以光先帝遗德，恢弘志士之气，不宜妄自菲薄，引喻失义，以塞忠谏之路也。
            宫中府中，俱为一体，陟罚臧否，不宜异同。若有作奸犯科及为忠善者，宜付有司论其刑赏，以昭陛下平明之理，不宜偏私，使内外异法也。
            侍中、侍郎郭攸之、费祎、董允等，此皆良实，志虑忠纯，是以先帝简拔以遗陛下。愚以为宫中之事，事无大小，悉以咨之，然后施行，必能裨补阙漏，有所广益。
            将军向宠，性行淑均，晓畅军事，试用于昔日，先帝称之曰能，是以众议举宠为督。
            愿陛下托臣以讨贼兴复之效，不效，则治臣之罪，以告先帝之灵。若无兴德之言，则责攸之、祎、允等之慢，以彰其咎；陛下亦宜自谋，以咨诹善道，察纳雅言，深追先帝遗诏，臣不胜受恩感激。
            今当远离，临表涕零，不知所言。
        `
    }else{
        this.title = "￥9000",
        this.content =`
                先帝创业未半而中道崩殂，今天下三分，益州疲弊，此诚危急存亡之秋也。然侍卫之臣不懈于内，忠志之士忘身于外者，盖追先帝之殊遇，欲报之于陛下也。诚宜开张圣听，以光先帝遗德，恢弘志士之气，不宜妄自菲薄，引喻失义，以塞忠谏之路也。
            宫中府中，俱为一体，陟罚臧否，不宜异同。若有作奸犯科及为忠善者，宜付有司论其刑赏，以昭陛下平明之理，不宜偏私，使内外异法也。
            侍中、侍郎郭攸之、费祎、董允等，此皆良实，志虑忠纯，是以先帝简拔以遗陛下。愚以为宫中之事，事无大小，悉以咨之，然后施行，必能裨补阙漏，有所广益。
            将军向宠，性行淑均，晓畅军事，试用于昔日，先帝称之曰能，是以众议举宠为督。
            愿陛下托臣以讨贼兴复之效，不效，则治臣之罪，以告先帝之灵。若无兴德之言，则责攸之、祎、允等之慢，以彰其咎；陛下亦宜自谋，以咨诹善道，察纳雅言，深追先帝遗诏，臣不胜受恩感激。
            今当远离，临表涕零，不知所言。
        `
    }
  }
}
</script>
<style scoped>
  html{
    height: 100%;
  }

  .back{
    border: none;
    padding: 0.1rem 0.5rem;
    position: absolute;
    left: 0.55rem;
    top: 0.60rem;
    outline: none;
    border-radius: 15rem;
  }
  .warp{
    width: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    background-color: #989292;
    color: #fff;
    position: absolute;
  }
  .header{
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 2rem 0.6rem 1rem 0.6rem;
    flex-wrap:wrap;
    font-weight: 500;
    font-size: 2rem;
    font-family: "DFKai-SB";
  }
  .content{
    width: 84%;
    text-indent: 2.2rem;
    border: 1px solid gray;
    background-color: white;
    color: black;
    border-radius: 15px;
    font-family: "DFKai-SB";
    margin: 0 auto;
    padding: 0.5rem;
  }
  .contentA{
    width: 84%;
    background-color: white;
    color: black;
    border-radius: 15px;
    font-family: "DFKai-SB";
    margin: 1rem auto;
    padding: 0.5rem;
  }
  .floote{
    width: 100%;
    padding: 1.5rem 1.5rem 2rem 1.5rem;
    text-align: center;
    background-color: #989292;
  }
  .Buynow{
    width: 4.2rem;
    height: 1.6rem;
    padding: 0 0.2rem;
    outline: none;
    border: none;
    background-color: #00ca00;
    color: black;
    border-radius: 15rem;
    margin-left: 70%;
    margin-top: 1.5rem;
  }
</style>


