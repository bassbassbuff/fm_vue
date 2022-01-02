<template>
    <div class="columns">
        <div class="column is-3">
            <div class="field">
                <label>Title</label>
                <div class="control">
                    <input type="text" class="input" v-model="file.name">
                </div>
            </div>
        </div>

       
    </div>
</template>

<script>
export default {
    name: 'fileForm',
    props: {
        initialFile: Object
    },
    data() {
        return {
            file: this.initialFile
        }
    }
}
</script>