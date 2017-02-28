<template>
    <div id="test">
       {{msg}}
        <br>
         {{ count }}
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
    </div>
</template>
<style lang="stylus">
#test
    text-align center
    font-size 30px
    font-weight 500
</style>
<script>

    export default{
        name:'test',
        data(){
            return{
                msg:'hello vue'
            }
        },
        computed: {
            // 使用对象展开运算符将 getters 混入 computed 对象中
            // ...mapGetters([
            //    'getCount'
                // ...
            //])
            count () {
                return this.$store.state.count
            }
        },
        methods: {
            //...mapActions([
            //    'increment', // 映射 this.increment() 为 this.$store.dispatch('increment')
            //    'decrement'
            //])
            //...mapActions({
            //  add: 'increment' // 映射 this.add() 为 this.$store.dispatch('increment')
            //})
            increment () {
                this.$store.commit('increment')
            },
            decrement () {
                this.$store.commit('decrement')
            }

        }

    }
</script>
