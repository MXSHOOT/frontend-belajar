//import
// import data from "./data.mjs"; //datanya satu
import {data} from "./data.mjs" //destrakting

//Controller
function index() {
    console.log(data);
}

function store() {
    console.log("Tambah data");
}

//Export 2 method: index, store
export {index,store};