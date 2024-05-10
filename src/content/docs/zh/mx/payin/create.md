---
title: 创建代收
description: 商户请求创建一个代收订单
---

### 请求地址

| method | url                        |
| ------ | -------------------------- |
| POST   | /api/pay/payment/create/v1 |

### 请求参数

| 字段            | 类型   | 必需 | 长度 | 描述                                                                                                                  |
| --------------- | ------ | ---- | ---- | --------------------------------------------------------------------------------------------------------------------- |
| merchantOrderNo | String | yes  | 32   | 商户订单号                                                                                                            |
| paymentType     | int    | yes  | 1    | 支付方式: 1-还款码 2-收银台 3-BankTransfer（线上收款单次）4-PayCashOnce（线下收款单次）5-PayCashRecurrent（线下多次） |
| amount          | String | yes  |      | 代收金额(比索)                                                                                                        |
| expirationTime  | Long   | no   |      | 过期时间，例：1717048800000，当 paymentType 为 2、4、5 时必传                                                         |
| realName        | String | no   |      | 手机号                                                                                                                |
| email           | String | no   |      | 代付回调地址，若不传, 则以商户配置为准                                                                                |
| remark          | String | no   |      | 订单备注                                                                                                              |
| sign            | String | yes  |      | 签名                                                                                                                  |

```json title="请求示例（当 paymentType 为 1、3 时）"
{
  "merchantOrderNo": "201806251011",
  "paymentType": 1,
  "amount": "100",
  "expirationTime": 1717048800000,
  "callbackUrl": "https://merchant.com/api/payment/callback",
  "remark": "代收备注",
  "sign": "YOUR_SIGN"
}
```

```json title="请求示例（当 paymentType 为 2、4、5 时）"
{
  "merchantOrderNo": "TC2404240001RAinLBYnm7",
  "realName": "USERNAME",
  "amount": "20",
  "callbackUrl": "https://merchant.com/api/payment/callback",
  "paymentType": 5,
  "email": "user@gmail.com",
  "phone": "999999999",
  "sign": "YOUR_SIGN",
  "expirationTime": 1717048800000
}
```

### 返回参数

| 字段            | 类型   | 必需 | 长度 | 描述                                    |
| --------------- | ------ | ---- | ---- | --------------------------------------- |
| merchantOrderNo | String | yes  | 32   | 商户订单号                              |
| tradeNo         | String | yes  |      | 平台订单号                              |
| method          | String | no   |      | 支付方式: VA-线上 store-线下 url-收银台 |
| reference       | String | no   |      | 用户支付的还款 VA 虚拟号码              |
| url             | String | yes  |      | 收银台链接                              |
| sign            | String | no   |      | 签名                                    |

```json title=返回示例
{
  "merchantOrderNo": "201806251011",
  "tradeNo": "TF201806251011",
  "method": "VA",
  "reference": "1234567890",
  "url": "",
  "sign": "TEEMO_SIGN"
}
```
