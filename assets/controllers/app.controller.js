app.controller("AppController", [
    "$scope",
    "zendeskService",

    function ($scope, zendeskService) {
        $scope.errorMessage = "";

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
                    if (response.status == "ERROR") {
                        $scope.cnpjData = {};
                        $scope.errorMessage = "CNPJ Inválido";
                    } else {
                        $scope.cnpjData = response;
                    }
                })
                .catch(function (error) {
                    // Manipular erros aqui
                    $scope.cnpjData = {};
                    $scope.errorMessage = "CNPJ Inválido";
                    console.error(error);
                });
        };

        // Função para verificar se um objeto está vazio
        $scope.isEmptyObject = function (obj) {
            return Object.keys(obj).length === 0 && obj.constructor === Object;
        };
    },
]);
