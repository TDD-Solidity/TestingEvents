const BlockChat = artifacts.require('BlockChat')
const truffleAssert = require('truffle-assertions')
contract('BlockChat', function (accounts) {
  const [owner, user1, user2] = accounts

  it('should assert true', async function () {
    await BlockChat.deployed()
    return assert.isTrue(true)
  })

  describe('saying something', () => {
    it('returns the thank you message', async () => {
      const blockChat = await BlockChat.new()

      const mockMessage = 'mock message'

      const result = await blockChat.saySomething.call(mockMessage, {
        from: user1,
      })

      expect(result).to.equal('thank you for that beautiful message!')
    })

    it('broadcasts the message and user who said it', async () => {
      const blockChat = await BlockChat.new()

      const mockMessage = 'mock message';

      let tx = await blockChat.saySomething(mockMessage, {
        from: user1,
      });

      truffleAssert.eventEmitted(tx, 'MessageSpoken', (ev) => {
        return ev.message === mockMessage, ev.speaker === user1;
      });
    })
  })
})
