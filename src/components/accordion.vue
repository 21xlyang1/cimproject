<template>
  <div>
    <router-link
      class="btn border-0 p-0 w-100 rounded-0"
      aria-current="page"
      to="/index"
      id="headingOne"
      data-bs-toggle="collapse"
      :data-bs-target="'#' + itemid"
      aria-expanded="true"
      :aria-controls="itemid"
    >
      <div class="row m-0" style="width: 100%; height: 40px">
        <div class="col-4 ps-2 align-items-center d-flex">
          <img :src="src" style="height: 24px" alt="" />
        </div>
        <div class="col-5 align-items-center d-flex text-light">
          <div>{{ itemName }}</div>
        </div>
        <div class="col-3 align-items-center d-flex">
          <div class="">
            <i
              :class="[
                {
                  'bi-chevron-down': isCollapsed,
                  'bi-chevron-right': !isCollapsed,
                },
              ]"
            ></i>
          </div>
        </div>
      </div>
    </router-link>
    <div
      :id="itemid"
      class="accordion-collapse collapse border-0"
      aria-labelledby="headingOne"
      data-bs-parent="#accordionExample"
      :class="{ show: isCollapsed }"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "accordion",
  props: ["itemName", "src", "itemid"],
  data() {
    return {
      isCollapsed: true,
    };
  },

};
</script>

<style lang="css" scoped>
.bi-chevron-right {
  transform: rotate(-90deg);
}
</style>
