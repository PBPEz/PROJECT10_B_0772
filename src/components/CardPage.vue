<template>
    <v-main>
        <v-row>
            <v-col>
                <v-card v-for="item in merchandises" :key="item"
                elevation="3"
                :color = "item.color"
                dark
                class="mt-4 mx-1 float-left"
                >
                    <v-card-title class="text-h3">
                        {{ item.merchandise }}
                    </v-card-title>
                </v-card>
            </v-col>
        </v-row>
    </v-main>
     
 </template>
 
 <script>
 import { db } from '../firebase';
 import {ref,set,remove,get,push,onValue} from '@firebase/database'
 
 export default {
     name: "MerchandisePage",
     data () {
         return {
             merchandises: [],
         }
     },
     created() {
         onValue(ref(db, 'merchandises'), (snapshot) => {
             this.merchandises = [],
             snapshot.forEach((merchandise) => {
                 this.merchandises.push({
                     id: merchandise.key,
                     merchandise: merchandise.val().merchandise,
                     artist: merchandise.val().artist,
                     price: merchandise.val().price,
                     stock: merchandise.val().stock,
                     package: merchandise.val().package,
                     color: '#'+(Math.random()*0xFFFFFF<<0).toString(16)
 
                 });
             })
         })
 
     },
 
 }
 
 
 </script>