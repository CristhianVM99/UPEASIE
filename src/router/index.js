import { createRouter, createWebHistory } from "vue-router";
import Principal from "../pages/Principal.vue";
import SobreNosotros from "../pages/SobreNosotros.vue";
import Contacto from "../pages/Contacto.vue";

const routes = [
    { path: "/", component: Principal },
    { path: "/SobreNosotros", component: SobreNosotros },
    { path: "/Contacto", component: Contacto },
    { path: "/Recursos", component: Principal },
    { path: "/Detalle", component: Principal },
    { path: "/Autoridades", component: Principal },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
