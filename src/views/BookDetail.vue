<script setup>
import { onMounted, ref } from "@vue/runtime-core";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import fetchBook from "../model/fetchBook";

const props = defineProps({ id: String });
const router = useRouter();
const store = useStore();

const book = ref(null);
const count = ref(1);

const getImage = (book) => {};

const getPrice = (book) => {
    return book.onix.ProductSupply.SupplyDetail.Price[0].PriceAmount;
};

const goBookList = () => {
    const item = {
        count: count.value,
        book: book.value,
    };

    store.commit("addCart", item);
    router.push({ name: "BookList" });
};

onMounted(async () => {});
</script>

<template>
    <div v-if="book" class="item__content">
        <div class="item__img-wrapper">
            <img class="item__img" alt="商品画像" :src="getImage(book)" />
        </div>
        <div class="item__name">
            <h2>{{ book.summary.title }}</h2>
        </div>
        <div class="item__price">
            <p>税込{{ getPrice(book) }}円</p>
        </div>
        <form class="form" @submit.prevent="goBookList">
            <div class="form__input--text">
                <input type="number" name="quantity" v-model="count" min="1" />
            </div>
            <div class="form__button">
                <button class="form__button-submit" type="submit">
                    カートに追加する
                </button>
            </div>
        </form>
    </div>
</template>

<style scoped>
.item__content {
    margin: 0 auto;
    padding: 30px 15px;
    max-width: 1230px;
}

.item__img-wrapper,
.item__name,
.item__price,
.form {
    margin: 0 auto;
    width: 70%;
}

.item__img {
    width: 100%;
    height: 500px;

    object-fit: contain;
}

.form__input--text input {
    padding: 10px;
    width: 100%;
    height: 40px;
    border: 1px solid #ddd;
    border-radius: 3px;
}

.form__button {
    margin-top: 20px;
}

.form__button-submit {
    padding: 10px;
    width: 30%;
    height: 50px;
    border: none;
    border-radius: 3px;
    background: #000;
    color: #fff;
    cursor: pointer;
}
</style>