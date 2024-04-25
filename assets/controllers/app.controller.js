app.controller("AppController", [
    "$scope",
    "zendeskService",

    function ($scope, zendeskService) {
        zendeskService
            .getCnpjFromOrganization()
            .then((response) => {
                if (response["ticket.requester"].organizations.length != 0) {
                    var cnpj =
                        response["ticket.requester"].organizations[0].organizationFields.cnpj;
                    if (cnpj) {
                        $scope.cnpj = cnpj;
                        $scope.pesquisaCNPJ();
                    }
                }
            })
            .catch(function (error) {
                // Manipular erros aqui
                console.error(error);
            });
        // Função para consultar CNPJ
        $scope.pesquisaCNPJ = function () {
            // Chamar o serviço para consultar o CNPJ
            zendeskService
                .consultarCnpj($scope.cnpj)
                .then((response) => {
                    // Manipular a resposta da API aqui
                    $scope.cnpjData = response;
                })
                .catch(function (error) {
                    // Manipular erros aqui
                    console.error(error);
                });
        };
    },
]);
