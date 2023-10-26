<template>
    <ul class="edublink-mobile-menu mainmenu">
        <li v-for="(link, i) in menus" :key="i">
            <router-link :to="link.url">
                {{ link.title }}
            </router-link>
            <span class="submenu-toggle" v-if="link.submenu">
                <i class="ri-arrow-down-s-line"></i>
            </span>
            <ul class="submenu-wrapper" v-if="link.submenu">
                <li v-for="(link, i) in link.submenu" :key="i" class="title">
                    <router-link :to="link.url"> {{ link.title }} </router-link>
                    <span class="submenu-toggle" v-if="link.submenu">
                        <i class="ri-arrow-down-s-line"></i>
                    </span>
                    <ul class="submenu-wrapper" v-if="link.submenu">
                        <li v-for="(link, i) in link.submenu" :key="i">
                            <router-link :to="link.url">
                                {{ link.title }}
                            </router-link>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
    </ul>
</template>

<script>
import mobileMenuResponsive from "../../common/mobileMenuResponsive";
export default {
    data() {
        return {
            menus: [
                {
                    url: "",
                    title: "Home",
                    submenu: [
                        {
                            url: "/",
                            title: "EduBlink Education",
                        },
                        {
                            url: "/",
                            title: "Distant Learning",
                        },
                        {
                            url: "/",
                            title: "University",
                        },
                        {
                            url: "/",
                            title: "Online Academy",
                        },
                        {
                            url: "/",
                            title: "Kitchen Coach",
                        },
                        {
                            url: "/",
                            title: "Yoga Instructor",
                        },
                        {
                            url: "/",
                            title: "Kindergarten",
                        },
                        {
                            url: "/",
                            title: "Landing Demo",
                        },
                    ],
                },
                {
                    url: "",
                    title: "Pages",
                    submenu: [
                        {
                            url: "",
                            title: "Inner Pages",
                            submenu: [
                                {
                                    url: "/",
                                    title: "About Us 1",
                                },
                                {
                                    url: "/",
                                    title: "About Us 2",
                                },
                                {
                                    url: "/",
                                    title: "About Us 3",
                                },
                                {
                                    url: "/",
                                    title: "Instructor 1",
                                },
                                {
                                    url: "/",
                                    title: "Instructor 2",
                                },
                                {
                                    url: "/",
                                    title: "Instructor 3",
                                },
                                {
                                    url: "/",
                                    title: "Instructor Profile",
                                },
                                {
                                    url: "/",
                                    title: "Faq's",
                                },
                                {
                                    url: "/",
                                    title: "404 Error",
                                },
                                {
                                    url: "/",
                                    title: "Coming Soon",
                                },
                            ],
                        },
                        {
                            url: "",
                            title: "Inner Pages",
                            submenu: [
                                {
                                    url: "/",
                                    title: "Gallery Grid",
                                },
                                {
                                    url: "/",
                                    title: "Gallery Masonry",
                                },
                                {
                                    url: "/",
                                    title: "Event Grid",
                                },
                                {
                                    url: "/",
                                    title: "Event List",
                                },
                                {
                                    url: "/",
                                    title: "Event Details",
                                },
                                {
                                    url: "/",
                                    title: "Pricing Table",
                                },
                                {
                                    url: "/",
                                    title: "Purchase Guide",
                                },
                                {
                                    url: "/",
                                    title: "Privacy Policy",
                                },
                                {
                                    url: "/",
                                    title: "Terms & Condition",
                                },
                                {
                                    url: "/",
                                    title: "Sign In",
                                },
                            ],
                        },
                        {
                            url: "",
                            title: "Shop Pages",
                            submenu: [
                                {
                                    url: "/",
                                    title: "Shop",
                                },
                                {
                                    url: "/",
                                    title: "Product Details",
                                },
                                {
                                    url: "/",
                                    title: "Cart",
                                },
                                {
                                    url: "/",
                                    title: "Wishlist",
                                },
                                {
                                    url: "/",
                                    title: "Checkout",
                                },
                            ],
                        },
                    ],
                },
                {
                    url: "",
                    title: "Courses",
                    submenu: [
                        {
                            url: "/",
                            title: "Course Style 1",
                        },
                        {
                            url: "/",
                            title: "Course Style 2",
                        },
                        {
                            url: "/",
                            title: "Course Style 3",
                        },
                        {
                            url: "/",
                            title: "Course Style 4",
                        },
                        {
                            url: "/",
                            title: "Course Style 5",
                        },
                        {
                            url: "/",
                            title: "Course Details 1",
                        },
                        {
                            url: "/",
                            title: "Course Details 2",
                        },
                        {
                            url: "/",
                            title: "Course Details 3",
                        },
                    ],
                },
                {
                    url: "",
                    title: "Blog",
                    submenu: [
                        {
                            url: "/",
                            title: "Blog Standard",
                        },
                        {
                            url: "/",
                            title: "Blog Masonry",
                        },
                        {
                            url: "/",
                            title: "Blog List",
                        },
                        {
                            url: "/",
                            title: "Blog Details",
                        },
                    ],
                },
                {
                    url: "",
                    title: "Contact",
                    submenu: [
                        {
                            url: "/",
                            title: "Contact Us",
                        },
                        {
                            url: "/",
                            title: "Contact Me",
                        },
                    ],
                },
            ],
        };
    },
    mounted() {
        mobileMenuResponsive();
    },
};
</script>
