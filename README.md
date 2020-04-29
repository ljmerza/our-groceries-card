# Our Groceries Card
Show your Our Groceries lists.

<img src='https://raw.githubusercontent.com/ljmerza/our-groceries-card/master/card.png' />

[![GitHub Release][releases-shield]][releases]
[![License][license-shield]](LICENSE.md)
![Project Maintenance][maintenance-shield]
[![hacs_badge](https://img.shields.io/badge/HACS-Default-orange.svg?style=for-the-badge)](https://github.com/custom-components/hacs)

## Features
* show your shopping lists
* toggle crossed off items in a list

## Installation through [HACS](https://github.com/custom-components/hacs)
The [Our Groceries Custom Component](https://github.com/ljmerza/ha-our-groceries) is required for this card.

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
| entity | string | **Optional** | `sensor.our_groceries` the our groceries sensor
| show_crossed_off | boolean | **Optional** | `true` show crossed of list items

---

Enjoy my card? Help me out for a couple of :beers: or a :coffee:!

[![coffee](https://www.buymeacoffee.com/assets/img/custom_images/black_img.png)](https://www.buymeacoffee.com/JMISm06AD)


[commits-shield]: https://img.shields.io/github/commit-activity/y/ljmerza/our-groceries-card.svg?style=for-the-badge
[commits]: https://github.com/ljmerza/our-groceries-card/commits/master
[license-shield]: https://img.shields.io/github/license/ljmerza/our-groceries-card.svg?style=for-the-badge
[maintenance-shield]: https://img.shields.io/badge/maintainer-Leonardo%20Merza%20%40ljmerza-blue.svg?style=for-the-badge
[releases-shield]: https://img.shields.io/github/release/ljmerza/our-groceries-card.svg?style=for-the-badge
[releases]: https://github.com/ljmerza/our-groceries-card/releases
