# Our Groceries Card
Show your Our Groceries lists.

<img src='https://raw.githubusercontent.com/ljmerza/our-groceries-card/master/card.png' />

## Features
* show your shopping lists
* toggle crossed off items in a list

## Installation through [HACS](https://github.com/custom-components/hacs)
---

The [Our Groceries Custom Component](https://github.com/ljmerza/ha-our-groceries) is required for this card.

Add the following to resources in your lovelace config:

```yaml
resources:
  - url: /community_plugin/our-groceries-card/our-groceries-card.js
    type: js
```

## Configuration

```yaml
type: 'custom:our-groceries-card'
```

## Options
---
| Name | Type | Requirement | `Default` Description
| :---- | :---- | :------- | :----------- |
| title | string | **Optional** | `Github` Change card title
| show_header | boolean | **Optional** | `true` Show or hide header

---

Enjoy my card? Help me out for a couple of :beers: or a :coffee:!

[![coffee](https://www.buymeacoffee.com/assets/img/custom_images/black_img.png)](https://www.buymeacoffee.com/JMISm06AD)
