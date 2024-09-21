


class LocalStorage {
	constructor() { }

	set(key, value) {
		localStorage.setItem(key, value)
	}

	get(key) {
		return localStorage.getItem(key)
	}
}

let LS = new LocalStorage()


const inputs = document.querySelectorAll('input, select');


for (let i = 0; i < inputs.length; i++) {
	if (inputs[i].type == 'radio' || inputs[i].type == 'checkbox') {
		inputs[i].checked = LS.get(inputs[i].id)
		continue
	}
	if (inputs[i].type == 'select-one') {
		for (let j = 0; j < inputs[i].children.length; j++) {
			if (inputs[i].children[j].value == LS.get(inputs[i].id)) {
				inputs[i].children[j].selected = true
			}
		}
		continue
	}

	if (inputs[i].type == 'select-multiple') {
		for (let j = 0; j < inputs[i].children.length; j++) {
			if (JSON.parse(LS.get(inputs[i].id)).includes(inputs[i].children[j].value)) {
				inputs[i].children[j].selected = true
			}
		}
		continue
	}

	inputs[i].value = LS.get(inputs[i].id)
}

document.addEventListener('input', function (event) {
	if (event.target.type == 'checkbox') {
		LS.set(event.target.id, event.target.checked);
		return;
	}

	if (event.target.type == 'select-one') {
		for (let j = 0; j < event.target.children.length; j++) {
			if (event.target.children[j].selected) {
				LS.set(event.target.id, event.target.children[j].value);
				return;
			}
		}
		return;
	}
	if (event.target.type == 'select-multiple') {
		LS.set(event.target.id, JSON.stringify([...event.target.selectedOptions].map((option) => option.value)));
		return;
	}
	LS.set(event.target.id, event.target.value || event.target.checked);
})
