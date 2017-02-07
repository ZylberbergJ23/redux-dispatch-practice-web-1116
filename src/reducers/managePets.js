export let state;


export function managePets(state = {pets: []}, action){
	if (action.type === 'ADD_PET') {
		return Object.assign({}, state, {pets: [...state.pets, action.payload]})
	} else if (action.type === 'REMOVE_PET') {
		let answer = state.pets.filter(element => {return element.id != action.payload})
		return Object.assign({}, state, {pets: answer})
	}
	else {return state}
}

export function dispatch(action){
	state = managePets(state, action)
	render()
}

export function render(){
	var list = state.pets.map( pet => `<li>${pet.name}</li>`)
	document.getElementById('container').innerHtml = `<ul>${list.join()}</ul>`
}
