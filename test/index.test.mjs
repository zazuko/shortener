import sinon from 'sinon'
import { expect } from 'chai'
import shortener from '../index.js'

describe('@zazuko/s', () => {
  it('calls published service', async () => {
    // given
    const fetch = sinon.stub()
      .resolves({
        ok: true,
        async text() {
          return 'short url'
        },
      })

    // when
    const short = await shortener.shorten('long url', fetch)

    // then
    expect(short).to.eq('short url')
    expect(fetch).to.have.been.calledWith('https://s.zazuko.com/api/v1/shorten/', {
      method: 'POST',
      body: sinon.match(params => {
        return params.toString() === 'url=long+url'
      }),
    })
  })
})
