app.service("zendeskService", function () {
    this.consultarCnpj = function (cnpj) {
        const client = ZAFClient.init();

        const options = {
            url: `https://receitaws.com.br/v1/cnpj/${cnpj}`,
            type: "GET",
        };

        return client.request(options);
    };
});
