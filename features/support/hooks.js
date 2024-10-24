import { BeforeAll } from "@wdio/cucumber-framework";
import { pages } from "../pageObject/page/index.js";

BeforeAll(async () => {
  await pages("basePage").open();
  await pages("basePage").logInSuccessfully("wdiotask@gmail.com", "11112222==");
  await pages("basePage").getHomePageTitle();
});