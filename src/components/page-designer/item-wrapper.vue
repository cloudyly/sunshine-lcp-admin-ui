<!--
 * @Title: item-wrapper
 * @Description:
 * @Author: dscloudy 小云哥
 * @Date: 2021/11/29 12:14 AM
 *     Date          UpdateBy        Description
 * 2021/11/29 12:14 AM   dscloudy    Create File.
 -->
<template>
  <div class="item-wrapper">
    <slot></slot>
    <div class="btn-list">
      <div class="btn" @click="onBtnRemoveClick">移除</div>
      <div class="btn" @click="onBtnUpClick">上移</div>
      <div class="btn" @click="onBtnDownClick">下移</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

const EVENT_REMOVE = 'remove'
const EVENT_UP = 'up'
const EVENT_DOWN = 'down'

export default defineComponent({
  name: 'item-wrapper',
  props: {
    index: {
      type: Number,
      required: true
    }
  },
  emits: [
    EVENT_REMOVE,
    EVENT_UP,
    EVENT_DOWN
  ],
  setup (props, { emit }) {
    const onBtnRemoveClick = () => {
      emit(EVENT_REMOVE)
    }
    const onBtnUpClick = () => {
      emit(EVENT_UP)
    }
    const onBtnDownClick = () => {
      emit(EVENT_DOWN)
    }
    return {
      onBtnRemoveClick,
      onBtnUpClick,
      onBtnDownClick
    }
  }
})
</script>

<style scoped lang="scss">
.item-wrapper {
  position: relative;

  .btn-list {
    display: none;
    position: absolute;
    bottom: 2px;
    right: 2px;

    .btn {
      background-color: #9b9797;
      margin-left: 10px;
      padding: 3px 8px;
      color: white;
      font-size: 12px;
      border-radius: 3px;
      cursor: pointer;

      &:hover {
        background-color: #868282;
      }
    }
  }

  &:hover {
    padding: 1px 1px 5px;
    border: 1px dashed #868282;

    .btn-list {
      display: flex;
    }
  }
}
</style>
