<template>
    <div class="flex justify-center items-center h-screen">
        <div class="flex border-4 rounded w-3/5 h-3/5">
            <div class="w-1/2">
                <img class="h-full object-cover object-right" alt="Onibus" src="../assets/onibus.png" />
            </div>
            <div class="flex flex-col justify-center items-center space-y-8 w-1/2">
                <h1 class="text-4xl text-gray-500 font-bold">Login</h1>
                <form class="flex flex-col w-3/5" action="http://localhost:3000/VehiclesVisualization">
                    <label class="text-xl text-gray-500" for="email">Email</label>
                    <input class="border border-black rounded" v-model="email" type="email" id="email" required>
                    <label class="text-xl text-gray-500 mt-3" for="password">Senha</label>
                    <input class="border border-black rounded" v-model="password" type="password" id="password" required>
                    <button type="submit" class="text-center w-full mt-5 text-lg text-white bg-gray-500 rounded py-1">Login</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: ''
        }
    }
}
</script>
