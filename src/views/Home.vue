<template>
    <Navbar />
    <div class="flex justify-center">
        <div class="flex border-4 rounded w-3/5">
            <div class="flex flex-col justify-around text-center space-y-5 w-1/2 p-10">
                <div class="max-h-124 overflow-y-scroll">
                    <div v-for="route in routes" :key="route.id" class="flex justify-between border m-3 p-3">
                        <p>{{route.name}}</p>
                    </div>
                </div>
            </div>
            <div class="flex flex-col space-y-5 w-1/2 p-10">
                <input class="border-2" type="date">
                <button class="text-lg bg-gray-300 text-center p-5">Entre com dados de ocupação</button>
                <router-link class="text-lg bg-gray-300 text-center p-5" to="Report">Gerar Relátorio</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Navbar from '../components/Navbar.vue'
export default {
    name: 'Home',
    components: {
        Navbar
    },
    data() {
        return {
            routes: []
        }
    },
    methods: {
        getRoutes() {
            axios({
            method: 'get',
            url: 'http://localhost:3000/line',
            }).then((res) => {this.routes = res.data})
        }
    },
    created() {
        this.getRoutes()
    }
}
</script>
