<template>
      <div class="information">
          <div class="am-g am-g-fixed">
              <div class="am-u-sm-6 am-u-md-4 am-u-lg-3">
                  <Menuleft></Menuleft>
              </div>
              <div class="am-u-sm-6 am-u-md-8 am-u-lg-9">
                   <div class="all_page">
                       <div class="header">
                           <div class="title">{{ $t("information") }}</div>
                           <div class="line"></div>
                       </div>
                       <div class="content">
                           <div class="myimg"><img src="../assets/memberimg.jpg" /></div>
                           <div class="am-g am-g-fixed">
                               <div class="am-u-sm-6 list">
                                   <div class="list_title">{{ $t("name") }}</div>
                                   <div class="list_content" v-if="this.$store.state.lang=='tw'">葉鈁宇</div>
                                   <div class="list_content" v-if="this.$store.state.lang=='en'">Yah Fang Yu</div>
                               </div>
                               <div class="am-u-sm-6 list">
                                   <div class="list_title">{{ $t("birthday") }}</div>
                                   <div class="list_content">1990/02/05</div>
                               </div>
                               <div class="am-u-sm-6 list">
                                   <div class="list_title">{{ $t("sex") }}</div>
                                   <div class="list_content" v-if="this.$store.state.lang=='tw'">男性</div>
                                   <div class="list_content" v-if="this.$store.state.lang=='en'">Male</div>
                               </div>
                               <div class="am-u-sm-6 list">
                                   <div class="list_title">{{ $t("maritalstatus") }}</div>
                                   <div class="list_content" v-if="this.$store.state.lang=='tw'">未婚</div>
                                   <div class="list_content" v-if="this.$store.state.lang=='en'">Single</div>
                               </div>
                               <div class="am-u-sm-6 list">
                                   <div class="list_title">{{ $t("address") }}</div>
                                   <div class="list_content" v-if="this.$store.state.lang=='tw'">台中市</div>
                                   <div class="list_content" v-if="this.$store.state.lang=='en'">Taichung</div>
                               </div>
                               <div class="am-u-sm-6 list">
                                   <div class="list_title">{{ $t("military") }}</div>
                                   <div class="list_content" v-if="this.$store.state.lang=='tw'">役畢( 2014/年 )</div>
                                   <div class="list_content" v-if="this.$store.state.lang=='en'">Retire( 2014/Year )</div>
                               </div>
                               <div class="am-u-sm-6 list">
                                   <div class="list_title">{{ $t("birthplace") }}</div>
                                   <div class="list_content" v-if="this.$store.state.lang=='tw'">苗栗縣</div>
                                   <div class="list_content" v-if="this.$store.state.lang=='en'">Miaoli</div>
                               </div>
                               <div class="am-u-sm-6 list">
                                   <div class="list_title">{{ $t("phone") }}</div>
                                   <div class="list_content">0955853725</div>
                               </div>
                               <div class="am-u-sm-6 list">
                                   <div class="list_title">{{ $t("email") }}</div>
                                   <div class="list_content">ye0205414225@gmail.com</div>
                               </div>
                               <div class="am-u-sm-6 list">
                                   <div class="list_title">{{ $t("education") }}</div>
                                   <div class="list_content" v-if="this.$store.state.lang=='tw'">嶺東科技大學視覺傳達設計系<br>( 2009 ~ 2013 )</div>
                                   <div class="list_content" v-if="this.$store.state.lang=='en'">Ling Tung University.( 2009 ~ 2013 )</div>
                               </div>
                           </div>
                       </div>
                   </div>
              </div>
          </div>
      </div>
</template>
<script>
    import { mapActions } from 'vuex';
    import Menuleft from './common/Menuleft.vue'
    export default {
        name:'information',
        components:{
            Menuleft,
        },
        data() {
            return {
                lang: this.$store.state.lang
            };
        },
        methods: {
            ...mapActions([
                'setLanguage'
            ]),
        }
    }
</script>


