#!/bin/bash
git fetch
git reset --hard "@{u}"
java -jar ./scripts/InstanceSync.jar mod_list.json mods

cp -r WIPmods/* mods/