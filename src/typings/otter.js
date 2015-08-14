// These are equivalent (ES6)
var a = { thing: thing };
var b = { thing: thing };
var thing = "";
var h;
h.id = 1;
h.username = "swagger";
h.id = Types.C; // === 2
h.username = Types[2]; // === "C"
var Types;
(function (Types) {
    Types[Types["A"] = 0] = "A";
    Types[Types["B"] = 1] = "B";
    Types[Types["C"] = 2] = "C";
})(Types || (Types = {}));
function getUser(id, username) {
    var user = {
        id: id, username: username
    };
    return user;
}
function doThing(callback) {
}
var otherthing = function () { return 1; };
module.exports = { thing: thing };
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
//# sourceMappingURL=otter.js.map