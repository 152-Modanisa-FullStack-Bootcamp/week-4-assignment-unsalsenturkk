const {Given, When, Then} = require("cucumber");
const openUrl = require("../support/action/openUrl")
const waitForSelector = require("../support/action/waitForSelector")
const checkUrlContains = require("../support/check/checkUrlContains")

const assert = require("assert").strict;

Given(/^that User goes to Video Site Project's HomePage$/, async function () {
    await openUrl.call(this, "/")

})

When(/^page is loaded$/, async function () {
    await waitForSelector.call(this, '#videoList')
});
Then(/^User can see some of videos' title like$/, async function (arr) {

    const selector = ".video-list-item"

    for (let [videoTitle] of arr.rawTable) {
        let relatedProduct = await this.page.$$eval(
            selector,
            (items, videoTitle) => {
                const relatedProduct = items.find(item => item.querySelector("#title").textContent.includes(videoTitle))
                return !!relatedProduct
            },
            videoTitle
        )

        assert.strictEqual(relatedProduct, true)
    }

});

Given(/^that User is on Video Site Project's HomePage$/, async function () {
    await openUrl.call(this, "/")
});
When(/^User clicks "([^"]*)" video$/, async function (videoTitle) {

    const selector = ".video-list-item"

    let relatedProduct = await this.page.$$eval(
        selector,
        async (items, videoTitle) => {
            const relatedProduct = items.find(item => item.querySelector("#title").textContent.includes(videoTitle))
            await relatedProduct.querySelector("#title").click()
        },
        videoTitle
    )
});
Then(/^User should see watch url correctly$/, async function () {
    await this.page.waitForTimeout(2000)
    const not = false
    await checkUrlContains.call(this, not, "/watch?v=")
});
When(/^User hovers "([^"]*)" video$/, async function (videoTitle) {
    const selector = ".video-list-item"

    this.src = await this.page.$$eval(
        selector,
        async (items, videoTitle) => {
            const relatedProduct = items.find(item => item.querySelector("#title").textContent.includes(videoTitle))

            const mouseoverEvent = new Event('mouseover');

            const coverSrc = relatedProduct.querySelector("#img").src;

            relatedProduct.querySelector("#img").dispatchEvent(mouseoverEvent);
            let sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
            await sleep(2000);

            const hoverSrc = relatedProduct.querySelector("#img").src;
            return {coverSrc,hoverSrc}
        },
        videoTitle
    )
});
Then(/^User should see hovered image$/, function () {
    const not = true
    const shouldUrlEqual = not ? false : true;
    assert.strictEqual(this.src.coverSrc === this.src.hoverSrc, shouldUrlEqual, `Expected "${this.src.coverSrc}" to ${shouldUrlEqual ? 'equal' : 'not equal'} "${this.src.coverSrc}"`);
});