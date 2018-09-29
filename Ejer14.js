var resultado;
var convertor = {
    convertir: function (medida, unidadDeMedida, unidadAconvertir, tipoDeMedida) {

        if (tipoDeMedida == 'L') {

            if (unidadDeMedida == 'm') {

                if (unidadAconvertir == 'cm') {
                    resultado = medida * 100;
                    unidadAconvertir = "cm";
                    return (resultado + unidadAconvertir);
                }
                else if (unidadAconvertir == 'km') {
                    resultado = medida / 1000;
                    unidadAconvertir = "km";
                    return (resultado + unidadAconvertir);
                }

                else if (unidadAconvertir == 'ft') {
                    resultado = medida * 3.28;
                    unidadAconvertir = "ft";
                    return (resultado + unidadAconvertir);
                }
            }

            else if (unidadDeMedida == 'km') {

                if (unidadAconvertir == 'm') {
                    resultado = medida * 1000;
                    unidadAconvertir = "m";
                    return (resultado + unidadAconvertir);
                }
            }
            else if (unidadDeMedida == 'ft')
                if (unidadAconvertir == 'm') {
                    resultado = medida * 0.3048;
                    unidadAconvertir = "m";
                    return (resultado + unidadAconvertir);
                }
        }

        else if (tipoDeMedida == 'T') {
            if (unidadDeMedida == 'c') {
                if (unidadAconvertir == 'f') {
                    resultado = (medida * (9 / 5)) + 32;
                    unidadAconvertir = "f";
                    return (resultado + unidadAconvertir);
                }
                else if (unidadAconvertir == 'k') {
                    resultado = medida + 273.15;
                    unidadAconvertir = "k";
                    return (resultado + unidadAconvertir);
                }
            }
            else if (unidadDeMedida == 'f') {
                if (unidadAconvertir == 'c') {
                    resultado = (medida - 32) * (5 / 9);
                    unidadAconvertir = "c";
                    return (resultado + unidadAconvertir);
                }
                else if (unidadAconvertir == 'k') {
                    resultado = (medida + 459.67) * (5 / 9);
                    unidadAconvertir = "k";
                    return (resultado + unidadAconvertir);
                }
            }
            else if (unidadDeMedida == 'k')
                if (unidadAconvertir == 'f') {
                    resultado = medida*(9/5) - 459.67;
                    unidadAconvertir = "f";
                    return (resultado + unidadAconvertir);
                }
                else if (unidadAconvertir == 'c') {
                    resultado =medida - 273.15;
                    unidadAconvertir = "c";
                    return (resultado + unidadAconvertir);
                }
        }
        return 0;
    }
}