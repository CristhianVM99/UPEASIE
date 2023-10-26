<template>
    <div>
        <div
            class="video-area-2 bg-image--14 bg-image"
            :style="{ backgroundImage: `url(${img})` }"
        >
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-6 col-md-8">
                        <div class="video-banner-content">
                            <div class="video-btn">
                                <span>
                                    <a
                                        @click="toggler = !toggler"
                                        class="video-play-btn video-popup-activation"
                                    >
                                        <i class="icon-18"></i>
                                    </a>
                                </span>
                            </div>
                            <h2 class="title">
                                Universidad Pública de El Alto Desafiando
                                límites y construyendo sueños
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <FsLightbox :toggler="toggler" :sources="[video]" />
    </div>
</template>

<script setup>
import { ref } from "vue";
import RandomImage from "../../utils/RandomImage";
import FsLightbox from "fslightbox-vue/v3";

const props = defineProps({
    institucion: Object,
});

/* DATOS A MOSTRAR */
const img = RandomImage(props.institucion.portada);
const video = ref(props.institucion.institucion_link_video_vision).value;
const toggler = ref(false);
</script>
