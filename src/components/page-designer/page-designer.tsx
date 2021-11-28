import { Component, defineComponent, ref } from 'vue'
import './page-designer.scss'
import { SsSearchCard, SsCard } from 'sunshine-lcp-ui'
import ItemWrapper from './item-wrapper.vue'

const componentList = [
  { name: '搜索表单', component: SsSearchCard },
  { name: '高级卡片', component: SsCard }
]

export default defineComponent({
  name: 'page-designer',
  setup () {
    const customComponents = ref<Component[]>([])
    // customComponents.value.push(<ItemWrapper index={0}><div>Hello</div></ItemWrapper>)

    const onRemove = (index: number) => {
      console.log('onRemove', index)
      customComponents.value.splice(index, 1)
    }

    const onUp = (index: number) => {
      if (index === 0) {
        return
      }
      console.log('onUp', index)
      const items = customComponents.value.splice(index, 1)
      customComponents.value.splice(index - 1, 0, items[0])
    }

    const onDown = (index: number) => {
      if (index === customComponents.value.length - 1) {
        return
      }
      console.log('onDown', index)
      const items = customComponents.value.splice(index, 1)
      customComponents.value.splice(index + 1, 0, items[0])
    }

    const onComponentListItemClick = (item: any) => {
      const Comp = item.component
      const schema = {
        properties: {}
      }
      const index = customComponents.value.length
      customComponents.value.push(
        <ItemWrapper
          index={index}
          onRemove={() => onRemove(index)}
          onUp={() => onUp(index)}
          onDown={() => onDown(index)}
        >
          <Comp schema={schema} title="测试"></Comp>
        </ItemWrapper>
      )
    }
    const renderLeft = (): JSX.Element => {
      const components: any = []
      componentList.forEach((item, index) => {
        components.push(<el-button onClick={() => onComponentListItemClick(item)}>{item.name}</el-button>)
      })
      return (
        <div class="designer-left">
          <div>组件列表</div>
          {components}
        </div>
      )
    }

    const renderCenter = (): JSX.Element => {
      return (
        <div class="designer-center">
          <div class="btn-group">
            <el-button type="primary" size="mini">预览</el-button>
            <el-button type="primary" size="mini">导出</el-button>
            <el-button type="primary" size="mini">保存</el-button>
          </div>
          <div class="designer-mock">
            <ss-page>
              {customComponents.value}
            </ss-page>
          </div>
        </div>
      )
    }

    const renderRight = (): JSX.Element => {
      return (
        <div class="designer-right">组件属性</div>
      )
    }

    return () => {
      return (
        <div class="designer-container">
          { renderLeft() }
          { renderCenter() }
          { renderRight() }
        </div>
      )
    }
  }
})
