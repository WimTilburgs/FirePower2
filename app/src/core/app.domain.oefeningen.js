System.register([], function(exports_1) {
    var Oefeningen;
    return {
        setters:[],
        execute: function() {
            Oefeningen = (function () {
                function Oefeningen(omschrijving, afkorting, barbellGewicht, sqlId) {
                    this.omschrijving = omschrijving;
                    this.afkorting = afkorting;
                    this.barbellGewicht = barbellGewicht;
                    this.sqlId = sqlId;
                }
                return Oefeningen;
            })();
            exports_1("Oefeningen", Oefeningen);
        }
    }
});
//# sourceMappingURL=app.domain.oefeningen.js.map