<template>
      <div class="gallery">
          <div class="am-g am-g-fixed">
              <div class="am-u-sm-6 am-u-md-4 am-u-lg-3">
                  <Menuleft></Menuleft>
              </div>
              <div class="am-u-sm-6 am-u-md-8 am-u-lg-9">
                   <div class="all_page">
                       <div class="header">
                           <div class="title">{{ $t("work") }}</div>
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
                           <h4>以下是這三年以來累積製作的案件，因為公司人手少的關係，所以前後端都需要互相支援接手。</h4>


                               <el-collapse v-model="activeName" accordion>
                                   <el-collapse-item title="1. 一般形象網站" name="1">
                                       <div class="am-u-sm-12 list">
                                       <div class="list_content">
                                           <a href="http://din-j.webs.email/" target="_blank">鼎聚網路官網</a>
                                       </div>
                                       <div class="list_content">
                                           <a href="http://www.sunpu.com.tw/" target="_blank">三普環境分析</a>
                                       </div>
                                       <div class="list_content">
                                           <a href="http://www.sunpu.com.tw/" target="_blank">大化材料</a>
                                       </div>
                                       <div class="list_content">
                                           <a href="http://www.fenchihu.com.tw/" target="_blank">奮起湖大飯店</a>
                                       </div>
                                       <div class="list_content">
                                           <a href="http://www.bamboorock.com.tw/" target="_blank">日月潭竹石園會館</a>
                                       </div>
                                       <div class="list_content">
                                           <a href="http://www.sunpu.com.tw/" target="_blank">兆鉅企業</a>
                                       </div>
                                       <div class="list_content">
                                           <a href="http://www.yc080.com/" target="_blank">揚采旗幟</a>
                                       </div>
                                       <div class="list_content">
                                           <a href="http://www.larchotel.com.tw/" target="_blank">南科商旅</a>
                                       </div>
                                       <div class="list_content">
                                           <a href="http://www.hannas.com.tw/" target="_blank">韓娜絲診所</a>
                                       </div>
                                       <div class="list_content">
                                           <a href="http://www.bfl.com.tw/" target="_blank">比佛利山莊</a>
                                       </div>
                                       <div class="list_content">
                                           <a href="http://www.kingshine.com.tw/" target="_blank">鑫盛影視</a>
                                       </div>
                                       <div class="list_content">
                                           <a href="http://tauyuan-travel.com/" target="_blank">高雄市桃源區活動網站</a>
                                       </div>
                                       <div class="list_content">
                                           <a href="http://mimweb.1798boce.com/" target="_blank">mimi創業平台</a>
                                       </div>
                                       <div class="list_content">
                                           <a href="http://copperalliance.org.tw/" target="_blank">國際銅業學會</a>
                                       </div>
                                     </div>
                                   </el-collapse-item>
                                   <el-collapse-item title="2. 多功能型錄網站" name="2">
                                       <div class="am-u-sm-12 list">
                                           <div></div>
                                           <div class="list_content">
                                               <a href="http://www.s-gear.com/" target="_blank">百承眼鏡</a>
                                           </div>
                                           <div class="list_content">
                                               <a href="http://www.showjack.tw/" target="_blank">水電修繕平台</a>
                                           </div>
                                           <div class="list_content">
                                               <a href="http://www.tlea.tw/" target="_blank">台灣景觀學會資訊網站</a>
                                           </div>
                                           <div class="list_content">
                                               <a href="http://www.tcma.com.tw/" target="_blank">玩具公會</a>
                                           </div>
                                           <div class="list_content">
                                               <a href="http://www.howyoungtaiwan.com.tw/" target="_blank">好漾台灣</a>
                                           </div>
                                           <div class="list_content">
                                               <a href="http://www.sanger.com.tw/" target="_blank">上格印刷</a>
                                           </div>
                                       </div>
                                   </el-collapse-item>
                                   <el-collapse-item title="3. 購物網站" name="3">
                                       <div class="am-u-sm-12 list">
                                           <div class="list_content">
                                               <a href="http://www.mjoin.life/" target="_blank">Mjoin購物商城	</a>
                                           </div>
                                           <div class="list_content">
                                               <a href="http://www.taste-seed.com.tw/" target="_blank">成人玩具購物站</a>
                                           </div>
                                           <div class="list_content">
                                               <a href="http://www.cjwine.com/" target="_blank">藏酒酒莊</a>
                                           </div>
                                           <div class="list_content">
                                               <a href="http://www.gohams.com/" target="_blank">Hams品牌購物站</a>
                                           </div>
                                           <div class="list_content">
                                               <a href="http://www.etenbakery.com/" target="_blank">伊藤麵包</a>
                                           </div>
                                           <div class="list_content">
                                               <a href="http://www.ezhousemarket.com/" target="_blank">寬心園購物平台</a>
                                           </div>
                                       </div>
                                   </el-collapse-item>
                                   <el-collapse-item title="4. 多功能購物網站" name="4">
                                       <div class="am-u-sm-12 list">
                                           <div></div>
                                           <div class="list_content">
                                               <a href="https://www.roamplus.net/" target="_blank">Wifi全球漫遊</a>
                                           </div>
                                           <div class="list_content">
                                               <a href="http://www.drpro.com.tw/" target="_blank">普羅博士羽球網</a>
                                           </div>
                                           <div class="list_content">
                                               <a href="http://www.newtrilib.com.tw/" target="_blank">中國醫藥大學新食圖</a>
                                           </div>
                                       </div>
                                   </el-collapse-item>
                                   <el-collapse-item title="5. 大型系統" name="5">
                                       <div class="am-u-sm-12 list">

                                           <div class="list_content">
                                               <a href="https://www.kafen.com.tw/" target="_blank">卡芬洗髮精</a>
                                           </div>
                                           <div class="list_content">
                                               <a href="https://210.75.1.102:8899" target="_blank">Skechers人事電子簽核系統</a>
                                           </div>
                                       </div>
                                   </el-collapse-item>
                               </el-collapse>







                       </div>
                   </div>
              </div>
          </div>
      </div>
</template>
<script>
    import Menuleft from './common/Menuleft.vue'
    export default {
        name:'gallery',
        data() {
            return {
                activeName: '0'
            };
        },
        components:{
            Menuleft,
        }
    }
</script>


