<template>
    <div class="page-add-matter">
        <nav class="breadcrumb" aria-label="breadcrumbs">
            <ul>
                <li><router-link to="/dashboard">Dashboard</router-link></li>
                <!-- <li><router-link to="/dashboard/invoices">Invoices</router-link></li> -->
                <li class="is-active"><router-link to="/dashboard/matters/add" aria-current="true">Add</router-link></li>
            </ul>
        </nav>

        <div class="columns is-multiline">
            <div class="column is-12">
                <h1 class="title">Add Matter</h1>
            </div>
        </div>

            <div class="column is-12">
                <div class="field">
                    <label>Title</label>
                    <div class="control">
                        <input type="text" name="name" class="input" v-model="matter.name">
                    </div>
                </div>
            </div>

            <div class="column is-12">
                <div class="field">
                    <label>Description</label>
                    <div class="control">
                        <input type="text" name="description" class="input" v-model="matter.description">
                    </div>
                </div>
            </div>

            <div class="column is-12">
                <h2 class="is-size-5 mb-4">Client</h2>
                        <div class="select">
                            <select name="client" v-model="matter.client">
                                <option value="" selected>- Select client -</option>
                                <option 
                                    v-for="client in clients"
                                    v-bind:key="client.id"
                                    v-bind:value="client"
                                >
                                    {{ client.name }}
                                </option>
                            </select>
                        </div>
            </div>


            <div class="column is-12">
                    <div class="field">
                        <div class="control">
                            <button class="button is-success" @click="submitForm">Submit</button>
                        </div>
                    </div>
            </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'AddMatter',
    data() {
        return {
            matter: {
                name: "",
                description: "",
                client: "",
                              
            },
            clients: []
        }
    },
    mounted() {
        this.getClients()
    },
    methods: {
        getClients() {
            axios
                .get('/api/v1/clients/')
                .then(response => {
                    this.clients = response.data
                })
                .catch(error => {
                    console.log(JSON.stringify(error))
                })
        }, submitForm() { 
                
                this.matter.client = this.matter.client.id
                this.matter.description = this.matter.description
                this.matter.name = this.matter.name         
            axios
                .post('/api/v1/matters/', this.matter)
                .then(response => {
                     this.$router.push('/dashboard/matters')
                })
                .catch(error => {
                    console.log(JSON.stringify(error))
                })

        }
    }
}

</script>

<style lang="scss">
    .select, .select select {
        width: 100%;
    }
</style>