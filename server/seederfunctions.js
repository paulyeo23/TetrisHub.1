export function getPlayerID(playerdetails, name) {
  playerdetails.filter((player) => {
    return player.alias == name;
  });
}
