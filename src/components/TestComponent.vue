<template>
    <div>
        コンポーネント:{{msg}}
    </div>
</template>
<script>
export default {
    name: 'TestComponent',
    props: {
        msg: String
    },
    methods: {},
    data: () => ({

    }),
}
</script>