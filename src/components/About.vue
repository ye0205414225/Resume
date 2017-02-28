<template>
      <div class="about">
          <div class="am-g am-g-fixed">
              <div class="am-u-sm-6 am-u-md-4 am-u-lg-3">
                  <Menuleft></Menuleft>
              </div>
              <div class="am-u-sm-6 am-u-md-8 am-u-lg-9">
                   <div class="all_page">
                       <div class="header">
                           <div class="title">{{ $t("about") }}</div>
                           <div class="line"></div>
                       </div>
                       <div v-if="this.$store.state.lang=='en'" class="content">
                           <el-alert
                                   title="None English"
                                   type="success"
                                   :closable="false">
                           </el-alert>
                       </div>
                       <div v-if="this.$store.state.lang=='tw'" class="content" >
                           2014年10月退伍後，在台中尋找IT產業相關的工作機會。 2014年11月進入鼎聚網路進行網站系統開發相關工作，從一開始前端的視覺設計開始做起，循序漸進 的精進自我技能，明白客戶需求進而溝通規劃，系統架構之流程，團隊溝通及錯誤修正，給使用者最好的體驗。<br><br>
                           從原生開發、MVC架構、MVVM學習至今成為全端開發 ，與團隊人員互相支應支援，重視團隊合作及工作對待應有的同理心，喜歡學習 新的技術技能，對此領域的新知識感到濃厚的興趣。
                       </div>
                   </div>
              </div>
          </div>
      </div>
</template>
<script>
    import Menuleft from './common/Menuleft.vue'
    export default {
        name:'about',
        components:{
            Menuleft,
        },
    }


</script>


