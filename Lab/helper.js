class Button {
	constructor(position = "20 20 20", rotation = "0 0 0",visible = "false", pointer = "") {
		this.position_ = position;
		this.rotation_ = rotation;
		this.visible_ = visible;
		this.pointer_ = pointer;
	}

	updatePointer(pointer) this.pointer_ = pointer;
	updatePosition(position) this.position_ = position;
	updateRotation(rotation) this.rotation_ = rotation;
	visible() this.visible_ = "true";
	invisible() this.visible_ = "false";
}

class Node {
	constructor(id, picture_address) {
		this.id_ = id;
		this.picture_ = picture_address;
		this.button1_ = new Button();
		this.button2_ = new Button();
		this.button3_ = new Button();
		this.button4_ = new Button();
		this.button5_ = new Button();
		this.button6_ = new Button();
	}	
}

var nodes = [];

function findNode(id) {
	for (var i = 0; i < nodes.length; ++i) if (id == nodes[i].id_) return nodes[i];
	return null;
}

function initializeNodes() {
	nodes.push(new Node("Sage", "pictures/test1.JPG"));
	nodes[0].button1_.updatePosition("1 2 -4");
	nodes[0].button1_.visible();
	nodes[0].button1_.updatePointer("Lally");
	nodes.push(new Node("Lally", "pictures/test2.JPG"));
	nodes[0].button1_.updatePosition("1 2 -4");
	nodes[0].button1_.visible();
	nodes[0].button1_.updatePointer("Lally");
}

function updatePage(node) {
	var button1 = document.querySelector("#1");
	button1.setAttribute("src", findNode(node.button1_.pointer_));
	var button1position = document.querySelector("1-position");
}

window.onload = function init() {
};