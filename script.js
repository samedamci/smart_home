const r = new XMLHttpRequest();

const init = () => {
	r.open('GET', "./status.php", false); r.send();

	let state = document.getElementById("lamp_switch");

	if (r.status == 200) {
		if (Number(r.responseText) == 1) state.checked = true;
		else state.checked = false;
	}

}

const toggle_lamp = () => {
	let state = document.getElementById("lamp_switch").checked;

	switch (state) {
		case true:
			r.open('GET', "./on.php");
			state = true;
			break;
		case false:
			r.open('GET', "./off.php");
	  	state = false;
			break;
	}

	r.send();
}

const daemon_status = () => {
	r.open('GET', "./daemon_status.php", false); r.send();

	const out = String(r.responseText);

	if (out) return 'active';
	else return 'inactive';
}

const status = daemon_status();

const show_more = (status) => {
	let e;
	e = document.querySelector('#lampd_status_cont');
	e.innerHTML = status;
	if (status == 'active') e.style.color = '#4dc667';

	e = document.querySelector('.device__container');
	e.style.height = '80px'
	e.style.transition = "0.3s"; 

	e = document.querySelector('#lampd_title');
	e.style.display = 'inline-block';
}
