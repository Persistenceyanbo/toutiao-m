<template>
  <div class="login-container">
    <van-nav-bar
      class="app-nav-bar"
      title="注册/登录"
      left-arrow
      @click-left="$router.back()"
    />
    <!-- 登录表单 -->
    <van-cell-group>
      <van-field
        v-model="user.mobile"
        icon-prefix="toutiao"
        left-icon="shouji"
        placeholder="请输入手机号"
      />
      <van-field
        v-model="user.code"
        icon-prefix="toutiao"
        clearable
        left-icon="验证码"
        placeholder="请输入密码"
      >
        <template #button>
          <van-button class="send-btn" size="small" round
            >发送验证码</van-button
          >
        </template>
      </van-field>
    </van-cell-group>
    <div class="login-btn-wrap">
      <van-button class="login-btn" type="info" block>登录</van-button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'LoginIndex',
  props: {},
  data() {
    return {
      user: {
        mobile: '',
        code: ''
      }
    }
  }
}
</script>
<style lang="less" scoped>
.login-container {
  .send-btn {
    width: 88px;
    height: 23px;
    background-color: #ededed;
    box-sizing: border-box;
    .van-button__text {
      font-size: 11px;
      color: #666;
    }
  }
  .login-btn-wrap {
    padding: 26px 16px;
    .login-btn {
      background-color: #6db4fb;
      border: none;
      .van-button__text {
        font-size: 15px;
      }
    }
  }
}
</style>
