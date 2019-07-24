<template>
  <div id="divtodos"
    v-if="status==='All'||status==='Active'&&item.active===false||status==='Complete'&&item.active===true"  :class="[item.id%2===1?'odd-item':'even-item']"
  >
    <span>{{item.id}}.</span>
    <a-checkbox v-model="item.active" />&nbsp;

    <label :class="{finishItem:item.active}" @dblclick="editItem(item.id)">
      <span v-if="!item.isEdit">{{item.name}}</span>
      <span v-else>
        <input v-model="item.name" type="text" @keyup.enter="finishEdit(item.id)" />
      </span>
    </label>
    <a-icon type="close" style="float:right" @click="deleteItem(item.id-1)" />
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["item"],
  computed: {
    status() {
      return this.$store.getters.getStatus;
    }
  },
  methods: {
    editItem(id) {
      this.$store.commit("editItem", id);
    },

    finishEdit(id) {
      this.$store.commit("finishEdit", id);
    },

    deleteItem(id){
      this.$store.commit("remove", id);
    }
  }
};
</script>

