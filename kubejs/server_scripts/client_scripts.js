// This script runs when the player logs in
PlayerEvents.loggedIn(event => {
  const player = event.player;

  if (!player.persistentData.hasJoinedBefore) {
    player.persistentData.hasJoinedBefore = true;

    // Function to send the message
    function sendMessage() {
      player.tell(
        Text.of('Hold ')
          .green()
          .append(Text.of('R').red())
          .append(Text.of(' to show menu').green())
      );
    }

    // Send the message immediately
    sendMessage();

    // Counter for how many times the message has been sent
    let count = 0;

    // Interval to send the message every 5 seconds (100 ticks)
    const intervalId = setInterval(() => {
      sendMessage();
      count++;

      // Clear the interval after sending the message 3 times
      if (count >= 3) {
        clearInterval(intervalId);
      }
    }, 5000); // 5000 milliseconds = 5 seconds
  }
});
