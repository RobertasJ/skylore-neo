# Skylore

TODO: Add description of the pack

## Contributing

### Setup

Please run every command at the root of the instance. To be able to run InstanceSync.jar you need to have java 21 installed and set as the default.

1. Download one of the instances in the releases.
2. Run `git fetch`, then `git reset --hard "@{u}"` to get the latest changes.
3. Run the `setup` script in the `scripts` folder:
   - For Windows, run `.bat` files.
   - For Linux, run `.sh` files.

To switch between the main and dev branches:
1. Run `git branch`.
2. Run `git checkout branch/name`.
3. Run `git fetch` and `git reset --hard "@{u}"`.
This is for setup of a branch only. you can `git pull` afterwards to not loose progress but you might have to take care of a merge conflict where you want to take the changes from the repo.
### Commiting changes

If you have added or removed mods, please run the `create_mod_list` script. If that fails, as a failsafe, you can use the `extract_from_cf` script, but you have to run the script in a CurseForge instance for it to work.

Before committing, if you've added any new files, make sure Git can see them. If not, please change the `.gitignore` file to include the file like so:

```
!path/to/your/file.extension
```

If you instead want to include a whole folder and its contents, please add:

```
!/path/to/your/folder/**
```

### Updating the Pack

If you are not using an autosync pack, you will need to run `git pull` to get the latest changes. If that doesn't work and you don't have any work done, and `git pull` fails, run `git reset --hard "@{u}"`.

### Extras

Some parts of the modpack need their own `README.md` files because of the lack of information on how to contribute in that part. Make sure to look for them.
