<template>
    <div>
        <div>
            <BotLog :log='log' v-for="log in logs"/>
        </div>
        <div>
            <input type='text' v-model='sendData.text'>
            <input type='button' value='送信' @click='addLog'>
        </div>
    </div>
</template>
<script>
import BotLog from '@/components/BotLog.vue'
export default {
    name: 'Bot',
    components: {
        BotLog
    },
    methods: {
        addLog(){
            this.logs.push(Object.assign({},this.sendData))
            this.axios.post('/sendMsg', this.sendData)
            .then((res) => {
                this.logs.push({
                    speaker: 'bot',
                    text: res.data.text
                })
            })
            this.sendData.text = ''
        }
    },
    data: () => ({
        logs:[],
        sendData : {
            speaker: 'user',
            text: ''
        },
    }),
}
</script>
<style>

</style>