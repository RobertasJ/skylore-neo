#!/bin/bash
git stash
git pull --rebase
git stash pop
java -jar ./scripts/InstanceSync.jar mod_list.json mods

cp -r WIPmods/* mods/