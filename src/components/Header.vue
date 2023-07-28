<script setup>
import { ref } from "vue";

const show = ref(true);
</script>

<template>
    <div class="header">
        <!-- <img id="RWD-logo" class="d-shadow" src="../assets/img/logo.png" alt=""> -->
        <div class="nav bgc-pink d-shadow">
            <div id="logo" class="d-shadow">
                <img src="../assets/img/logo.png" alt="">
            </div>
            <div class="nav-links" v-show="show">
                <button class="nav-btn cancel"></button>
                <router-link to="/" class="nav-link c-brown">首頁</router-link>
                <router-link to="/about" class="nav-link c-brown">關於礦石鎮</router-link>
                <a class="nav-link c-brown">戀愛對象</a>
                <a class="nav-link c-brown">礦石鎮居民</a>
                <a class="nav-link c-brown">經營牧場</a>
                <a class="nav-link c-brown">節日介紹</a>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .header{
        height: 70px;
        padding: 10px 20px;
        margin-top: 30px;
        display: flex;
        justify-content: center;
        .nav{
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
                    position: relative;
                    height: 100%;
                }
            }

            .nav-links{
                padding: 5px 10px 5px 50px;
                border-radius: 5px;
                display: flex;
                justify-content: space-around;
                align-items: center;

                .cancel{
                    display: none;
                    width: 25px;
                    height: 25px;
                    border: none;
                    background-image: url(../assets/img/header/navBtn.jpg);
                    background-size: cover;
                    position: absolute;
                    top: 5px;
                    right: 5px;
                }

                @media screen and (max-width: 710px) {
                .cancel{
                    display: block;
                }
            }
                .nav-link{
                    padding: 10px 20px;

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
                }
            }
    }
    
</style>