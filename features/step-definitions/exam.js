const { Given, When, Then } = require("@wdio/cucumber-framework");
const { expect, $ } = require("@wdio/globals");

Given(/^user is on the trello page$/, async () => {
  await browser.url(`https://trello.com/`);
});

When(/^user go to gth$/, async () => {
  await $("//a[text()='Log in']").click();
  await $("#username").setValue("wdiotask@gmail.com");
  await $("#login-submit").click();
  await $("#password").setValue("11112222==");
  await $(".css-178ag6o").click();
});

Then(/^user expect text$/, async () => {
  const t = $("[data-testid='header-member-menu-avatar']");
  const a = await t.getAttribute("title");
  console.log("5555555555555555555555555555555555", a);
  expect(a).toBe("Wdio Task (wdiotask)");
});
