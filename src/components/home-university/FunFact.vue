<template>
    <div class="counterup-area-1 gap-lg-bottom-equal">
        <div class="container">
            <div class="row g-5">
                <div
                    class="col-lg-3 col-sm-6"
                    v-for="(counter, i) in funFacts"
                    :key="i"
                >
                    <div class="edu-counterup counterup-style-1">
                        <h2
                            class="counter-item count-number"
                            :class="counter.class"
                        >
                            <FunFact
                                :number="counter.number"
                                :decimal="counter.decimal"
                                :suffix="counter.suffix"
                            />
                        </h2>
                        <h6 class="title">{{ counter.title }}</h6>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import FunFact from "../../components/FunFact.vue";

const funFacts = [
    {
        number: 29.3,
        decimal: 1,
        class: "primary-color",
        title: "STUDENT ENROLLED",
        suffix: "K",
    },
    {
        number: 32.4,
        decimal: 1,
        class: "secondary-color",
        title: "CLASS COMPLETED",
        suffix: "K",
    },
    {
        number: 100,
        decimal: null,
        class: "extra02-color",
        title: "SATISFACTION RATE",
        suffix: "%",
    },
    {
        number: 354,
        decimal: null,
        class: "extra05-color",
        title: "TOP INSTRUCTORS",
        suffix: "+",
    },
];
</script>
