<!--
 * @Title: test-schema
 * @Description: 测试 swagger 生成 schema
 * @Author: dscloudy 小云哥
 * @Date: 2021/11/28 1:27 AM
 *     Date          UpdateBy        Description
 * 2021/11/28 1:27 AM   dscloudy    Create File.
 -->
<template>
  <ss-page>
    <div>
      <el-input v-model="swaggerUrl" />
      <el-button type="primary" @click="onGetInfBtnClick">swagger接口列表</el-button>
    </div>

  </ss-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { convertSwaggerUrl, getSwaggerInfo } from '@/utils/swagger-utils'

export default defineComponent({
  name: 'test-schema',
  data () {
    const swaggerUrl = ref('http://127.0.0.1:10088/swagger-ui.html')
    const onGetInfBtnClick = () => {
      getSwaggerInfo(convertSwaggerUrl(swaggerUrl.value))
    }
    return {
      swaggerUrl,
      onGetInfBtnClick
    }
  }
})
</script>

<style scoped>
</style>
