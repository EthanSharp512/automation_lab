const {Builder, Capabilities} = require('selenium-webdriver')

require('chromedriver')

const {addMovie, crossOffMovie, revealMessage, deleteMovie} = require('../functions')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://127.0.0.1:5500/movieList/index.html')
})

afterAll(async () => {
    await driver.quit()
})

test("Test add movie", async () => {
    await addMovie(driver)

    await driver.sleep(3000)
})

test("Crosses off a movie", async () => {
    await crossOffMovie(driver)
    await driver.sleep(3000)
})

test("Removes a movie", async () => {
    await deleteMovie(driver)
})

