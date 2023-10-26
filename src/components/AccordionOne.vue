<template>
    <div class="faq-accordion" id="faq-accordion">
        <div class="accordion">
            <div class="accordion-item">
                <h5 class="accordion-header">
                    <button
                        class="accordion-button"
                        type="button"
                        @click="toggleAccordion('mision')"
                        :aria-expanded="activeTab === 'mision'"
                    >
                        Misión
                    </button>
                </h5>
                <div
                    :id="isActive('mision') ? 'collapseOne' : ''"
                    class="accordion-collapse collapse"
                    :class="{ show: isActive('mision') }"
                    data-bs-parent="#faq-accordion"
                >
                    <div class="accordion-body">
                        <p v-html="mision"></p>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h5 class="accordion-header">
                    <button
                        class="accordion-button"
                        type="button"
                        @click="toggleAccordion('vision')"
                        :aria-expanded="activeTab === 'vision'"
                    >
                        Visión
                    </button>
                </h5>
                <div
                    :id="isActive('vision') ? 'collapseTwo' : ''"
                    class="accordion-collapse collapse"
                    :class="{ show: isActive('vision') }"
                    data-bs-parent="#faq-accordion"
                >
                    <div class="accordion-body">
                        <p v-html="vision"></p>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h5 class="accordion-header">
                    <button
                        class="accordion-button"
                        type="button"
                        @click="toggleAccordion('objetivos')"
                        :aria-expanded="activeTab === 'objetivos'"
                    >
                        Objetivos
                    </button>
                </h5>
                <div
                    :id="isActive('objetivos') ? 'collapseThree' : ''"
                    class="accordion-collapse collapse"
                    :class="{ show: isActive('objetivos') }"
                    data-bs-parent="#faq-accordion"
                >
                    <div class="accordion-body">
                        <p v-html="objetivos"></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
    mision: String,
    vision: String,
    objetivos: String,
});

const activeTab = ref("");

const toggleAccordion = (tab) => {
    activeTab.value = activeTab.value === tab ? "" : tab;
};

const isActive = (tab) => activeTab.value === tab;
</script>
