<!--
 * @Title: designer
 * @Description: 设计器
 * @Author: dscloudy 小云哥
 * @Date: 2021/11/28 11:42 AM
 *     Date          UpdateBy        Description
 * 2021/11/28 11:42 AM   dscloudy    Create File.
 -->
<template>
  <el-dialog v-model="visible"
             fullscreen
             destroy-on-close
             custom-class="designer-dialog"
             title="页面设计器"
             @close="onClose"
             :close-on-press-escape="false">
    <page-designer></page-designer>
  </el-dialog>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
import PageDesigner from '@/components/page-designer/page-designer'

export default defineComponent({
  name: 'designer',
  components: { PageDesigner },
  data () {
    const visible = ref(true)
    const router = useRouter()
    const onClose = () => {
      router.back()
    }
    return {
      visible,
      onClose
    }
  }
})
</script>

<style lang="scss">
@import "~sunshine-lcp-ui/src/scss/base/var";

.designer-dialog {
  .el-dialog__header {
    background-color: $primary-color !important;
    padding: 0 10px;
    height: 40px;
    line-height: 40px;

    .el-dialog__title {
      color: white;
    }

    .el-dialog__headerbtn {
      top: 10px;
    }
  }

  .el-dialog__body {
    height: calc(100% - 40px);
    box-sizing: border-box;
    padding: 0;
    overflow: hidden;
  }
}

//:deep() {
//  .el-dialog__header {
//    background-color: red !important;
//  }
//}
</style>
