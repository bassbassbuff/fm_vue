<template>
    <div class="page-matters">
        <div class="columns is-multiline">
            <div class="column is-12">
                <h1 class="title">Matters</h1>

                <router-link :to="{ name: 'AddMatter' }" class="button is-light mt-4">Add matter</router-link>
            </div>
            
            <div
                class="column is-3"
                v-for="matter in matters"
                v-bind:key="matter.id"
            >
                <div class="box">
                    <h3 class="is-size-4 mb-4">{{ matter.name }}</h3>
                    

                </div>


            </div>
        </div>
    </div>    
</template>

<script>
import axios from 'axios'

export default {
    name: 'Matters',
    data() {
        return {
            matters: []
        }
    },
    mounted() {
        this.getMatters()
    },
    methods: {
        getMatters() {
            axios
                .get('/api/v1/matters/')
                .then(response => {
                    for (let i = 0; i < response.data.length; i++) {
                        this.matters.push(response.data[i])
                    }
                })
        }
        
    }
}
    
</script>