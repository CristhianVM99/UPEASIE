<script setup>
import { useQuery } from "vue-query";
import { getInstitucion } from "../api/institucionAPI";
import HeaderTwo from "../components/header/HeaderTwo.vue";
import Banner from "../components/home-university/Banner.vue";
import Features from "../components/home-university/Features.vue";
//import About from "../components/home-university/About.vue";
import About from "../components/home-main/About.vue";
import FAQ from "../components/home-online-academy/FAQ.vue";
import FunFact from "../components/home-university/FunFact.vue";
import Course from "../components/home-university/Course.vue";
import Campus from "../components/home-university/Campus.vue";
//import TestimonialThree from "../components/testimonial/TestimonialThree.vue";
import VideoSection from "../components/home-university/Video.vue";
import ContactInfo from "../components/home-university/ContactInfo.vue";
import Event from "../components/event/EventSectionOne.vue";
import Logo from "../components/logo/LogoTwo.vue";
import CTA from "../components/cta/CTAOne.vue";
import FooterThree from "../components/footer/FooterThree.vue";
import Autoridades from "../components/home-university/Autoridades.vue";

const { isLoading: loading_institucion, data: institucion } = useQuery(
    "institucion",
    getInstitucion
);
</script>
<template>
    <div id="main-wrapper" class="main-wrapper" v-if="!loading_institucion">
        <HeaderTwo showHeaderTop="true" :institucion="institucion" />

        <Banner :institucion="institucion" />

        <Features />

        <About :institucion="institucion" />

        <VideoSection :institucion="institucion" />

        <ContactInfo :institucion="institucion" />

        <FAQ :institucion="institucion" />

        <Autoridades :institucion="institucion" /> -->

        <!-- <FunFact />

        <Course />

        <Campus />

        <TestimonialThree />

        <Event extraClass="event-area-1 gap-large-text" />

        <Logo />

        <CTA addClassName="university-cta-wrapper" btnClass="btn-secondary" />
        -->
        <FooterThree />
    </div>
</template>

<style lang="scss" scoped></style>
