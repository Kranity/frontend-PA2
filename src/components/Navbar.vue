<template>
    <nav class="bg-white border-gray-200 px-4 py-10 dark:bg-gray-800 mb-10">
        <div class="container flex flex-wrap justify-around items-center mx-auto">
            <img src="../assets/logo.png" class="mr-3 h-10" alt="Logo" />
            <div class="block w-auto">
                <ul class="flex flex-row space-x-8 mt-0 text-md font-medium">
                    <li>
                         <router-link to="Report" class="block py-2 pr-4 pl-3 text-white">Relátorio</router-link>
                    </li>
                    <li>
                         <router-link to="VehiclesVisualization" class="block py-2 pr-4 pl-3 text-white">Veículos</router-link>
                    </li>
                    <li>
                        <router-link to="RoutesVisualization" class="block py-2 pr-4 pl-3 text-white">Rotas</router-link>
                    </li>
                    <li>
                        <router-link to="PointsVisualization" class="block py-2 pr-4 pl-3 text-white">Pontos</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
