<template>
    <div style="margin: 120px 0px 0px">
        <div class="gap-bottom-equal edu-about-area about-style-1">
            <div class="container edublink-animated-shape">
                <div class="row g-5 align-items-center">
                    <div class="col-lg-6">
                        <div class="about-image-gallery">
                            <img
                                class="main-img-1"
                                :src="img1"
                                alt="About Image"
                                style="
                                    width: 370px;
                                    height: 420px;
                                    object-fit: cover;
                                "
                            />
                            <div class="video-box">
                                <div class="inner">
                                    <div class="thumb">
                                        <img
                                            :src="img2"
                                            alt="About Image"
                                            style="
                                                width: 220px;
                                                height: 120px;
                                                object-fit: cover;
                                            "
                                        />
                                        <span>
                                            <a
                                                @click="toggler = !toggler"
                                                class="popup-icon video-popup-activation"
                                            >
                                                <i class="icon-18"></i>
                                            </a>
                                        </span>
                                    </div>
                                    <div class="loading-bar">
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                            <div class="award-status bounce-slide">
                                <div class="inner">
                                    <div class="icon">
                                        <i class="icon-21"></i>
                                    </div>
                                    <div class="content">
                                        <h6 class="title">25+</h6>
                                        <span class="subtitle">Años</span>
                                    </div>
                                </div>
                            </div>

                            <ul class="shape-group">
                                <MouseMove
                                    addClassName="shape-1"
                                    dataDepth="1"
                                    data-aos-delay="500"
                                    data-aos="fade"
                                    data-aos-duration="200"
                                    imgSrc="/images/about/shape-36.png"
                                />
                                <MouseMove
                                    addClassName="shape-2"
                                    dataDepth="-1"
                                    data-aos-delay="500"
                                    data-aos="fade"
                                    data-aos-duration="200"
                                    imgSrc="/images/about/shape-37.png"
                                />
                                <MouseMove
                                    addClassName="shape-3"
                                    dataDepth="1"
                                    data-aos-delay="500"
                                    data-aos="fade"
                                    data-aos-duration="200"
                                    imgSrc="/images/about/shape-02.png"
                                />
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="about-content">
                            <SectionTitle
                                :preTitle="iniciales"
                                title='Desafiando barreras "La lucha imparable de la <span class="color-secondary">Universidad Pública de El Alto"</span>'
                                subTitle="La Universidad Pública de El Alto, ubicada en la ciudad de El Alto en Bolivia, ha sido una institución educativa que ha desafiado numerosas barreras a lo largo de su historia. Fundada en el año 2000, esta universidad ha sido un símbolo de lucha y perseverancia para la comunidad de El Alto y ha brindado oportunidades educativas a miles de estudiantes que de otro modo no hubieran tenido acceso a la educación superior."
                                alignment="section-left"
                            />

                            <ul
                                class="features-list"
                                data-aos-delay="150"
                                data-aos="fade-up"
                                data-aos-duration="800"
                            >
                                <li>
                                    Inclusión educativa para comunidades
                                    marginadas.
                                </li>
                                <li>
                                    Valoración de la diversidad cultural y
                                    étnica.
                                </li>
                                <li>
                                    Investigación científica y desarrollo local
                                    sostenible.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <ul class="shape-group">
                    <MouseMove
                        addClassName="shape-1 circle"
                        dataDepth="-2.3"
                        data-aos-delay="500"
                        data-aos="fade"
                        data-aos-duration="200"
                    />
                </ul>
            </div>
        </div>
        <FsLightbox :toggler="toggler" :sources="[video]" />
    </div>
</template>

<script setup>
import { ref } from "vue";
import SectionTitle from "../../components/common/SectionTitle.vue";
import MouseMove from "../../components/animation/MouseMove.vue";
import RandomImage from "../../utils/RandomImage";
import FsLightbox from "fslightbox-vue/v3";

const props = defineProps({
    institucion: Object,
});

/* datos */
const iniciales = ref(props.institucion.institucion_iniciales);
const img1 = RandomImage(props.institucion.portada);
const img2 = RandomImage(props.institucion.portada);
const video = ref(props.institucion.institucion_link_video_vision).value;
const toggler = ref(false);
</script>
