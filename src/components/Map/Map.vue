<template>
    <yandex-map
      v-model="map"
      :settings="{
        location: {
          center: [47.886178, 56.631600],
          zoom: 9,
        },
      }"
      width="100%"
      height="100vh"
  >
  <yandex-map-default-scheme-layer />
    <yandex-map-controls :settings="{ position: 'right' }">
      <yandex-map-zoom-control />
    </yandex-map-controls>
  </yandex-map>
</template>

<script setup>
import { shallowRef } from 'vue';
import {
  YandexMap,
  YandexMapControls,
  YandexMapDefaultSchemeLayer,
  YandexMapZoomControl,
} from "vue-yandex-maps";

const map = shallowRef(null);
</script>