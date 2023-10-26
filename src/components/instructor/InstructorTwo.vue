<template>
    <div class="edu-team-grid team-style-2">
        <div class="inner">
            <div class="thumbnail-wrap">
                <div class="thumbnail">
                    <router-link to="/instructor/instructor-profile">
                        <img
                            :src="foto(autoridad.foto_autoridad)"
                            alt="autoridad"
                        />
                    </router-link>
                </div>
                <ul class="team-share-info">
                    <li>
                        <a
                            aria-label="Facebook"
                            target="_blank"
                            :href="autoridad.facebook_autoridad"
                        >
                            <i class="icon-facebook"></i>
                        </a>
                        <a
                            aria-label="Twitter"
                            target="_blank"
                            :href="autoridad.twiter_autoridad"
                        >
                            <i class="icon-twitter"></i>
                        </a>
                        <a
                            aria-label="Telefono"
                            target="_blank"
                            :href="autoridad.celular_autoridad"
                        >
                            <i class="icon-phone"></i>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="content">
                <h5 class="title">
                    <router-link to="/instructor/instructor-profile">{{
                        autoridad.nombre_autoridad
                    }}</router-link>
                </h5>
                <span class="designation">{{ autoridad.cargo_autoridad }}</span>
                <!-- <p>{{ instructor.excerpt }}</p> -->
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    autoridad: Object,
});

function foto(foto) {
    return `${
        import.meta.env.VITE_APP_ROOT_API
    }/InstitucionUpea/Autoridad/${foto}`;
}
</script>
