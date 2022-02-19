<script setup>
import { onMounted, ref } from "@vue/runtime-core";
import { useRouter } from "vue-router";
import BookCard from "@/components/BookCard.vue";
import fetchBooks from "../model/fetchBooks";

const router = useRouter();

const cards = ref([]);

const goBookDetail = (card) => {
    router.push({ name: "BookDetail", params: { id: isbn } });
};

onMounted(async () => {});
</script>

<template>
    <div class="item__content">
        <div class="card-wrapper">
            <BookCard
                v-for="card in cards"
                :key="card"
                @click="goBookDetail(card)"
                :card="card"
            />
        </div>
    </div>
</template>

<style scoped>
.item__content {
    margin: 0 auto;
    width: 90%;
}
.card-wrapper {
    display: flex;
    flex-wrap: wrap;
    margin-top: 30px;
}
</style>