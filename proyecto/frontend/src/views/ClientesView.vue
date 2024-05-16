<template>
    <div class="container mt-5">
        <div class="card">
            <div class="card-header">
                <h4> Clientes </h4>
                <RouterLink to="/clientes/create" class="btn btn-primary float-end">
                    Agregar
                </RouterLink>
            </div>
        </div>
        <div class="card-body">
            <table class="table table-bordered table-striped">
                <thead>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Direccion</th>
                    <th>Telefono</th>
                    <th>RFC</th>
                    <th>CURP</th>
                    <th>CP</th>
                    <th>Acciones</th>
                </thead>
                <tbody>
                    <tr v-for ="(cliente,index) in clientes" :key="index">
                        <td> {{ cliente.id }}</td>
                        <td> {{ cliente.nombre }}</td>
                        <td> {{ cliente.direccion }}</td>
                        <td> {{ cliente.apellido }}</td>
                        <td> {{ cliente.telefono }}</td>
                        <td> {{ cliente.rfc }}</td>
                        <td> {{ cliente.curp }}</td>
                        <td> {{ cliente.cp }}</td>
                        <td>
                            <button class="btn btn-primary">
                                Editar
                            </button>
                            <button class="btn btn-danger" @click="borrarCliente(cliente.id)">
                                Borrar
                            </button>
                        </td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td colspan="g" style="text-align: center;"> Sin registros!</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
    import axios from 'axios';
    export default {
        name: "ClientesView",
        data(){
            return{
                clientes: [],
            }

        },
        mounted() {
            this.getClientes()
        },
        methods: {
            getClientes(){
                axios.get('http://localhost:3000/api/clientes').then(res =>{
                    this.clientes = res.data;

                });
            },
            borrarCliente(idClienteDelete){
                axios.delete('http://localhost:3000/api/clientes'+idClienteDelete).then(res=>{
                    console.log(res);
                    this.getClientes();
                })
            }

        }
    }
</script>