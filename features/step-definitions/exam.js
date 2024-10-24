import { Given, When, Then } from "@wdio/cucumber-framework";
import { expect, $ } from "@wdio/globals";

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
  expect(a).toBe("Wdio Task (wdiotask)");
});
