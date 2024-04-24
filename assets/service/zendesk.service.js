app.service("zendeskService", [
    "$q",
    function ($q) {
        this.consultarCnpj = function (cnpj) {
            var deferred = $q.defer();
            client
                .request({
                    url: `https://receitaws.com.br/v1/cnpj/${cnpj}`,
                    type: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
                .then(function (response) {
                    deferred.resolve(response);
                })
                .catch(function (error) {
                    deferred.reject(error);
                });

            return deferred.promise;
        };
    },
]);
