import { Given, When, Then } from "@wdio/cucumber-framework";
import { pages } from "../pageObject/page/index.js";
import { RandomTitleGenerator } from "../pageObject/components/index.js";
const cardName = RandomTitleGenerator.titleGenerator("card");
const listTitle = RandomTitleGenerator.titleGenerator("list");

Given(/^user is on the a board$/, async () => {
  await pages("boardPage").goToBoard();
});

When(/^user creates a new list by providing the list name$/, async () => {
  await pages("boardPage").createsNewList(listTitle);
});

Then(/^the new list is created and displayed on the board$/, async () => {
  await pages("boardPage").verifyNewList(listTitle);
});

When(/^user creates a new card and provides the card name$/, async () => {
  await pages("boardPage").createsNewCard(cardName);
});

Then(/^the new card is created and displayed in the list$/, async () => {
  await pages("boardPage").verifyNewCard(cardName);
});
