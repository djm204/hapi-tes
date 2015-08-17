import H = require("hapi-test");
export = { thing };


// These are equivalent (ES6)
var a = { thing };
var b = { thing: thing } 

var thing = "";


var h: H.Programmer;

h.id = 1;
h.username = "swagger";

h.id = Types.C; // === 2
h.username = Types[2]; // === "C"
enum Types {
	A, B, C
}

function getUser(id: number, username: string): H.Programmer {
	var user: H.Programmer = {
		id, username
	};
	
	return user;
}

function doThing(callback: () => any) {
	console.log(callback()); //prints 1
}

var otherthing = () => { return 1; };

doThing(otherthing);

/**
 * VSCODE:
 * 1. Set up tasks.json (triggered by Ctrl+Shift+B)
 * 2 Create tsconfig.json manually
 * 
 * Covered
 * Internal and external modules
 * Interal = namespaces -- declare namespace HapiTest { }
 * External = modules -- declare module "hapi-test" { }
 * 
 * Import syntax
 * var knex vs import knex
 */