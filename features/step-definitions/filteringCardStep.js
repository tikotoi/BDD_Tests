import { Given, When, Then } from "@wdio/cucumber-framework";
import { pages } from "../pageObject/page/index.js";

Given(/^user go to the board page$/, async () => {
  await pages("boardPage").navigateTotheBoard();
});

When(/^user filtering cards by the (.+)$/, async (label) => {
  await pages("boardPage").filteringCardByLabel(label);
});

Then(/^all cards with the matched label are displayed$/, async () => {
  await pages("boardPage").verifyFilteredCard();
});
