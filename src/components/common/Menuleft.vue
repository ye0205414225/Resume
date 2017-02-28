<template>
      <div class="menu">
          <el-button :plain="true" @click="setLanguage( 'tw' )" size="mini">繁中</el-button>
          <el-button :plain="true" @click="setLanguage( 'en' )" size="mini">EN</el-button>
          <h3>{{ $t("menu") }}</h3>

             <ul>
                 <li><router-link :to="{ path: 'Information' }"><i class="el-icon-edit"></i> {{ $t("information") }}</router-link></li>
                 <li><router-link :to="{ path: 'About' }"><i class="el-icon-document"></i> {{ $t("about") }}</router-link></li>
                 <li><router-link :to="{ path: 'Experience' }"><i class="el-icon-search"></i> {{ $t("experience") }}</router-link></li>
                 <li><router-link :to="{ path: 'Gallery' }"><i class="el-icon-share"></i> {{ $t("work") }}</router-link></li>
             </ul>

      </div>
</template>
<script>

    import { mapActions } from 'vuex'
    export default {
        name:'menu',
        data() {
            return {
                lang: this.$store.state.lang
            };
        },
        methods: {
            ...mapActions(['setLanguage'])

        }
    }
</script>


