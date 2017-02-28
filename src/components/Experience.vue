<template>
      <div class="experience">
          <div class="am-g am-g-fixed">
              <div class="am-u-sm-6 am-u-md-4 am-u-lg-3">
                  <Menuleft></Menuleft>
              </div>
              <div class="am-u-sm-6 am-u-md-8 am-u-lg-9">
                   <div class="all_page">
                       <div class="header">
                           <div class="title">{{ $t("experience") }}</div>
                           <div class="line"></div>
                       </div>
                       <div v-if="this.$store.state.lang=='en'" class="content">
                           <el-alert
                                   title="None English"
                                   type="success"
                                   :closable="false">
                           </el-alert>
                       </div>
                       <div v-if="this.$store.state.lang=='tw'" class="content">
                           <div class="am-g am-g-fixed">
                               <div class="am-u-sm-12 list">
                                   <div class="list_title">公司名稱</div>
                                   <div class="list_content">鼎聚網路股份有限公司</div>
                               </div>
                               <div class="am-u-sm-12 list">
                                   <div class="list_title">年資</div>
                                   <div class="list_content">2014年11月~至今在職 共3年
                                   </div>
                               </div>
                               <div class="am-u-sm-12 list">
                                   <div class="list_title">職稱</div>
                                   <div class="list_content">全端開發</div>
                               </div>
                               <div class="am-u-sm-12 list">
                                   <div class="list_title">相關技能</div>
                                   <div class="list_content">
                                       <div class="skill">語言工具</div>Html、Css、Stylus、Javascript、Php、MVVM、MVC、RWD <br>
                                       <div class="skill">框架工具</div>Bootstrap、Codeigniter、Vue.js、Element、Amazeui <br>
                                       <div class="skill">其他工具</div>PS、AI、Phpstorm、Github
                                   </div>
                               </div>
                               <div class="am-u-sm-12 list">
                                   <div class="list_title">前端視覺設計</div>
                                   <div class="list_content">
                                       <div>1. 與客戶溝通色彩配色以及版面排版設計</div>
                                       <div>2. 使用者經驗與體驗操作流程設計</div>
                                   </div>
                               </div>
                               <div class="am-u-sm-12 list">
                                   <div class="list_title">前端工程開發</div>
                                   <div class="list_content">
                                       <div>1 .前端工程框架效果設計</div>
                                       <div>2. 使用者經驗與體驗操作流程設計</div>
                                       <div>3. API與後端串接及拋轉</div>
                                       <div>4. 前端系統安全防護</div>
                                   </div>
                               </div>
                               <div class="am-u-sm-12 list">
                                   <div class="list_title">後端工程開發</div>
                                   <div class="list_content">
                                       <div>1. 後端系統功能開發</div>
                                       <div>2. 與前端串接API</div>
                                       <div>3. SQL架構規劃</div>
                                   </div>
                               </div>
                           </div>
                         </div>
              </div>
          </div>
      </div>
</template>
<script>
    import Menuleft from './common/Menuleft.vue'
    export default {
        name:'experience',
        components:{
            Menuleft,
        }
    }
</script>


