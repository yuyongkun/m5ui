<template>
    <div class="container">
        <div @click="opts">点击我</div>
        <ui-alert :close="true" @close="show1=false" v-show="show1" transition="ui-fade-transition" mode="out-in">出错了...</ui-alert>
    </div>
</template>
<script>
export default {
    name:"App",
    data(){
        return {
            show1:true
        }
    },
    components:{

    },
    methods: {
        opts(){
            debugger;
            this.alert();
        }
    },

}
</script>

