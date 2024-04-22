app.service("zendeskService", function ($http) {
    this.consultarCnpj = function (cnpj) {
        var url = `https://receitaws.com.br/v1/cnpj/${cnpj}`;
        return $http.get(url);
    };
});
