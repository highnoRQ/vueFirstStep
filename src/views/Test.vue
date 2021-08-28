<template>
    <div>
        <input type='text' v-model='sendData'>
    </div>
    <div>
        <input type='button' @click='getMessage' value='受信'>
        <input type='button' @click='sendMessage' value='送信'>
    </div>
    <div>送るテキスト：{{sendData}}</div>
    <div>受け取ったテキスト：{{getData}}</div>
</template>
<script>
export default {
    name: 'Test',
    methods: {
        getMessage(){
            this.axios.get('/foo')
            .then((res) => {
                this.getData = res.data.msg
            })
        },
        sendMessage(){
            this.axios.post('/bar', { msg: this.sendData })
            .then((res) => {
                this.getData = res.data.msg
            })
        }
    },
    data: () => ({
        sendData: '送信するテキスト',
        getData: '受け取ったテキスト'
    }),
}
</script>