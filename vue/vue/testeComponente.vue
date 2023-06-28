<template>
    <div>
        <h1 class="diferente"> {{ mensagem }}</h1>
    </div>
</template>
<script>
export default {
    name: 'testeComponente',
    data() {
        return {
            mensagem: 'minha mensagem via'
        }
    }
}
</script>
