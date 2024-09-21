let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap(arr) {
  arr.map((employe) => {
    if (employe.profession === "developer") {
      console.log(employe);
    }
  });
}

function PrintDeveloperbyForEach(arr) {
  arr.forEach((element) => {
    if (element.profession === "developer") {
      console.log(element);
    }
  });
}
function addData() {
  const newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
  arr.push(newEmployee);
  console.log(arr);
}

function removeAdmin() {
  const filteredArr = arr.filter((employee) => employee.profession !== "admin");
  console.log(filteredArr);
}

function concatenateArray(arr1, arr2) {
    console.log(arr1.concat(arr2));
    

}

PrintDeveloperbyMap(arr);
console.log("*********");
PrintDeveloperbyForEach(arr);
console.log("*********");
addData();
console.log("*********");
removeAdmin();
console.log("*********");
concatenateArray(arr, [{ id: 5, name: "susal kaushik", age: "20", profession: "intern" }]);
// console.log(PrintDeveloperbyForEach(arr));