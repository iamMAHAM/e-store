<template>
  <section class="shop">
    <h1 class="heading">Liste <span>Produits</span></h1>

    <ProductList
      :products="data?.products"
      :total="data?.total"
    />
  </section>
</template>

<script lang="ts" setup>
import { Product } from '.prisma/client';

const { data } = await useFetch<{ products: Product[]; total: number }>(
  '/api/products'
);
</script>
