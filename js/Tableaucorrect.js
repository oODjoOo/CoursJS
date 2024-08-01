// TABLEAUX

// Création d'un tableau

let array = [];
console.log(array.length);

// Les indices des tableaux commencent toujours à la position 0
let tab = ["Hello", 23];
console.log(tab);
console.log(tab.length);

// Accéder à une position donnée dans le tableau
let index = tab[1];
console.log(index);

// Ajouter un élément à la fin du tableau
let newElement = array.push("Navigateur");
console.log(array);

let again = array.push("Internet", "Écran", 13);
console.log(array);

document.write(`<p style='color:orange'>Sans boucle: ${array}</p>`);

for (let i = 0; i < array.length; ++i) {
	document.write(`<p style='color:blue'>Après boucle: ${array[i]}</p>`);
}

for (let i = 0; i < array.length; ++i) {
	if (i == 2) {
		document.write(`<p style='color:green'>Après boucle: ${array[i]}</p>`);
	}
}

// Ajouter un élément au début du tableau
let add = array.unshift("Avion");
console.log(array);

// Supprimer un élément à la fin du tableau
let supp = array.pop();
console.log(array);

// Supprimer un élément au début du tableau
let start = array.shift();
console.log(array);

// Supprimer un élément 
