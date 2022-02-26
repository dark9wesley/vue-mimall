<template>
  <div class="modal" v-show="showModal">
    <div class="mask"></div>
    <div class="modal-dialog">
      <div class="modal-header">
        <span class="modal-title">{{ title }}</span>
        <span class="modal-close" />
      </div>
      <div class="modal-body">
        <slot name="body"/>
      </div>
      <div class="modal-footer">
        <span class="btn">确定</span>
        <span class="btn">取消</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Modal',
  props: {
    showModal: Boolean,
    title: String,
    btnType:String,  // 按钮类型: 1:确定按钮 2：取消按钮 3：确定取消
    modalType:{        // 弹框类型：小small、中middle、大large、表单form
      type: String,
      default: 'form'
    },
    okText: {
      type: String,
      default: '确定'
    },
    cancelText: {
      type: String,
      default: '取消'
    },
  }
  
}
</script>
<style lang="scss" scoped>
  @import '../assets/scss/mixin.scss';
  @import '../assets/scss/config.scss';

  .modal {
    @include position(fixed);

    .mask {
      @include position(fixed);
      background-color: $colorI;
      opacity: 0.5;
    }
  }
</style>