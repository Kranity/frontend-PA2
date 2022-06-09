<template>
    <!-- Tela -->
    <Navbar />
    <div class="flex justify-center">
        <div class="border-4 rounded w-3/5">
            <div class="grid grid-cols-12 bg-gray-300">
                <div class="flex justify-center items-center col-span-6 col-start-4">
                    <h1 class="text-3xl font-semibold p-5">Visualização de Rotas</h1>
                </div>
                <div class="flex justify-end items-center col-span-3">
                    <button @click="toggleModal = !toggleModal" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-10 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" type="button" data-modal-toggle="default-modal">Adicionar</button>
                </div>
            </div>
            <div class="max-h-124 overflow-y-scroll">
                <div v-for="route in routes" :key="route.id" class="flex justify-between items-center border-2 m-3 p-3">
                    <p>{{route.name}}</p>
                    <div class="space-x-5 font-bold text-white">
                        <VisualizationModal :item="route"/>
                        <DeleteModal message="está Rota"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Tela -->

    <!-- Modal de Cadastro -->
    <div v-if="toggleModal" class="flex bg-gray-900 bg-opacity-50 dark:bg-opacity-80 overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center h-modal md:h-full md:inset-0">
        <div class="relative px-4 w-full max-w-2xl h-full md:h-auto">
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <button @click="toggleModal = !toggleModal" type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="authentication-modal">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
                </button>
                <div class="py-6 px-6 lg:px-8">
                    <h3 class="mb-4 text-2xl font-medium text-gray-900 dark:text-white">Cadastro de Rotas</h3>
                    <form class="space-y-6">
                        <div>
                            <label for="name" class="block mb-2 text-md font-medium text-gray-900 dark:text-gray-300">Nome</label>
                            <input type="text" v-model="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required>
                        </div>
                        <div>
                            <label for="description" class="block mb-2 text-md font-medium text-gray-900 dark:text-gray-300">Descrição (opcional)</label>
                            <input type="text" v-model="description" id="description" class="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
                        </div>
                        <div class="h-80 overflow-y-scroll border-4 rounded p-3">
                            <div v-for="stop in stops" :key="stop.id" class="flex items-center">
                                <input class="border border-black rounded" v-model="selectedStops" :value="stop.id" type="checkbox">
                                <label class="text-xl text-gray-500 pl-3">{{stop.name}}</label>
                            </div>
                        </div>
                        <button @click="postRoute" type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Cadastrar</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <!-- Modal de Cadastro -->
</template>

<script>
import axios from 'axios'
import Navbar from '../../components/Navbar.vue'
import VisualizationModal from './VisualizationModal.vue'
import DeleteModal from '../../components/DeleteModal.vue'
export default {
    name: 'RoutesVisualization',
    components: {
        Navbar,
        VisualizationModal,
        DeleteModal
    },
    data() {
        return {
            name: '',
            description: '',
            stops: [],
            selectedStops: [],
            routes: [],
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
        getPoints() {
            axios({
            method: 'get',
            url: 'http://localhost:8080/stop',
            }).then((res) => {this.stops = res.data})
        },
        postRoute() {
            axios({
            method: 'post',
            url: 'http://localhost:8080/line',
            data: {
                name: this.name,
                description: this.description,
                stops: this.selectedStops.map((id, order) => ({order: order + 1, id_stop: id}))
            }
            }).then((res) => {console.log(res)})
        },
        deleteRoute() {
            axios({
            method: 'delete',
            url: 'http://localhost:8080/line',
            data: {
                model: this.model,
                capacity: parseFloat(this.capacity),
                height: parseFloat(this.height),
                width: parseFloat(this.width),
                length: parseFloat(this.length),
                weight: parseFloat(this.weight)
            }
            }).then((res) => {console.log(res)})
        }
    },
    created() {
        this.getRoutes()
        this.getPoints()
    }
}
</script>
