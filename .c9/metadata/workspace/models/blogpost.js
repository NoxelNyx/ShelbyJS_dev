{"changed":true,"filter":false,"title":"blogpost.js","tooltip":"/models/blogpost.js","value":"var mongoose      = require('mongoose');\nvar autoIncrement = require('mongoose-auto-increment');\nvar configDB      = require('../config/site.json').database.url;\n\nvar connection    = mongoose.createConnection(configDB);\nautoIncrement.initialize(connection);\n\nvar postSchema = new mongoose.Schema({\n    RoleName : { type: String, default: '' }\n});","undoManager":{"mark":42,"position":64,"stack":[[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":0},"end":{"row":0,"column":55}},"text":"var autoIncrement = require('mongoose-auto-increment');"},{"action":"insertText","range":{"start":{"row":0,"column":55},"end":{"row":1,"column":0}},"text":"\n"},{"action":"insertLines","range":{"start":{"row":1,"column":0},"end":{"row":8,"column":0}},"lines":["var configDB      = require('../config/site.json').database.url;","","var connection    = mongoose.createConnection(configDB);","autoIncrement.initialize(connection);","","var roleSchema = new mongoose.Schema({","    RoleName : { type: String, default: '' }"]},{"action":"insertText","range":{"start":{"row":8,"column":0},"end":{"row":8,"column":3}},"text":"});"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":6,"column":7},"end":{"row":6,"column":8}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":6,"column":6},"end":{"row":6,"column":7}},"text":"l"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":6,"column":5},"end":{"row":6,"column":6}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":6,"column":4},"end":{"row":6,"column":5}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":4},"end":{"row":6,"column":5}},"text":"p"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":5},"end":{"row":6,"column":6}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":6},"end":{"row":6,"column":7}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":6,"column":7},"end":{"row":6,"column":8}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":0},"end":{"row":1,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":0},"end":{"row":0,"column":1}},"text":"v"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":1},"end":{"row":0,"column":2}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":2},"end":{"row":0,"column":3}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":3},"end":{"row":0,"column":4}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":4},"end":{"row":0,"column":5}},"text":"m"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":5},"end":{"row":0,"column":6}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":6},"end":{"row":0,"column":7}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":0,"column":4},"end":{"row":0,"column":7}},"text":"mon"},{"action":"insertText","range":{"start":{"row":0,"column":4},"end":{"row":0,"column":12}},"text":"mongoose"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":12},"end":{"row":0,"column":13}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":13},"end":{"row":0,"column":14}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":14},"end":{"row":0,"column":15}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":15},"end":{"row":0,"column":16}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":16},"end":{"row":0,"column":17}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":17},"end":{"row":0,"column":18}},"text":"="}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":0,"column":17},"end":{"row":0,"column":18}},"text":"="}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":17},"end":{"row":0,"column":18}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":18},"end":{"row":0,"column":19}},"text":"="}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":19},"end":{"row":0,"column":20}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":20},"end":{"row":0,"column":21}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":21},"end":{"row":0,"column":22}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":0,"column":20},"end":{"row":0,"column":22}},"text":"re"},{"action":"insertText","range":{"start":{"row":0,"column":20},"end":{"row":0,"column":31}},"text":"require(\"\")"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":0,"column":29},"end":{"row":0,"column":30}},"text":"\""}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":0,"column":28},"end":{"row":0,"column":29}},"text":"\""}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":28},"end":{"row":0,"column":30}},"text":"''"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":29},"end":{"row":0,"column":30}},"text":"m"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":30},"end":{"row":0,"column":31}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":31},"end":{"row":0,"column":32}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":32},"end":{"row":0,"column":33}},"text":"g"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":33},"end":{"row":0,"column":34}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":34},"end":{"row":0,"column":35}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":35},"end":{"row":0,"column":36}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":36},"end":{"row":0,"column":37}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":39},"end":{"row":0,"column":40}},"text":";"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":7,"column":7},"end":{"row":7,"column":8}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":7,"column":6},"end":{"row":7,"column":7}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":7,"column":5},"end":{"row":7,"column":6}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":7,"column":4},"end":{"row":7,"column":5}},"text":"p"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":7,"column":4},"end":{"row":7,"column":5}},"text":"b"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":7,"column":5},"end":{"row":7,"column":6}},"text":"l"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":7,"column":6},"end":{"row":7,"column":7}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":7,"column":7},"end":{"row":7,"column":8}},"text":"c"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":7,"column":7},"end":{"row":7,"column":8}},"text":"c"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":7,"column":7},"end":{"row":7,"column":8}},"text":"g"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":7,"column":8},"end":{"row":7,"column":9}},"text":"P"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":7,"column":9},"end":{"row":7,"column":10}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":7,"column":9},"end":{"row":7,"column":10}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":7,"column":8},"end":{"row":7,"column":9}},"text":"P"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":7,"column":7},"end":{"row":7,"column":8}},"text":"g"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":7,"column":6},"end":{"row":7,"column":7}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":7,"column":5},"end":{"row":7,"column":6}},"text":"l"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":7,"column":4},"end":{"row":7,"column":5}},"text":"b"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":7,"column":4},"end":{"row":7,"column":5}},"text":"p"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":7,"column":5},"end":{"row":7,"column":6}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":7,"column":6},"end":{"row":7,"column":7}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":7,"column":7},"end":{"row":7,"column":8}},"text":"t"}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":7,"column":8},"end":{"row":7,"column":8},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1413132164565}