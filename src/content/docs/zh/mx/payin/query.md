---
title: 代收查询
description: 商户查询一个代收订单的状态
---

### 请求地址

| method | url                       |
| ------ | ------------------------- |
| POST   | /api/pay/payment/query/v1 |

### 请求参数

| 字段            | 类型   | 必需 | 长度 | 描述       |
| --------------- | ------ | ---- | ---- | ---------- |
| merchantOrderNo | String | yes  | 32   | 商户订单号 |
| sign            | String | yes  |      | 签名       |

```json title=请求示例
{
  "merchantOrderNo": "201806251011",
  "sign": "YOUR_SIGN"
}
```

### 返回参数

| 参数                          | 类型   | 必需 | 长度 | 描述                                           |
| ----------------------------- | ------ | ---- | ---- | ---------------------------------------------- |
| merchantOrderNo               | String | yes  | 32   | 商户订单号                                     |
| tradeNo                       | String | yes  |      | 平台订单号                                     |
| paymentType                   | int    | yes  | 1    | 代收方式: 1-clabe 2-收银台                     |
| amount                        | String | yes  |      | 订单交易金额                                   |
| method                        | String | yes  |      | 支付方式: VA-线上 store-线下 url-收银台        |
| status                        | String | yes  |      | 2-成功 3-失败 4-退款                           |
| remark                        | String | no   |      | 商户创建订单传的值                             |
| statementList                 | Object | no   |      | 代收流水信息                                   |
| -- paymentSingleOrderNo       | String | yes  |      | 单次支付流水号                                 |
| -- paymentStatementAmount     | String | yes  |      | 单次代收金额                                   |
| -- paymentStatementStatus     | String | yes  |      | 单次代收交易状态: 2-代收成功 3-代收失败 4-退款 |
| -- paymentStatementStatusName | String | yes  |      | 交易状态名称                                   |
| -- message                    | String | no   |      | 交易信息                                       |
| sign                          | String | yes  |      | 签名                                           |

```json title=返回示例
{
  "merchantOrderNo": "201806251011",
  "tradeNo": "TF201806251011",
  "paymentType": 1,
  "amount": "100",
  "method": "VA",
  "status": "2",
  "remark": "代收备注",
  "statementList": [
    {
      "paymentSingleOrderNo": "201806251011",
      "paymentStatementAmount": "100",
      "paymentStatementStatus": "2",
      "paymentStatementStatusName": "代收成功",
      "message": "代收成功"
    }
  ],
  "sign": "TEEMO_SIGN"
}
```
