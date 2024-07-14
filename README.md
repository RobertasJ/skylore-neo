# Skylore

TODO: Add description of the pack

## Contributing

### Setup

Please run every command at the root of the instance. To be able to run InstanceSync.jar you need to have java 21 installed and set as the default.

1. Download one of the instances in the releases.
2. Run `sync.sh` or `sync.bat` depending on your OS.

To switch between the branches:
1. Run `git branch -a`.
2. Run `git checkout branch-name` if the branch is already created otherwise if it is in remotes/* run `git checkout -b <some branch name> remotes/branch/name` to create a local branch,you dont need to run with -b afterwards but you will have to switch to the locally created branch.
3. Run the `sync` script.
This is for setup of a branch only.

To update while keeping your changes:
1. Run `git pull --rebase`.

To update while discarding any changes:
1. Run the `sync` script.
### Commiting changes

If you have added or removed mods, please run the `create_mod_list` script. If that fails, as a failsafe, if it fails to find a mod on cf it will print an erorr at the end.

Before committing, if you've added any new files, make sure git can see them. If not, please change the `.gitignore` file to include the file like so:

```
!path/to/your/file.extension
```

If you instead want to include a whole folder and its contents, please add:

```
!/path/to/your/folder/**
```

### Updating the Pack
Run the `sync` script. IF you wish to keep your changes run `git pull --rebase`, you might have to take care of a merge conflict.

### Extras

 - [Kubejs assets and data](https://wiki.latvian.dev/books/kubejs-legacy/page/loading-assets-and-data)
 - [default options](https://wiki.latvian.dev/books/kubejs-legacy/page/default-options)
