import { BoardHeader, BoardCanvas, HeaderComponent } from "../components/index.js";

import { assert, expect, should } from "chai";
should();
export class BoardPage {
  constructor() {
    this.headerComponent = new HeaderComponent();
    this.boardHeader = new BoardHeader();
    this.boardCanvas = new BoardCanvas();
  }

  //User searches for a board
  async clickSearchBtn() {
    await this.headerComponent.item("search").waitForDisplayed();
    await this.headerComponent.item("search").click();
  }

  async searchForBoard(item) {
    await this.headerComponent.item("searchInput").setValue(item);
    await this.headerComponent.item("searchResult").click();
  }

  async getSearchedBoardTitle() {
    const expectedTitle = "Example test case | Trello";
    await browser.waitUntil(async () => {
      const title = await browser.getTitle();
      return title === expectedTitle;
  }, {
      timeout: 10000,
      timeoutMsg: 'Expected title was not found within 10 seconds'
  });
    const title = await browser.getTitle();
    assert.equal(title, expectedTitle, `The board hasn't been found`);
  }

  //User creates new lists on a board
  async goToBoard() {
    await this.boardCanvas.item("exampleBoard").click();
  }

  async createsNewList(item) {
    await this.boardCanvas.item("addList").click();
    await this.boardCanvas.item("listValue").setValue(item);
    await this.boardCanvas.item("addListBtn").click();
  }

  async verifyNewList(item) {
    const listTitleText = await this.boardCanvas.getListByTitle(item).getText();
    expect(listTitleText).to.equal(item);
    const listTitleDisplay = await this.boardCanvas.getListByTitle(item).isDisplayed();
    expect(listTitleDisplay, `List with title - "${item}" isn't displayed`).to.be.true;
  }

  //User creates a new card in a list
  async createsNewCard(item) {
    await this.boardCanvas.addNewCard().click();
    await this.boardCanvas.item("cardValue").setValue(item);
    await this.boardCanvas.item("addCardBtn").click();
  }

  async verifyNewCard(item) {
    const cardNameText = await this.boardCanvas.getCardByName(item).getText();
    expect(cardNameText).to.equal(item);
    const cardNameDisplay = await this.boardCanvas.getCardByName(item).isDisplayed();
    expect(cardNameDisplay, `Card with name - "${item}" isn't displayed`).to.be.true;
  }

  //User filtering of cards by label
  async navigateTotheBoard() {
    await this.boardCanvas.item("exampleBoard").click();
  }

  async filteringCardByLabel(item) {
    await this.boardHeader.item("filterBtn").click();
    await this.boardHeader.item("filterInput").setValue(item);
    await this.boardHeader.item("filter").click();
  }

  async verifyFilteredCard() {
    await Promise.all(
      this.boardCanvas.urgentCards.map(async (card) => {
        const isDisplayed = await card.isDisplayed();
        assert.isTrue(isDisplayed, `Urgent cards are not displayed`);
      })
    );
    await Promise.all(
      this.boardCanvas.nonUrgentCards.map(async (card) => {
        const isDisplayed = await card.isDisplayed();
        assert.isFalse(isDisplayed, `Urgent cards is displayed, It shoud be non urgent cards`);
      })
    );
  }

  //User changes workspace visibility
  async goToWorkspace() {
    await this.boardCanvas.item("exampleBoard").click();
  }

  async changesVisibility() {
    await this.boardHeader.item("visibilityBtn").click();
    await this.boardHeader.item("private").click();
    await this.boardHeader.item("visibilityBtn").click();
  }

  async verifyWorkspaceVisibility() {
    const checkIcon = await this.boardHeader.item("checkIcon");
    expect(checkIcon, `Visibility haven't changed to private`).to.exist;
  }
}
