<template>
    <header class="the-header">
        <div class="the-header__inner">
            <div class="header-utilities">
                <router-link class="the-header__logo" to="/">EC</router-link>
                <nav>
                    <ul class="header-nav">
                        <li class="header-nav__item">
                            <router-link class="header-nav__link" to="/cart">カート</router-link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
</template>

<style scoped>
.the-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: #000;
}

.the-header__inner {
    margin: 0 auto;
    padding: 24px;
    width: 80%;
}

.header-utilities {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.the-header__logo {
    color: #fff;
    text-decoration: none;
    font-weight: bold;
    font-size: 28px;
}

.header-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.header-nav__item {
    margin: 0 20px;
}

.header-nav__link {
    color: #fff;
    text-decoration: none;
}
</style>
