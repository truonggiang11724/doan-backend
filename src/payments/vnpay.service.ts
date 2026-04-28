import { Injectable } from '@nestjs/common';
import * as crypto from 'crypto';
import * as qs from 'querystring';

@Injectable()
export class VNPayService {
  private tmnCode = process.env.VNPAY_TMN_CODE || 'your_tmn_code';
  private secretKey = process.env.VNPAY_SECRET_KEY || 'your_secret_key';
  private returnUrl = `${process.env.FRONTEND_URL || 'http://localhost:3000'}/payment-return`;
  private paymentUrl = 'https://sandbox.vnpayment.vn/paymentv2/vpcpay.html';

  buildPaymentUrl(params: {
    vnp_Amount: number;
    vnp_OrderInfo: string;
    vnp_OrderType: string;
    vnp_TxnRef: string;
    vnp_IpAddr: string;
  }) {
    const vnpParams = {
      vnp_Version: '2.1.0',
      vnp_Command: 'pay',
      vnp_TmnCode: this.tmnCode,
      vnp_Locale: 'vn',
      vnp_CurrCode: 'VND',
      vnp_ReturnUrl: this.returnUrl,
      ...params,
      vnp_CreateDate: new Date().toISOString().slice(0, 19).replace(/[-:T]/g, ''),
    };

    // Sort parameters
    const sortedParams = Object.keys(vnpParams)
      .sort()
      .reduce((result, key) => {
        result[key] = vnpParams[key];
        return result;
      }, {});

    // Create sign data
    const signData = qs.stringify(sortedParams, '&', '=');
    const hmac = crypto.createHmac('sha512', this.secretKey);
    const secureHash = hmac.update(Buffer.from(signData, 'utf-8')).digest('hex');

    sortedParams['vnp_SecureHash'] = secureHash;

    return `${this.paymentUrl}?${qs.stringify(sortedParams, '&', '=')}`;
  }

  verifyReturnUrl(query: any): boolean {
    const secureHash = query.vnp_SecureHash;
    delete query.vnp_SecureHash;

    // Sort parameters
    const sortedParams = Object.keys(query)
      .sort()
      .reduce((result, key) => {
        result[key] = query[key];
        return result;
      }, {});

    const signData = qs.stringify(sortedParams, '&', '=');
    const hmac = crypto.createHmac('sha512', this.secretKey);
    const expectedHash = hmac.update(Buffer.from(signData, 'utf-8')).digest('hex');

    return secureHash === expectedHash;
  }
}