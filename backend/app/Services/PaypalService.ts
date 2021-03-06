import Env from '@ioc:Adonis/Core/Env'
import got from 'got'
import qs from 'querystring'

class PaypalService {
  private readonly url: string = 'https://paypal.com/cgi-bin/webscr'
  private readonly sandbox_url: string = 'https://sandbox.paypal.com/cgi-bin/webscr'

  constructor (
    protected sandbox = Env.get('PAYMENT_PAYPAL_SANDBOX'),
    protected email = Env.get('PAYMENT_PAYPAL_EMAIL'),
  ) { }

  public async verify (payload: any): Promise<boolean> {
    payload.cmd = '_notify-validate'
    let response

    try {
      response = await got.post(this.getUrl(), {
        body: qs.stringify(payload),
      })
    } catch (ex) {
      return false
    }

    if (response.body !== 'VERIFIED') {
      return false
    }

    if (payload.payment_status !== 'Completed') {
      return false
    }

    if (payload.receiver_email !== this.email) {
      return false
    }

    if (!payload.custom || isNaN(payload.custom)) {
      return false
    }

    return true
  }

  private getUrl (): string {
    return this.sandbox ? this.sandbox_url : this.url
  }
}

export default new PaypalService() as PaypalService
