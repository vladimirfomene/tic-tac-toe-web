import { shallowMount } from "@vue/test-utils";
import App from "@/App.vue";
import Header from "@/components/Header.vue";
import StartGameDialog from "@/components/StartGameDialog.vue";
import DisplayLeaderBoard from "@/components/DisplayLeaderBoard.vue";
import GameBoard from "@/components/GameBoard.vue";
import Footer from "@/components/Footer.vue";

describe("Header.vue", () => {

  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(Header);
  });

  test("should render header", () => {
    expect(wrapper.html()).toContain('<span class="tic">Tic </span>');
    expect(wrapper.html()).toContain('<span class="tac">Tac </span>');
    expect(wrapper.html()).toContain('<span class="toe">Toe </span>');
  });

});

describe("StartGameDialog.vue", () => {

  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(StartGameDialog);
  });

  describe("render startGameDialog component", () => {
    test("should render text input for player name", () => {
      expect(wrapper.html()).toContain('<div class="field"><input type="text" placeholder="Player name"></div>');
    });
  
    test("should render dropdown for symbol select", () => {
      expect(wrapper.html()).toContain('<option disabled="disabled" value="">Please select one</option>');
      expect(wrapper.html()).toContain('<option value="o">Circle</option>')
      expect(wrapper.html()).toContain('<option value="x">Cross</option>')
    });
  
    test("should render start game button", () => {
      expect(wrapper.html()).toContain('<button>Start Game</button>')
    });
  
    test("test correctness of initial values", () => {
      expect(wrapper.vm.playerName).toEqual("");
      expect(wrapper.vm.playerSymbol).toEqual("");
      expect(wrapper.vm.isVisible).toBeTruthy();
    });
  });

  describe("submit start game form", () => {
    
    beforeEach(() => {
      wrapper.setData({ playerName: "vladimir", playerSymbol: "x", isVisible: false})
    });
  
    test("should submit form on clicking startGame btn", () => {
      expect(wrapper.vm.playerName).toEqual("vladimir");
      expect(wrapper.vm.playerSymbol).toEqual("x");
      expect(wrapper.vm.isVisible).toBeFalsy();
    });
  });

});

describe("DisplaLeaderBoard.vue", () => {

  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(DisplayLeaderBoard);
  });

  test("should render display button", () => {
    expect(wrapper.html()).toContain('<button class="btn-leader">');
  });

});


describe("GameBoard.vue", () => {

  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(GameBoard);
  });

  test("should render grid", () => {
    expect(wrapper.html()).toContain('<gameboardcell-stub position=\"1\"></gameboardcell-stub>');
    expect(wrapper.html()).toContain('<gameboardcell-stub position=\"2\"></gameboardcell-stub>');
    expect(wrapper.html()).toContain('<gameboardcell-stub position=\"3\"></gameboardcell-stub>');
    expect(wrapper.html()).toContain('<gameboardcell-stub position=\"9\"></gameboardcell-stub>');    
  });

  test("numOfCells should be 9", () => {
    expect(wrapper.vm.numOfCells).toEqual(9);
  });

});

describe("Footer.vue", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(Footer);
  });

  test("should render footer", () => {
    expect(wrapper.html()).toContain('Made with <span class=\"heart-icon\">♥</span> in Cameroon');
  });
});

describe("App.vue", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(App);
  });

  test("should render components", () => {
    expect(wrapper.html()).toContain('<header-stub class=\"header\"></header-stub>');
    expect(wrapper.html()).toContain('<startgamedialog-stub class=\"dialog\"></startgamedialog-stub>');
    expect(wrapper.html()).toContain('<display-leader-board-stub class=\"display-leader\"></display-leader-board-stub>');
    expect(wrapper.html()).toContain('<gameboard-stub class=\"board\"></gameboard-stub>');
    expect(wrapper.html()).toContain('<leader-board-stub class=\"leader-board\"></leader-board-stub>');
    expect(wrapper.html()).toContain('<footer-stub class=\"footer\"></footer-stub>');
  });
});


