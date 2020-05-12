<?php
	system("gpio -g mode 17 out");

	if (system("gpio -g read 17") == "0") {
		system("gpio -g write 17 1");
	} else {
		system("gpio -g write 17 0");
	}
?>
