class TabList {
  constructor(buttonsContainer, tabs) {
    this.buttonsContainer = buttonsContainer;
    this.tabs = tabs;

    this.buttonsContainer.addEventListener('click', event => {
      const index = event.target.closest('.button').dataset.value;
      const tabsLink = document.querySelectorAll('.button');
      tabsLink.forEach(link => link.classList.remove('_active'));
      event.target.closest('.button').classList.add('_active');
      this.openTab(index);
    });
  }
  
  openTab(index) {
    this.tabs.querySelector('.active').classList.remove('active');
    this.tabs.querySelector(`.tab--${index}`).classList.add('active');
  }

}

document.addEventListener('DOMContentLoaded', ()=>{
  const buttonsContainer = document.querySelector('.buttons');
  const tabs             = document.querySelector('.tabs');

  const tabList = new TabList(buttonsContainer, tabs);
})  
