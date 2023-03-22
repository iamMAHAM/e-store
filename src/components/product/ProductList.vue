<template>
  <div
    class="box-container"
    id="recupId"
  >
    <ProductCard
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
    <div class="pacon">
      <vue-awesome-paginate
        :total-items="50"
        :items-per-page="5"
        :max-pages-shown="5"
        v-model="currentPage"
        :on-click="onClickHandler"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Product } from '.prisma/client';

defineProps<{ products: Product[] | null }>();

const onClickHandler = (page: number) => {
  console.log(page);
};

const currentPage = ref(1);
</script>

<style>
.pacon {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.box-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  gap: 3rem;
}

.pagination-container {
  display: flex;
  column-gap: 10px;
}
.paginate-buttons {
  height: 40px;
  width: 40px;
  border-radius: 20px;
  cursor: pointer;
  background-color: rgb(242, 242, 242);
  border: 1px solid rgb(217, 217, 217);
  color: black;
}
.paginate-buttons:hover {
  background-color: #d8d8d8;
}
.active-page {
  background-color: var(--main);
  border: 1px solid var(--main);
  color: white;
}
.active-page:hover {
  background-color: var(--main-hover);
}
</style>
