import { HeaderComponent, HomeBodyComponents, BoardHeader } from "../components/index.js";

import { should, expect } from "chai";
should();

export class HomePage {
  constructor() {
    this.headerComponent = new HeaderComponent();
    this.homeBodyComponents = new HomeBodyComponents();
    this.boardHeader = new BoardHeader();
  }

  //User updates profile info
  async goToTheProfilePage() {
    await this.headerComponent.item("account").waitForDisplayed();
    await this.headerComponent.item("account").click();
    await this.headerComponent.item("profile").click();
  }

  async updateBioInProfileInfo(item) {
    await this.homeBodyComponents.item("bio").setValue(item);
    await this.homeBodyComponents.item("saveBtn").click();
    await this.homeBodyComponents.item("saveText").isDisplayed();
  }

  async getUpdatedBio() {
    const bioInfo = await this.homeBodyComponents.item("bio").getText();
    bioInfo.should.equal("WDIO Practical Task _ Tinatin Abuladze", `Profile information hasn't been updated`);
  }

  //User creates a new board
  async goToHomePage() {
    await this.headerComponent.item("logo").click();
  }

  async createNewBoard() {
    await this.homeBodyComponents.item("newBoard").waitForDisplayed();
    await this.homeBodyComponents.item("newBoard").click();
  }

  async setBoardDetails(boardName) {
    await this.homeBodyComponents.item("boardTitle").waitForDisplayed();
    await this.homeBodyComponents.item("boardTitle").setValue(boardName);
    await this.homeBodyComponents.item("createBtn").click();
  }

  async getNewBoardTitle(boardName) {
    const boardNameDisplay = await this.boardHeader.item("boardNameDisplay").getText();
    expect(boardNameDisplay, `A new board name ${boardNameDisplay} isn't equal to ${boardName}`).to.equal(boardName);
  }
}
