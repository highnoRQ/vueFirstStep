<template>
    <div>
        {{log.speaker}}:{{log.text}}
    </div>
</template>
<script>
export default {
    name: 'BotLog',
    props: {
        log: Object
    },
    methods: {},
    data: () => ({
        
    }),
}
</script>