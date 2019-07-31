import '@babel/polyfill/noConflict';

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
    this.baseApiUrl = `ourgroceries`;
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

    await this.getListItems(list.id);
  }

  /**
   * gets a list's items and saves in listItems property to trigger redraw
   */
  async getListItems(listId){
    try {
      const list_details = await this.hass.callApi('post', this.baseApiUrl, {
        command: 'get_list_items',
        list_id: listId
      });

      this.listItems[listId] = list_details.list;
      this.openedLists[listId] = true;
      this.openedLists = { ...this.openedLists };

    } catch (error) {
      console.error({ error })
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
          ${items.active.map(item => this.renderListItem(item, listDetails.id))}
        </ul>
        <ul>
          ${items.crossedOff.map(item => this.renderListItem(item, listDetails.id))}
        </ul>
      </td>
    `
  }

  /**
   * 
   * @param {OgListItem} item 
   */
  renderListItem(item, listId){
    return html`
      <li 
        class="pointer ${item.crossedOff ? 'crossed-off' : ''}"
        .itemId=${item.id} 
        .crossedOff=${item.crossedOff} 
        @click=${() => this.toggleItem(listId, item.id, !item.crossedOff)}
      >
        ${item.value}
      </li>
    `;
  }

  /**
   * togles an item's crossedOff property
   * @param {string} listId 
   * @param {string} itemId 
   * @param {boolean} crossedOff 
   */
  async toggleItem(listId, itemId, crossedOff) {
    try {
      await this.hass.callApi('post', this.baseApiUrl, {
        command: 'toggle_item_crossed_off', 
        list_id: listId,
        item_id: itemId,
        cross_off: crossedOff
      });

      await this.getListItems(listId);

    } catch(error){
      console.error({ error });
    }
  }

  async refeshLists(){

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


