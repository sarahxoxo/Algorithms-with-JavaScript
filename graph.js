var graph = new Graph();
var myVertices = ["A","B","C","D","E","F","G","H","I"];

for(var i=0; i<myVertices.length;i++) {
    graph.addVertex(myVertices[i]);
}
graph.addEdge("A","B");
graph.addEdge("A","C");
graph.addEdge("B","D");
graph.addEdge("D","E");

console.log(graph.toString());


function Graph() {
    var vertices = [];
    var adjList = new Dictionary();

    this.addVertex = function(v) {
        vertices.push(v);
        adjList.set(v,[]);
    };
    this.addEdge = function(v,w) {
        adjList.get(v).push(w);
        adjList.get(w).push(v);
    }
    this.toString = function() {
        var s = "";
        for(var i = 0;i < vertices.length;i++) {
            s += vertices[i] + "->";
            var neighbors = adjList.get(vertices[i]);
            for(var j = 0;j < neighbors.length;j++) {
                s += neighbors[j] + "";
            }
            s += "\n";
        }
        return s;
    }
}

function Dictionary() {
    var items = {};

    this.set = function(key, value) {
        items[key] = value;
    };
    this.remove = function(key) {
        if(this.has(key)) {
            delete items[key];
            return true;
        }
        return false;
    };
    this.has = function(key) {
        return key in items;
    };
    this.get = function(key) {
      return this.has(key) ? items[key] : undefinded;
    };
    this.clear = function() {
        items = {};
    };
    this.size = function() {
        return length;
    };
    this.keys = function() {
        return Object.keys(items);
    };
    this.values = function() {
        var values = {};
        for(var k in items) {
            if(this.has(k)) {
                values.push(items[k]);
            }
        }
        return values;
    };
}
