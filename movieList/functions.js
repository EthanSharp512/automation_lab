const {By} = require('selenium-webdriver')

const addMovie = async (driver) => {

    await driver.findElement(By.xpath(`//input`)).sendKeys('captain america')

    await driver.findElement(By.xpath(`//button[text()='Add']`)).click()

    const movie = await driver.findElement(By.xpath(`//li/span[text()='captain america']`))

    const displayed = movie.isDisplayed()

    expect(displayed).toBeTruthy();

}

const deleteMovie = async (driver) => {
    const movie = await driver.findElement(By.xpath(`//button[text()='x']`)).click()    
}

const crossOffMovie = async (driver) => {
    await driver.findElement(By.xpath(`//li/span[text()='captain america']`)).click()
}


const revealMessage = async (driver) => {
    const message = await driver.findElement(By.name(`aside`))

    const displayed = message.isDisplayed()

    expect(displayed).toBeTruthy();
}



module.exports = {
    addMovie,
    deleteMovie,
    crossOffMovie,
    revealMessage
}