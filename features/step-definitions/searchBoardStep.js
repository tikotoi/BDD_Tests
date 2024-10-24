import { Given, When, Then } from "@wdio/cucumber-framework";
import { pages } from "../pageObject/page/index.js";

Given(/^user is on the dashboard$/, async () => {
  await pages("boardPage").clickSearchBtn();
});

When(/^user search for a board by a (.+)$/, async (boardName) => {
  await pages("boardPage").searchForBoard(boardName);
});

Then(/^the board matching the search criteria by name is displayed$/, async () => {
  await pages("boardPage").getSearchedBoardTitle();
});
