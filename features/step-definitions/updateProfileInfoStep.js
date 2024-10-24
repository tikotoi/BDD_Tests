import { Given, When, Then } from "@wdio/cucumber-framework";
import { pages } from "../pageObject/page/index.js";

Given(/^user is on the profile page$/, async () => {
  await pages("homePage").goToTheProfilePage();
});

When(/^the user updates personal (.+) and saves the changes$/, async (item) => {
  await pages("homePage").updateBioInProfileInfo(item);
});

Then(/^the profile information updated$/, async () => {
  await pages("homePage").getUpdatedBio();
});
