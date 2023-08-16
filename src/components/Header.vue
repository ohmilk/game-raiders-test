<script setup>
import {  onMounted, ref } from "vue";

const show = ref(true);
let windowWidth = ref(window.innerWidth);
onMounted(() => {
    if (windowWidth.value < 710){
            show.value = false;
        }else{
            show.value = true;
        }
    window.onresize = () => {
        windowWidth.value = window.innerWidth;
        if (windowWidth.value < 710){
            show.value = false;
        }else{
            show.value = true;
        }
    }
})
const changeShow = () => {
    show.value = !show.value;
}
</script>

<template>
    <div class="header" id="header">
        <!-- <img id="RWD-logo" class="d-shadow" src="../assets/img/logo.png" alt=""> -->
        <div class="nav bgc-pink d-shadow">
            <div id="logo" class="d-shadow">
                <img src="../assets/img/logo.png" alt="">
            </div>
            <button class="nav-btn" @click="changeShow"><i class="fa-solid fa-bars"></i></button>
            <div class="nav-links" v-show="show">
                <button class="nav-btn cancel" @click="changeShow"></button>
                <router-link to="/" class="nav-link c-brown">首頁</router-link>
                <router-link to="/about" class="nav-link c-brown">關於礦石鎮</router-link>
                <router-link to="/chara" class="nav-link c-brown">戀愛對象</router-link>
                <router-link to="/resident" class="nav-link c-brown">礦石鎮居民</router-link>
                <router-link to="/manage" class="nav-link c-brown">經營牧場</router-link>
                <router-link to="/festival" class="nav-link c-brown">節日介紹</router-link>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .header{
        height: 100px;
        position: relative;
        z-index: 1;
        padding: 10px 20px;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        .nav{
            height: 60px;
            display: flex;
            justify-content: center;
            align-content: center;
            position: relative;
            border-radius: 5px;

            #logo{
            width: 30%;
            position: absolute;
            left: -22%;
            bottom: -50%;
            img{
                width: 100%;
            }
            }
            @media screen and (max-width: 1000px) {
                #logo{
                    width: 22%;
                    left: -12%;
                    bottom: -20%;
                }
            }
            @media screen and (max-width: 710px) {
                #logo{
                    position: static;
                    height: 100%;
                    img{
                        width: auto;
                        height: 100%;
                    }
                }
            }

            .nav-btn{
                display: none;
                background-color: #F7A5A5;
                position: absolute;
                top: 10px;
                right: 5px;
            }

            .nav-links{
                padding: 10px 10px 10px 50px;
                border-radius: 5px;
                display: flex;
                justify-content: space-around;
                align-items: center;

                .cancel{
                    width: 25px;
                    height: 25px;
                    border: none;
                    background-image: url(../assets/img/header/navBtn.jpg);
                    background-size: cover;
                    top: 5px;
                    
                }

                
                .nav-link{
                    padding: 5px 20px;

                    &:hover{
                        border-bottom: #F7A5A5 3px solid;
                        }
                }
                @media screen and (max-width: 1000px) {
                            .nav-link{
                                padding: 5px 10px;
                            }
                        }
            }

            @media screen and (max-width: 710px) {
                .nav-links{
                    width: 100%;
                    position: absolute;
                    background-color: #FACECE;
                    filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.6));
                    display: flex;
                    flex-direction: column;
                }
            }
        }

        @media screen and (max-width: 710px) {
                .nav{
                    width: 100%;
                    height: 50px;
                    
                .nav-btn{
                    display: block;
                }
            }
                }
    }
    @media screen and (max-width: 710px) {
        .header{
            height: 70px;
        }
    }
    
</style>