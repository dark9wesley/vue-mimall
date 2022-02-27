<template>
  <transition name="slide">
    <div class="modal" v-show="showModal">
      <div class="mask"></div>
      <div class="modal-dialog">
        <div class="modal-header">
          <span class="modal-title">{{ title }}</span>
          <span class="icon-close" @click="$emit('cancel')"/>
        </div>
        <div class="modal-body">
          <slot name="body"/>
        </div>
        <div class="modal-footer">
          <span class="btn" v-if="btnType === '1'" @click="$emit('ok')">{{ okText }}</span>
          <span class="btn" v-else-if="btnType === '2'" @click="$emit('cancel')">{{ cancelText }}</span>
          <div class="btn-group" v-else>
            <span class="btn" @click="$emit('ok')">{{ okText }}</span>
            <span class="btn btn-default" @click="$emit('cancel')">{{ cancelText }}</span>
          </div>
        </div>
      </div>
    </div>
  </transition>
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
    z-index: 10;

    .mask {
      @include position(fixed);
      background-color: $colorI;
      opacity: 0.5;
    }

    .modal-dialog {
      @include position(absolute, 50%, 50%, 660px, auto);
      background-color: $colorG;
      transform: translate(-50%, -50%);

      .modal-header {
        height: 60px;
        background-color: $colorG;
        padding: 0 25px;
        font-size: $fontI;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .modal-title {
          font-weight: bold;
        }

        .icon-close {
          @include bgImg(14px, 14px, '/imgs/icon-close.png');
          cursor: pointer;
          transition: transform .5s;

          &:hover {
            transform: scale(1.5);
          }
        }
      }

      .modal-body {
        padding: 42px 40px 52px;
        font-size: $fontJ;
      }

      .modal-footer {
        height: 82px;
        line-height: 82px;
        text-align: center;
        background-color: $colorG;
      }
    }

    &.slide-enter, &.slide-leave-to {
      top: -100%;
    }

    &.slide-enter-active, &.slide-leave-active {
      transition: all .5s;
    }

  }
</style>