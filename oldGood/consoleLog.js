//spawn
Game.spawns["Spawn1"].spawnCreep([WORK, WORK, CARRY, MOVE], "Harvester1", {
    memory: { role: "harvester" },
});
Game.spawns["Spawn1"].spawnCreep([WORK, WORK, CARRY, MOVE], "Upgrader83", {
    memory: { role: "upgrader" },
});
Game.spawns["Spawn1"].spawnCreep([WORK, WORK, CARRY, MOVE], "Builder1", {
    memory: { role: "builder" },
});

//basic memory
Game.creeps["Harvester1"].memory.role = "harvester";

//change memory
Game.creeps["Harvester1"].memory.role = "upgrader";
Game.creeps["Builder23536633"].memory.role = "upgrader";

//can build Big Creep with 550 energy in spawn and extensions
Game.spawns["Spawn1"].spawnCreep(
    [WORK, WORK, WORK, WORK, CARRY, MOVE, MOVE],
    "HarvesterBig",
    { memory: { role: "harvester" } }
);

//self-destruct
Game.creeps["Harvester1"].suicide();

//safe mode
Game.spawns["Spawn1"].room.controller.activateSafeMode();

//build a Defense Tower
Game.spawns["Spawn1"].room.createConstructionSite(23, 22, STRUCTURE_TOWER);

console.log(this.room.energyAvailable);
[room.name];
Game.rooms[name].energyAvailable;
console.log(Game.creeps);
console.log(stats.rooms[room.name].);
stats.rooms[room.name];
room.find(energyAvailable)
console.log(room.find(energyAvailable));
console.log(creep.pos.findClosestByRange(FIND_STRUCTURES));