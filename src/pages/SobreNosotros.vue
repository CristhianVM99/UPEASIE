<script setup>
//import HeaderOne from "../components/header/HeaderOne.vue"
import HeaderTwo from "../components/header/HeaderTwo.vue";
import BreadCrumbOne from "../components/common/BreadCrumbOne.vue";
import { getInstitucion } from "../api/institucionAPI";
import { useQuery } from "vue-query";
import About from "../components/about-us-one/About.vue";
import LogoTwo from "../components/logo/LogoTwo.vue";
import WhyChoose from "../components/about-us-one/WhyChoose.vue";
//import TestimonialTwo from "../components/testimonial/TestimonialTwo.vue";
import FunFact from "../components/about-us-one/FunFact.vue";
//import Instructor from "../components/about-us-one/Instructor.vue";
// import FooterOne from "../components/footer/FooterOne.vue";
import FooterThree from "../components/footer/FooterThree.vue";

const { isLoading: loading_institucion, data: institucion } = useQuery(
    "institucion",
    getInstitucion
);
</script>

<template>
    <div id="main-wrapper" class="main-wrapper" v-if="!loading_institucion">
        <HeaderTwo :institucion="institucion" showHeaderTop="true" />

        <BreadCrumbOne
            pageTitle="Sobre Nosotros"
            title="Sobre Nosotros"
            :institucion="institucion"
        />

        <About />

        <LogoTwo />

        <WhyChoose />

        <!-- <TestimonialTwo /> -->

        <FunFact />

        <!-- <Instructor /> -->

        <FooterThree />
    </div>
</template>
