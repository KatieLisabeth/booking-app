describe('My First Test', function () {
  before((browser) => {
    browser.init()
  })

  it('visits the app root url', function () {
    browser.assert
      .textContains('.green', 'You did it!')
      .assert.elementsCount('.wrapper nav a', 2)
      
  })

  after((browser) => browser.end())
})
