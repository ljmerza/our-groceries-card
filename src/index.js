import '@babel/polyfill';

import { LitElement, html } from 'lit-element';
import style from './style';

import defaultConfig from './defaults';

// import TravelTimeEditor from './index-editor';
// customElements.define('travel-time-card-editor', TravelTimeEditor);


class OurGroceriesCard extends LitElement {
  static get properties() {
    return {
      hass: Object,
      config: Object,
      openedLists: Object,
    };
  }

  constructor() {
    super();
    this.openedLists = {};
    this.listItems = {};
  }

  // static async getConfigElement() {
  //   return document.createElement("travel-time-card-editor");
  // }

  setConfig(config) {
    this.config = {
      ...defaultConfig,
      ...config,
    };

    this.entityName = 'sensor.our_groceries';
  }

  /**
   * get the current size of the card
   * @return {Number}
   */
  getCardSize() {
    return 5;
  }

  static get styles() {
    return style;
  }

  /**
   * generates the card HTML
   * @return {TemplateResult}
   */
  render() {
    this.entity = this.hass.states[this.entityName];
    if (!this.entity) {
      throw new Error(`Our Groceries sensor not found.`);
    }

    return html`
      <ha-card class='our-groceries-card'>
        <style>${OurGroceriesCard.styles}</style>
        ${this.config.show_header ? 
          html`
            <div class='header'>
              ${this.config.title}
            </div>
          ` 
          : null
        }
        <div class='body'>
          ${this.renderBody()}
        </div>
      </ha-card>
    `;
  }

  /**
   * Opens a list's details
   * @param {} list
   */
  async openList(list) {

    // if list is already open then just close it
    const isOpen = this.openedLists[list.id];
    if(isOpen){
      this.openedLists[list.id] = false;
      this.openedLists = { ...this.openedLists};
      return;
    }

    // get list, save it, and set as opened
    try {
      const url = `ourgroceries/${this.entity.entity_id}?list_id=${list.id}`;
      const list_details = await this.__hass.callApi('get', url);
      this.listItems[list.id] = list_details.list;
      this.openedLists[list.id] = true;
      this.openedLists = { ...this.openedLists };
      
    } catch(error){
      console.log({ error })
    }
  }

  /**
   * generates the card body
   * @return {TemplateResult}
   */
  renderBody() {
    const body = (this.entity.attributes.shopping_lists || []).map(list => {
      const isOpen = this.openedLists[list.id];
      const listDetails = isOpen && this.listItems[list.id];
      console.log({ isOpen, listDetails });

      return html`
        <tr class='pointer' @click=${() => this.openList(list)}>
          <td class='td td-name'>${list.name}</td>
          <td class='td td-count'>${list.activeCount}</td>
        <tr>
        <tr>
          ${isOpen && listDetails ? this.renderList(listDetails) : null}
        </tr>
      `;
    });

    return html`
      <table>
        ${this.renderBodyHeader()}
        <tbody>
          ${body}
        </tbody>
      </table>
    `;
  }

  /**
   * 
   * @param {OgList} listDetails 
   */
  renderList(listDetails){

    // sort by active and crossed off items
    const items = listDetails.items.reduce((acc, curr) => {
      const list = curr.crossedOff ? acc.crossedOff : acc.active;
      list.push(curr);
      return acc;
    },{active: [], crossedOff: []});

    return html`
      <td colspan='2'>
        <ul>
          ${items.active.map(item => this.renderListItem(item))}
        </ul>
        <ul>
          ${items.crossedOff.map(item => this.renderListItem(item))}
        </ul>
      </td>
    `
  }

  /**
   * 
   * @param {OgListItem} item 
   */
  renderListItem(item){
    return html`
      <li 
        .itemId=${item.id} 
        .crossedOff=${item.crossedOff} 
        class="${item.crossedOff ? 'crossed-off' : ''}"
      >${item.value}</li>
    `;
  }

  /**
   * generates the card body header
   * @return {TemplateResult}
   */
  renderBodyHeader() {
    return html`
      <thead>
        <tr>
          <th>Shopping Lists</th>
          <th># Items</th>
        </tr>
      <thead>
    `;
  }
}

customElements.define('our-groceries-card', OurGroceriesCard);


