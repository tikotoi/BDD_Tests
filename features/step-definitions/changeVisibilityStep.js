import { Given, When, Then } from "@wdio/cucumber-framework";
import { pages } from "../pageObject/page/index.js";

Given(/^user is on the workspace setting page$/, async () => {
  await pages("boardPage").goToWorkspace();
});

When(/^user updates the workspace visibility$/, async () => {
  await pages("boardPage").changesVisibility();
});

Then(/^the workspace details are updated$/, async () => {
  await pages("boardPage").verifyWorkspaceVisibility();
});
