
<script lang="ts">
import { Watch, Component, Vue, Prop } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import { VNode, CreateElement } from 'vue'

@Component
export default class ${1:ClassName} extends Vue {
  render(): VNode {
    return this.$scopedSlots.default({})
  }
}
</script>

