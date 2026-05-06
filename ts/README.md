# TSStats

TSStats is a lightweight metrics mod that collects anonymous metric data about users' mods and games played on the Thunderstore mod platform.

## Why TSStats Exists

Thunderstore does provide metrics, but they are often highly inaccurate. Eventually, hopefully, this mod will fix that issue, with a "spam-proof"(mostly) API

## Features

- Tracks mod usage, rather than just installations  
- Aggregates users' mods 
- Publish dashboard  
- Minimal performance impact 
- Full compatibility with other BepInEx plugins (non-invasive) 
- Privacy-focused data collection  

## How It Works

TSStats runs inside your game and sends data specifically from the mods.yml file located in your profile folder.

Collected data includes:
- Mods and versions  
- Authors
- Games    

## Dashboard

View statistics at:  
https://ts.scyye.dev/api/view

Includes:
- Top mods  
- Top authors  
- Per-game players
- Per-game authors 

## Privacy

TSStats is designed to minimize user identification:

- Uses one-way encryption to anonymize user info
- Accesses only mods.yml

See [`PRIVACY.md`](https://scyye.dev/ts/PRIVACY.md) for full details.

## Installation

TSStats is distributed via the Thunderstore database. It is only intended to be used with mod managers based on Thunderstore. 

[R2ModMan](https://github.com/ebkr/r2modmanPlus) Confirmed Functional;

[Thunderstore](https://www.overwolf.com/app/thunderstore-thunderstore_mod_manager) Confirmed Functional;

[Gale](https://github.com/Kesomannen/gale) Untested, if you use this please message @scyye on discord with info

- Install through Thunderstore  
- Launch the game through your mod manager  
- No configuration required  

We do not support manual installation.

## Compatibility

- Full compatibility with all other mods
- Based on mono bepinex (might work with ML. IL2CPP version coming soon:tm:)

## Development Status

TSStats is actively evolving. Planned improvements include:

- Nicer-looking website
- Cross-session storage
- Easier opt out (See below for data removal details)

## Contributing

Feedback, ideas, and contributions are welcome.  
Open an issue or submit a pull request.

## Disclaimer

This mod is intended for aggregate analytics only.

It should not be used to identify, track, or profile individual users.
