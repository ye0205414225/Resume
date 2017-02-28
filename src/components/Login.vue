<template>
    <div class="Login">
        <div class="login_box">

            <el-form :label-position="labelPosition" ref="form" :model="mydata" label-width="80px">
                <div class="lang_select">
                    <el-button :plain="true" @click="setLanguage( 'tw' )" size="mini">繁中</el-button>
                    <el-button :plain="true" @click="setLanguage( 'en' )" size="mini">EN</el-button>
                </div>
                <el-form-item label="">
                    {{ $t("account") }}
                    <el-input v-model="mydata.account"></el-input>
                </el-form-item>
                <el-form-item label="">
                    {{ $t("password") }}
                    <el-input v-model="mydata.checkPass"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitHandler">{{ $t("submit") }}</el-button>
                </el-form-item>
            </el-form>
            <!--<form :model="mydata">
                <h3 class="title">我的登入</h3>

                    <input type="text" v-model="mydata.account" placeholder="账号">


                    <input type="password" v-model="mydata.checkPass"  placeholder="密码">

                         <a @click="submitHandler">123</a>
            </form>  -->
        </div>
    </div>
</template>
<script>
    import NProgress from 'nprogress'
    import { mapActions } from 'vuex'
    export default {
        name:'Login',
        data() {
            return {
                lang: this.$store.state.lang,
                labelPosition: 'top',
                mydata: {
                    account: 'admin',
                    checkPass: '1234567'
                }
            };
        },
        methods: {
            ...mapActions(['login','setLanguage']),
            async submitHandler(){
                var email = this.email;
                var password = this.password;
                var res = await this.login({email,password});
                if( res.status === 'ok'){
                    var redirect = this.$route.query.redirect || "/Information";
                    console.log( redirect );
                    this.$router.replace(redirect);
                    this.$notify({
                        title: '登入成功',
                        message: '歡迎來觀看小雨的履歷',
                        type: 'success'
                    });
                }
            }
        }
    }
</script>

