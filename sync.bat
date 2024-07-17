@echo off
git stash
git pull --rebase
git stash pop
java -jar .\scripts\InstanceSync.jar mod_list.json mods

xcopy /s /e /y WIPmods\* mods\