// This script runs when the client starts up
ClientEvents.started(event => {
    let modList = '';
    let mods = Platform.mods;

    mods.forEach(mod => {
        modList += `${mod.name} - ${mod.version}\n`;
    });

    // This will save the list to a file named 'mods_list.txt' in the Minecraft directory
    java.nio.file.Files.write(java.nio.file.Paths.get('mods_list.txt'), modList.bytes());
    console.info('Mod list generated: mods_list.txt');
});
