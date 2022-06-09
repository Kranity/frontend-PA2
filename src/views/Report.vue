<template>
    <Navbar />
    <div class="flex justify-center">
        <div class="flex flex-col border-4 rounded w-1/2 h-3/5">
            <h1 class="text-3xl text-center font-semibold bg-gray-300 p-5">Relatório</h1>
            <div class="flex flex-col max-h-96 overflow-y-scroll w-full">
                <div v-for="route in routes" :key="route.id" class="flex justify-between items-center border-2 m-3 p-3">
                    <button @click="getRoute(route.id)">{{route.name}}</button>
                </div>
            </div>
        </div>
    </div>

    <div v-if="toggleModal" class="flex justify-center items-center overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full">
        <div class="relative p-4 w-full max-w-md h-full md:h-auto">
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <button @click="toggleModal = !toggleModal" type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="popup-modal">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
                </button>
                <div class="p-6 text-center">
                    <p>Rota Antiga</p>
                    <p class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Pontos totais: 19</p>
                    <p class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Distancia: 29.35</p>
                    <p class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Segundos: 3792.63</p>
                    <p>Rota Nova</p>
                    <p class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Pontos totais: 16</p>
                    <p class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Distancia: 28.21</p>
                    <p class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Segundos: 3619.07</p>
                    <button @click="toggleModal = !toggleModal" data-modal-toggle="popup-modal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Fechar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Navbar from '../components/Navbar.vue'
export default {
    name: 'Report',
    components: {
        Navbar
    },
    data() {
        return {
            routes: [],
            route: [],
            toggleModal: false
        }
    },
    methods: {
        getRoutes() {
            axios({
            method: 'get',
            url: 'http://localhost:8080/line',
            }).then((res) => {this.routes = res.data})
        },
        async getRoute(id) {
            await axios({
            method: 'get',
            url: `http://localhost:8080/line/${id}`,
            }).then((res) => {this.route = res.data})
            this.toggleModal = !this.toggleModal
            console.log(this.route)
        },
    },
    created() {
        this.getRoutes()
    }
}
</script>
