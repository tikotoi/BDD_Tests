import { Given, When, Then } from "@wdio/cucumber-framework";
import { pages } from "../pageObject/page/index.js";
import { RandomTitleGenerator } from "../pageObject/components/index.js";
const boardName = RandomTitleGenerator.titleGenerator("board");

Given(/^user is on home page$/, async () => {
  await pages("homePage").goToHomePage();
});

When(/^user initiates creating a new board$/, async () => {
  await pages("homePage").createNewBoard();
});

When(/^provides the board name$/, async () => {
  await pages("homePage").setBoardDetails(boardName);
});

Then(/^the new board is created and displayed on the dashboard$/, async () => {
  await pages("homePage").getNewBoardTitle(boardName);
});
