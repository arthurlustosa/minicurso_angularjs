var students = [
	{name: "Dalton", nota: 7.0},
	{name: "Klaudio", nota: 7.5},
	{name: "Dandara", nota: 9.5},
	{name: "Paulo", nota: 10.0},
	{name: "Arthur", nota: 9.0}
];


(function () {
	var app = angular.module('primeira', []);
	
	app.controller('PrimeiroController', [function () {
		
		this.data = JSON.parse(students);
		this.data.name = "Digite aqui seu nome";
		this.data.visivel = 'sim';
		
		
		this.resetName = function () {
			this.data.name = data;
			
			};
			
	
		}]);
		
	app.controller('StudentsController', [function() {
		var i_escolhido = 0;
		this.escolhido = students[i_escolhido];
		
		this.criar = function (nNome, nNota) {
				students.push({name:nNome, nota: nNota});
			};
		
		
		this.proximo = function () {
				i_escolhido = i_escolhido + 1;
				this.escolhido = students[i_escolhido];
			};
			
		this.anterior = function () {
				i_escolhido -= 1;
				this.escolhido = students[i_escolhido];
			};
		
	}]);
})();
