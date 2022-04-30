const clientSystem = client.registerSystem(0,0);
clientSystem.initialize = function() {
}
clientSystem.update = function() {
  clientSystem.broadcastEvent("minecraft:execute_command", "/setblock ~ ~-1 ~ stone");
}