app.controller("AppController", [
    "$scope",
    "zendeskService",
    function ($scope, zendeskService) {
        var client = ZAFClient.init();

        // Função para pesquisar dados do CNPJ
        $scope.pesquisaCNPJ = function () {
            zendeskService
                .consultarCnpj($scope.cnpj)
                .then(function (response) {
                    // Armazenar os dados do CNPJ na variável $scope.cepData
                    $scope.cnpjData = response.data;
                })
                .catch(function (error) {
                    // Manipular erros aqui
                    console.error(error);
                });
        };
    },
]);
