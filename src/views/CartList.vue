<script setup>
import { computed } from "@vue/runtime-core";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const router = useRouter();
const store = useStore();

const cart = computed(() => store.state.cart);

if (cart.value.length === 0) {
    alert("カートの中身がありません");
    router.push({ name: "BookList" });
}

const totalPrice = computed();

const getPrice = (book) => {
    return book.onix.ProductSupply.SupplyDetail.Price[0].PriceAmount;
};

const deleteCart = (item) => {
    store.commit("deleteCart", item);
};

const goThanks = () => {
    store.commit("resetCart");
    router.push({ name: "Thanks" });
};
</script>

<template>
    <div class="cart-item__content">
        <div class="cart-item-table">
            <table class="cart-item-table__inner">
                <tr class="cart-item-table__row">
                    <th class="cart-item-table__th">商品名</th>
                    <th class="cart-item-table__th">単価</th>
                    <th class="cart-item-table__th">個数</th>
                    <th class="cart-item-table__th"></th>
                </tr>
                <tr
                    class="cart-item-table__row"
                    v-for="item in cart"
                    :key="item.book.summary.isbn"
                >
                    <td class="cart-item-table__td">
                        <p class="cart-item-table__td-p">
                            {{ item.book.summary.title }}
                        </p>
                    </td>
                    <td class="cart-item-table__td">
                        <p class="cart-item-table__td-p">
                            税込{{ getPrice(item.book) }}円
                        </p>
                    </td>
                    <td class="cart-item-table__td">
                        <input
                            class="cart-item-table__td-input"
                            type="number"
                            name="quantity"
                            v-model="item.count"
                        />
                    </td>
                    <td class="cart-item-table__td">
                        <div class="delete-form__button">
                            <button
                                @click="deleteCart(item.book)"
                                class="delete-form__button-submit"
                                type="submit"
                            >
                                削除
                            </button>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
        <div class="cart-item__subtotal">
            <p>小計：¥{{ totalPrice }}</p>
        </div>
        <form class="form" @submit.prevent="goThanks">
            <div class="form__button">
                <button class="form__button-submit" type="submit">
                    購入する
                </button>
            </div>
        </form>
    </div>
</template>

<style scoped>
.cart-item__content {
    margin: 0 auto;
    padding: 30px 15px;
    max-width: 1230px;
}

.cart-item-table__inner {
    width: 100%;
}

.cart-item-table__row {
    border-bottom: 1px solid #ddd;
}

.cart-item-table__th {
    padding: 12px;
    text-align: left;
    font-weight: bold;
}

.cart-item-table__td {
    padding: 8px 12px;
}

.cart-item-table__td-input {
    width: 100px;
    outline: none;
    border: none;
}

.cart-item-table__td-p {
    text-align: left;
    font-size: 13px;
}

.delete-form__button {
    width: 50px;
}

.delete-form__button-submit {
    padding: 5px;
    width: 100%;
    border: none;
    border-radius: 3px;
    background: #ff0000;
    color: #fff;
    cursor: pointer;
}

.cart-item__subtotal {
    text-align: right;
    font-weight: bold;
}

.form__button {
    margin-top: 20px;
    text-align: center;
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