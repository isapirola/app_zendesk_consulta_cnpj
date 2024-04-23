app.service("zendeskService", function () {
    this.consultarCnpj = function (cnpj) {
        // var url = `https://receitaws.com.br/v1/cnpj/${cnpj}`;
        // return $http.get(url);

        const client = ZAFClient.init();

        const options = {
            url: `https://receitaws.com.br/v1/cnpj/${cnpj}`,
            type: "GET",
        };

        return client.request(options);
    };
});
