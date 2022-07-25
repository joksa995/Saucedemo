module.exports = class Page {

    click(element) {
        element.waitForDisplayed({ timeout: 30000 })
        element.click()
    }

    setValue(element, value) {
        element.waitForDisplayed({ timeout: 30000 })
        element.setValue(value)
    }

    get(element, value) {
        element.waitForDisplayed({ timeout: 30000 })
        element.get(value)
    }
}