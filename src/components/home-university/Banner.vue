<template>
    <div
        class="hero-banner hero-style-3 bg-image"
        :style="{ backgroundImage: `url(${img})` }"
    >
        <div class="container edublink-animated-shape">
            <div class="row">
                <div class="col-xl-6 col-lg-7">
                    <div class="banner-content">
                        <span class="subtitle">{{
                            institucion_iniciales
                        }}</span>
                        <h1 class="title">
                            {{ institucion_nombre }}
                        </h1>
                        <p>La Universidad Del Pueblo y Para El Pueblo</p>
                        <div class="banner-btn">
                            <router-link
                                to="/course/course-one"
                                class="edu-btn btn-secondary"
                                >Areas Y Carreras <i class="icon-4"></i
                            ></router-link>
                        </div>
                    </div>
                </div>
            </div>

            <ul class="shape-group">
                <MouseMove
                    addClassName="shape-1"
                    dataDepth="2"
                    data-aos-delay="200"
                    data-aos="fade"
                    data-aos-duration="200"
                    imgSrc="/images/others/shape-10.png"
                />
                <MouseMove
                    addClassName="shape-2"
                    dataDepth="-3"
                    data-aos-delay="200"
                    data-aos="fade"
                    data-aos-duration="200"
                    imgSrc="/images/others/shape-11.png"
                />
                <li class="shape-3">
                    <img src="/images/others/shape-25.png" alt="Shape" />
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import MouseMove from "../../components/animation/MouseMove.vue";
import RandomImage from "../../utils/RandomImage";

const props = defineProps({
    institucion: Object,
});

const institucion_nombre = ref(props.institucion.institucion_nombre);
const institucion_iniciales = ref(props.institucion.institucion_iniciales);
const img = RandomImage(props.institucion.portada);
</script>
