<template>
    <div class="container mt-5">
        <div class="card">
            <div class="card-header">
                <h4> Agregar Cliente</h4>
                <div v-if="mensaje == 1" class="alert alert-success" role="alert">
                    Datos Guardado con exito!
                </div>
            </div>
            <div class="card-body">
                <Form :validation-schema="validationSchema" @submit="onTodoBien()">
                    <div class="mb-3">
                        ID
                        <Field name="id" id="id" type="text" class="form-control" v-model="model.cliente.id "/>
                        <ErrorMessage name="id"/>
                    </div>
                    <div class="mb-3">
                        Nombre
                        <Field name="nombre" id="nombre" type="text" class="form-control" v-model="model.cliente.nombre"/>
                        <ErrorMessage name="nombre"/>
                    </div>
                    <div class="mb-3">
                        Apellido
                        <Field name="apellido" id="apellido" type="text" class="form-control" v-model="model.cliente.apellido"/>
                        <ErrorMessage name="apellido"/>
                    </div>
                    <div class="mb-3">
                        Direccion
                        <Field name="direccion" id="direccion" type="text" class="form-control" v-model="model.cliente.direccion"/>
                        <ErrorMessage name="direccion"/>
                    </div>
                    <div class="mb-3">
                        Telefono
                        <Field name="telefono" id="telefono" type="text" class="form-control" v-model="model.cliente.telefono"/>
                        <ErrorMessage name="telefono"/>
                    </div>
                    <div class="mb-3">
                        RFC
                        <Field name="rfc" id="rfc" type="text" class="form-control" v-model="model.cliente.rfc"/>
                        <ErrorMessage name="rfc"/>
                    </div>
                    <div class="mb-3">
                        CURP
                        <Field name="curp" id="curp" type="text" class="form-control" v-model="model.cliente.curp"/>
                        <ErrorMessage name="curp"/>
                    </div>
                    <div class="mb-3">
                        CP
                        <Field name="cp" id="cp]" type="text" class="form-control" v-model="model.cliente.cp"/>
                        <ErrorMessage name="cp"/>
                    </div>
                    <div class="mb-3">
                        <button type="submit" class="btn btn-primary"> Guardar </button>
                    </div>
                </Form>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import { Field, Form, ErrorMessage } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import * as zod from 'zod';
    export default{
        nombre: 'crearCliente',
        components: {Field, Form, ErrorMessage},
        data(){
            const validationSchema = toTypedSchema(
                zod.object({
                    id: zod.string({message: 'requerido'}).min(1),
                    nombre: zod.string({message: 'requerido'}).min(1),
                    apellido: zod.string({message: 'requerido'}).min(1),
                    direccion: zod.string({message: 'requerido'}).min(1),
                    telefono: zod.string({message: 'requerido'}).min(1).max(10),
                    rfc: zod.string({message: 'requerido'}).min(1),
                    curp: zod.string({message: 'requerido'}).min(1),
                    cp: zod.string({message: 'requerido'}).min(1),
                })
            )
            return{
                validationSchema,
                mensaje: 0,
                model:{
                    cliente:{
                        id:'',
                        nombre:'',
                        apellido:'',
                        direccion:'',
                        telefono:'',
                        rfc:'',
                        curp:'',
                        cp:''
                    }
                }
            }
        },
        methods:{
            onTodoBien(){
                alert('Todo Bien')
            },
        crearCliente(){
            axios.post('http://localhost:3000/api/clientes', this.model.cliente).then(res =>{
                if(res.data.affectedRows == 1){
                    this.model.cliente = {
                        id:'',
                        nombre:'',
                        apellido:'',
                        direccion:'',
                        telefono:'',
                        rfc:'',
                        curp:'',
                        cp:''
                    }
                    this.mensaje = 1;
                }
            });
        }
    }
}
</script>