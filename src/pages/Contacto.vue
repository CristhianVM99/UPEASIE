Copy code
<script setup>
//import HeaderOne from "../components/header/HeaderOne.vue";
import BreadCrumbTwo from "../components/common/BreadCrumbTwo.vue";
//import FooterOne from "../components/footer/FooterOne.vue";
import FooterThree from "../components/footer/FooterThree.vue";
import MouseMove from "../components/animation/MouseMove.vue";
import HeaderTwo from "../components/header/HeaderTwo.vue";
import { ref } from "vue";
import { getInstitucion } from "../api/institucionAPI";
import { useQuery } from "vue-query";

const resultText = ref("");
const showResult = ref(false);

const { isLoading: loading_institucion, data: institucion } = useQuery(
    "institucion",
    getInstitucion
);
</script>
<template>
    <div id="main-wrapper" class="main-wrapper" v-if="!loading_institucion">
        <HeaderTwo :institucion="institucion" showHeaderTop="true" />

        <BreadCrumbTwo title="Contact Me" />

        <section class="section-gap-equal contact-me-area">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-9">
                        <div class="contact-me">
                            <div class="inner">
                                <div class="thumbnail">
                                    <div class="thumb">
                                        <img
                                            src="/images/others/contact-me.jpg"
                                            alt="Contact Me"
                                        />
                                    </div>
                                    <ul class="shape-group">
                                        <MouseMove
                                            addClassName="shape-1"
                                            dataDepth="1.4"
                                            imgSrc="/images/about/shape-13.png"
                                        />
                                        <MouseMove
                                            addClassName="shape-2"
                                            dataDepth="-1.4"
                                            imgSrc="/images/counterup/shape-02.png"
                                        />
                                        <li class="shape-3">
                                            <img
                                                src="/images/about/shape-07.png"
                                                alt="Shape"
                                            />
                                        </li>
                                    </ul>
                                </div>

                                <div class="contact-us-info">
                                    <h3 class="heading-title">
                                        I will Answer all Your Questions
                                    </h3>
                                    <ul class="address-list">
                                        <li>
                                            <h5 class="title">Address</h5>
                                            <p>
                                                Studio 76d, Riley Ford, North
                                                Michael chester, CF99 6QQ
                                            </p>
                                        </li>
                                        <li>
                                            <h5 class="title">Email</h5>
                                            <p>
                                                <a
                                                    href="mailto:edublink@example.com"
                                                    target="_blank"
                                                    >edublink@example.com</a
                                                >
                                            </p>
                                        </li>
                                        <li>
                                            <h5 class="title">Phone</h5>
                                            <p>
                                                <a href="tel:+0914135548598"
                                                    >(+091) 413 554 8598</a
                                                >
                                            </p>
                                        </li>
                                    </ul>

                                    <ul class="social-share">
                                        <li>
                                            <a href="#"
                                                ><i class="icon-share-alt"></i
                                            ></a>
                                        </li>
                                        <li>
                                            <a href="#"
                                                ><i class="icon-facebook"></i
                                            ></a>
                                        </li>
                                        <li>
                                            <a href="#"
                                                ><i class="icon-twitter"></i
                                            ></a>
                                        </li>
                                        <li>
                                            <a href="#"
                                                ><i class="icon-linkedin2"></i
                                            ></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <FooterThree />
    </div>
</template>
