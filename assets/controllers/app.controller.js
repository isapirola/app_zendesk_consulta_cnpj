app.controller("AppController", [
    "$scope",
    "zendeskService",
    function ($scope, zendeskService) {
        var client = ZAFClient.init();

        // Função para consultar CNPJ
        $scope.pesquisaCNPJ = function () {
            // Chamar o serviço para consultar o CNPJ
            zendeskService
                .consultarCnpj($scope.cnpj)
                .then((response) => {
                    // Manipular a resposta da API aqui
                    console.log(response);
                    // Exemplo: Armazenar a resposta em $scope.cnpjData
                    $scope.cnpjData = response;
                })
                .catch(function (error) {
                    // Manipular erros aqui
                    console.error(error);
                });
        };
    },
]);
