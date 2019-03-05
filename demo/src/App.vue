<template>
    <div class="container">
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

    }
}
</script>

