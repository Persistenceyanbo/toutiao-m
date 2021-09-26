<template>
  <div class="login-container">
    <van-nav-bar
      class="app-nav-bar"
      title="注册/登录"
      left-arrow
      @click-left="$router.back()"
    />
    <!-- 登录表单 -->
    <!--
      1. 使用van-form 组件包裹所有的表单项 van-field
      2. 给van-form 绑定submit事件
        当表单提交的时候会接触 submit 事件
    -->
    <van-form
      :show-error="false"
      :show-error-message="false"
      validate-first="true"
      @submit="onSubmit"
      @failed="onFailed"
    >
      <van-field
        v-model="user.mobile"
        icon-prefix="toutiao"
        left-icon="shouji"
        placeholder="请输入手机号"
        :rules="formRules.mobile"
        name="手机号"
      />
      <van-field
        v-model="user.code"
        icon-prefix="toutiao"
        clearable
        left-icon="yanzhengma"
        placeholder="请输入密码"
        :rules="formRules.code"
        name="验证码"
      >
        <template #button>
          <van-button class="send-btn" size="small" round @click="onSendSms"
            >发送验证码</van-button
          >
        </template>
      </van-field>
      <div class="login-btn-wrap">
        <van-button class="login-btn" type="info" block @click="onLogin">
          登录
        </van-button>
      </div>
    </van-form>
  </div>
</template>
<script>
import { Toast } from 'vant'
import { login } from '../../api/user'
export default {
  name: 'LoginIndex',
  props: {},
  data() {
    return {
      user: {
        mobile: '', // 手机号
        code: '' // 验证码
      },
      formRules: {
        mobile: [
          { require: true, message: '请填入手机号' },
          { pattern: /^1[3,5,7,8,9]\d{9}$/, message: '手机号格式错误' }
        ],
        code: [
          { require: true, message: '请输入code' },
          { pattern: /^\d{6}$/, message: '验证码格式错误' }
        ]
      }
    }
  },
  methods: {
    async onLogin() {
      Toast.loading({
        message: '登录中......', // 提示文本
        forbidClick: true, // 禁止背景点击
        duration: 0 // 展示时长(ms), 值为 0 时， toast不会消失
      })
      // 1. 定义请求方法
      // 2. 封装请求方法
      // 3. 请求调用登录
      try {
        const res = await login(this.user)
        console.log(res, 'res---------------')
        Toast.success('登录成功')
      } catch (err) {
        // Toast.fail('登录失败，手机号或验证码错误')
      }
      // 4. 处理响应结果
    },
    onFailed(error) {
      if (error.errors[0]) {
        this.$toast({
          message: error.errors[0].message,
          position: 'top'
        })
      }
    },
    onSendSms() {
      // 校验手机号码
      // 验证通过-> 请求发送验证码 -> 用户接收短信 -> 输入验证码 -> 请求登录
      // 请求发送验证码 -> 隐藏发送按钮 -> 显示倒计时
      // 倒计时结束 -> 隐藏倒计时，显示发送按钮
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
