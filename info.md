# Our Groceries Card
Show your Our Groeries lists

<img src='https://raw.githubusercontent.com/ljmerza/our-groceries-card/master/card.png' />

[![GitHub Release][releases-shield]][releases]
[![License][license-shield]](LICENSE.md)
![Project Maintenance][maintenance-shield]

## Installation through [HACS](https://github.com/custom-components/hacs)
---

The [Our Groceries Custom Component](https://github.com/ljmerza/ha-our-groceries) is required for this card.

Add the following to resources in your lovelace config:

```yaml
resources:
  - url: /community_plugin/our-groceries-card/our-groceries-card.js
  - type: js
```

## Configuration

In your `configuration.yaml` file add:

```yaml
ourgroceries:
    username: !secret our_groceries_username
    password: !secret our_groceries_password
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


[commits-shield]: https://img.shields.io/github/commit-activity/y/ljmerza/our-groceries-card.svg?style=for-the-badge
[commits]: https://github.com/ljmerza/our-groceries-card/commits/master
[license-shield]: https://img.shields.io/github/license/ljmerza/our-groceries-card.svg?style=for-the-badge
[maintenance-shield]: https://img.shields.io/badge/maintainer-Leonardo%20Merza%20%40ljmerza-blue.svg?style=for-the-badge
[releases-shield]: https://img.shields.io/github/release/ljmerza/our-groceries-card.svg?style=for-the-badge
[releases]: https://github.com/ljmerza/our-groceries-card/releases