# Travel Time Card for Home Assistant
Show travel time data and open rotues to Google Maps or Waze

<img src='https://raw.githubusercontent.com/ljmerza/travel-time-card/master/card.png' />

[![GitHub Release][releases-shield]][releases]
[![License][license-shield]](LICENSE.md)
![Project Maintenance][maintenance-shield]

## Installation through [HACS](https://github.com/custom-components/hacs)
---
Add the following to resources in your lovelace config:

```yaml
resources:
  - url: /community_plugin/travel-time-card/travel-time-card.js
  - type: js
```

## Configurations:
---
```yaml
type: 'custom:travel-time-card'
entities:
  - entity: sensor.google_leo_home
  - entity: sensor.google_leo_work
  - entity: sensor.waze_leo_work
    zone: zone.leo_work
  - entity: sensor.waze_leo_home
```
Note: some travel time sensors such as Waze do not come with the destination address with it so you'll need to specify it manually via the `zone` setting for an entity. You can also set a custom `zone` for any entity to override the destination address.

## Options
---
| Name | Type | Requirement | `Default` Description
| :---- | :---- | :------- | :----------- |
| entites | list | **Required** | List of entities to show (see entity config below)
| title | string | **Optional** | `Github` Change card title
| show_header | boolean | **Optional** | `true` Show or hide header
| columns | list | **Optional** | `['name', 'duration', 'distance', 'route']` Customize what columns are shown
| map | string | **Optional** | `google` Open to google or waze maps when a route is clicked (google or waze only) 

| Name | Type | Requirement | `Default` Description
| :---- | :---- | :------- | :----------- |
| entity | string | **Required** | The travel time entity id
| zone | string | **Optional** | Override the destination route with a zone or add one if none is given from entitiy

---

Enjoy my card? Help me out for a couple of :beers: or a :coffee:!

[![coffee](https://www.buymeacoffee.com/assets/img/custom_images/black_img.png)](https://www.buymeacoffee.com/JMISm06AD)


[commits-shield]: https://img.shields.io/github/commit-activity/y/ljmerza/travel-time-card.svg?style=for-the-badge
[commits]: https://github.com/ljmerza/travel-time-card/commits/master
[license-shield]: https://img.shields.io/github/license/ljmerza/travel-time-card.svg?style=for-the-badge
[maintenance-shield]: https://img.shields.io/badge/maintainer-Leonardo%20Merza%20%40ljmerza-blue.svg?style=for-the-badge
[releases-shield]: https://img.shields.io/github/release/ljmerza/travel-time-card.svg?style=for-the-badge
[releases]: https://github.com/ljmerza/travel-time-card/releases