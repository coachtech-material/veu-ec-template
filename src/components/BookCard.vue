<script setup>
import { toRefs } from "@vue/runtime-core";
const props = defineProps({ card: Object });
const { card } = toRefs(props);

const getImage = (card) => {};

const getPrice = (card) => {
    return card.onix.ProductSupply.SupplyDetail.Price[0].PriceAmount;
};
</script>

<template>
    <div class="card">
        <div class="card__img-wrapper">
            <img class="card__img" alt="商品画像" :src="getImage(card)" />
        </div>
        <div class="card__body">
            <h3 class="card__title">{{ card.summary.title }}</h3>
            <p class="card__text">税込{{ getPrice(card) }}円</p>
        </div>
    </div>
</template>

<style scoped>
.card {
    margin: 12px 8px;
    width: calc(100% / 4 - 24px);
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
    text-decoration: none;
    cursor: pointer;
}

.card__img {
    display: block;
    width: 100%;
    height: 250px;

    object-fit: contain;
}

.card__body {
    padding: 15px;
    border-top: 1px solid #f2f2f2;
}

.card__title {
    overflow: hidden;
    margin-top: 0px;
    margin-bottom: 5px;
    height: 42px;
    color: #000;
    text-overflow: ellipsis;
    font-size: 14px;

    -webkit-line-clamp: 3;
}

.card__text {
    color: #000;
    font-size: 14px;
}
</style>