import { LitElement, html } from 'lit-element';
import style from './style-editor';


const fireEvent = (node, type, detail = {}, options = {}) => {
  const event = new Event(type, {
    bubbles: options.bubbles === undefined ? true : options.bubbles,
    cancelable: Boolean(options.cancelable),
    composed: options.composed === undefined ? true : options.composed,
  });

  event.detail = detail;
  node.dispatchEvent(event);
  return event;
};


export default class GithubCardEditor extends LitElement {
  static get styles() {
    return style;
  }

  static get properties() {
    return { hass: {}, _config: {} };
  }

  setConfig(config) {
    this._config = config;
  }

  get entityOptions() {
    // get all github entities
    const entities = Object.keys(this.hass.states).filter(eid => {
      if(eid.substr(0, eid.indexOf('.')) !== 'sensor') return false;

      const entity = this.hass.states[eid];
      if (!entity.attributes || !entity.attributes.icon || !entity.attributes.icon.includes('github')) return false;

      return true;
    });

    // convert to checkbox objects
    return entities.map(eid => ({ name: eid, checked: this._config.entities.includes(eid) }));
  }

  firstUpdated(){
    this._firstRendered = true;
  }

  render() {
    if (!this.hass) {
      return html``;
    }

    return html`
      <div class="card-config">

        <div class=overall-config'>
          <paper-input
            label="Title (Optional)"
            .value="${this._config.title}"
            .configValue="${"title"}"
            @value-changed="${this._valueChanged}"
          ></paper-input>
          <paper-checkbox
            @checked-changed="${this._valueChanged}" 
            .checked=${this._config.show_extended}
            .configValue="${"show_extended"}"
          >Show Extended</paper-checkbox>
        </div>

        <div class='entities'>
          <h3>Entities</h3>
          ${
            this.entityOptions.map(entity => {
              return html`<paper-checkbox 
                @checked-changed="${this._valueChanged}" 
                .checked=${entity.checked}
                .entityValue="${entity.name}"
              >${entity.name}</paper-checkbox>`;
            })
          }
        </div>
      </div>
    `;
  }

  _valueChanged(ev) {
    if (!this._config || !this.hass || !this._firstRendered) return;

    const { target: { configValue, value, entityValue }, detail: { value: checkedValue} } = ev;

    if (entityValue){

      if (checkedValue) {
        this._config = { ...this._config, entities: [...this._config.entities, entityValue] };
      } else {
        const newEntities = this._config.entities.filter(entity => entity !== entityValue);
        this._config = { ...this._config, entities: newEntities };
      }

    } else if (checkedValue !== undefined || checkedValue !== null){
      this._config = { ...this._config, [configValue]: checkedValue };

    } else {
      this._config = { ...this._config, [configValue]: value };
    }

    console.log(this._config);
    fireEvent(this, 'config-changed', { config: this._config });
  }
}

