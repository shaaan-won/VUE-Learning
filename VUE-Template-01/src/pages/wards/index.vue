<script lang="ts" setup>

import Api from '@/Api';
import { AxiosHeaders } from 'axios';
import { onMounted, ref } from 'vue';

const wards = ref([]);

onMounted(() => {
    fetchWards();
});


const fetchWards = () => {
    Api.get("/wards")
        .then(res => {
            console.log(res.data);
            wards.value = res.data;
        })
        .catch(err => {
            console.log(err);
        });
};

// const deleteWard = (id) => {
//     api.delete(`/wards/${id}`)
//         .then(res => {
//             console.log(res);
//             if (res.data.success) {
//                 fetchWards();
//             }
//         })
//         .catch(err => {
//             console.log(err);
//         });
// };
const deleteWard = (id) => {
    if (confirm("Are you sure you want to delete this ward?")) {
        Api.delete(`/wards/${id}`)
            .then(res => {
                if (res.data.success) {
                    fetchWards();
                }
            })
            .catch(err => {
                console.log(err);
            });
    }
};

</script>

<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h4 class="card-title">Wards</h4>
                </div>
                <div class="card-datatable table-responsive">
                    <table class="datatables-basic table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>type</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="ward in wards" :key="ward.id">
                                <td>{{ ward.id }}</td>
                                <td>{{ ward.name }}</td>
                                <td>{{ ward.type }}</td>
                                <td>
                                    <div class="d-flex align-items-center">
                                        <!-- <router-link :to="{ name: 'wards.edit', params: { id: ward.id } }"
                                            class="btn btn-primary me-1 mb-1">
                                            Edit
                                        </router-link>
                                        <button @click="deleteWard(ward.id)" class="btn btn-danger me-1 mb-1">
                                            Delete
                                        </button> -->
                                        <Button>Edit</Button>
                                        <Button color="danger" @click="deleteWard(ward.id)">Delete</Button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>




<style></style>