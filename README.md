# Our Groceries Card

[![License](https://img.shields.io/github/license/ljmerza/our-groceries-card?style=for-the-badge)](LICENSE.md)
[![support](https://img.shields.io/badge/Support-ask%20for%20help%20here-blue?style=for-the-badge)](https://community.home-assistant.io/t/our-groceries-integration-and-lovelace-card/293484)

Manage your [Our Groceries](https://www.ourgroceries.com/) lists in your [Home Assistant](https://www.home-assistant.io/) lovelace UI.

Multiple lists are supported as shown below.

<img src='https://raw.githubusercontent.com/ljmerza/our-groceries-card/master/card.png' />

## Features
* show your shopping lists
* toggle crossed off items in a list

## Installation through [HACS](https://github.com/custom-components/hacs)

Use [HACS](https://github.com/custom-components/hacs) to install the **Our Groceries Card** plugin.

The [Our Groceries](https://github.com/ljmerza/ha-our-groceries) integration is required for this card to work which is also available via [HACS](https://github.com/custom-components/hacs)

## Configuration

```yaml
type: 'custom:our-groceries-card'
```

### Example:
```yaml
type: 'custom:our-groceries-card'
title: Our Shopping
show_header: true
entity: sensor.our_groceries
show_crossed_off: true
sort_by_name: true
hide_empty_lists: false
show_lists:
  - testlistx
```

## Options

| Name | Type | Requirement | Default | Description |
| :---- | :---- | :------- | :----------- |:----------- |
| type | string | **Required** | | `custom:our-groceries-card` |
| title | string | **Optional** | `<Sensor Name>` | Change card title |
| show_header | boolean | **Optional** | `true` | Show or hide header| 
| entity | string | **Optional** | `sensor.our_groceries` | the our groceries sensor |
| show_crossed_off | boolean | **Optional** | `true` | show crossed of list items |
| sort_by_name | boolean | **Optional** | `false` | sort all items by name |
| hide_empty_lists | boolean | **Optional** | `false` | hide lists with no active items |
| show_lists | list | **Optional** | `false` | list of list ids to only show on card |

</br>
---

Enjoy my card? Help me out for a couple of :beers: or a :coffee:!

[![coffee](https://www.buymeacoffee.com/assets/img/custom_images/black_img.png)](https://www.buymeacoffee.com/JMISm06AD)
