const btn = document.getElementById("generate");

btn.addEventListener("click", () => {
    document.getElementById("salaries").innerHTML = "";
    document.getElementById("details").innerHTML = "";

    let results = [];
    const salary = parseFloat(document.getElementById("amount").value);

    const start = {
        day: parseInt(document.getElementById("startDay").value),
        month: parseInt(document.getElementById("startMonth").value),
        year: parseInt(document.getElementById("startYear").value)
    };
    const finish = {
        day: parseInt(document.getElementById("finalDay").value),
        month: parseInt(document.getElementById("finalMonth").value),
        year: parseInt(document.getElementById("finalYear").value)
    };
    let incidencia = {
        day: parseInt(document.getElementById("incidenciaDay").value), // 2 = quincena
        month: parseInt(document.getElementById("incidenciaMonth").value),
        year: parseInt(document.getElementById("incidenciaYear").value) - start.year,
        amount: parseFloat(document.getElementById("incidenciaAmount").value),
        isIncidencia: false
    };

    // Generar los meses
    let totalYear = finish.year - start.year;
    // Mismo año inicio - final
    if(totalYear < 1){
        for(let j = start.month; j <= finish.month; j++){
            incidencia.isIncidencia = j >= incidencia.month ? true : false;
            let day = 1;
            if(j == start.month){
                day = start.day;
            }else if(j == finish.month){
                day = finish.day;
            }
            results.push(genSalario(day, j, start.year, incidencia.isIncidencia, incidencia, salary));
        }
    }else{
        for(let i = 0; i <= totalYear; i++){
            // Año de inicio
            if(i == 0){
                for(let j = start.month; j <= 12; j++){
                    if(i == incidencia.year){
                        incidencia.isIncidencia = j >= incidencia.month ? true : false;
                    }
                    let day = 1;
                    if(j == start.month){
                        day = start.day;
                    }
                    results.push(genSalario(day, j, i + start.year, incidencia.isIncidencia, incidencia, salary));
                }
            // Año de final
            }else if(i == totalYear){
                for(let j = 1; j <= finish.month; j++){
                    if(i == incidencia.year){
                        incidencia.isIncidencia = j >= incidencia.month ? true : false;
                    }
                    let day = 1;
                    if(j == finish.month){
                        day = finish.day;
                    }
                    results.push(genSalario(day, j, i + start.year, incidencia.isIncidencia, incidencia, salary));
                }
            // Año(s) entre medio
            }else{
                for(let j = 1; j <= 12; j++){
                    if(i == incidencia.year){
                        incidencia.isIncidencia = j >= incidencia.month ? true : false;
                    }
                    results.push(genSalario(1, j, i + start.year, incidencia.isIncidencia, incidencia, salary));
                }
            }
        }
    }
    
    const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    let details = getDetails(start, finish, results, salary + incidencia.amount);
    // Display monthly salary
    Object.keys(results).forEach(item => {
        let node = document.createElement("li");
        let textnode = document.createTextNode(`(${results[item].year}) ${months[results[item].month - 1]}: $${results[item].amount}`);
        node.appendChild(textnode);
        document.getElementById("salaries").appendChild(node);
    });

    // Display details
    Object.keys(details).forEach(item => {
        let node = document.createElement("li");
        let textnode = document.createTextNode(`${details[item].name}: ${details[item].value}`);
        node.appendChild(textnode);
        document.getElementById("details").appendChild(node);
    });
});

function genSalario(day, month, year, isIncidencia, incidencia, salary){
    let total = 0;
    let totalIncidencia = 0;
    let pending = 0;

    totalIncidencia = isIncidencia ? incidencia.amount : 0;

    if(isIncidencia){
        if(month == incidencia.month){
            totalIncidencia = incidencia.amount / incidencia.day;
            incidencia.month = 0;
        }else{
            totalIncidencia = incidencia.amount;
        }
    }else{
        totalIncidencia = 0;
    }

    total = salary + totalIncidencia;
    if(day == 2){
        total = total / 2;
        pending = total;
    }

    let final = {
        year: year,
        month: month,
        amount: parseFloat(total),
        pending: pending
    };

    return final;
}

function getDetails(start, finish, results, upgrade){
    let details = {};

    let salary = [];
    let totalSalary = results.reduce((acc, item) => acc + item.amount, 0);
    // let pending = results.reduce((acc, item) => acc + item.pending, 0);
    let pending = (results[results.length - 1].amount + results[results.length - 1].pending) / 2;
    let preaviso = results.length <= 23 ? upgrade : 0;
    let indemnizacion = parseFloat(((totalSalary * 6.54) / 100).toString().match(/^-?\d+(?:\.\d{0,2})?/)[0]);
    
    for(let i = start.year; i <= finish.year; i++){
        salary.push(results.filter(item => item.year == i).reduce((acc, item) => acc + item.amount, 0));
    }

    let vacacionesVencidas = 0;
    let vacacionesProporcionales = parseFloat((salary[salary.length - 1] / 11).toString().match(/^-?\d+(?:\.\d{0,2})?/)[0]);
    let primaAntiguedad = parseFloat(((vacacionesVencidas + vacacionesProporcionales + totalSalary) * 0.01923).toString().match(/^-?\d+(?:\.\d{0,2})?/)[0]);
    let decimo = parseFloat(((((results[results.length - 1].amount + results[results.length - 1].pending) / 3) + vacacionesProporcionales + vacacionesVencidas) / 12).toString().match(/^-?\d+(?:\.\d{0,2})?/)[0]);
    let finalSalary = parseFloat((pending + indemnizacion + preaviso + vacacionesProporcionales + vacacionesVencidas + decimo + primaAntiguedad).toString().match(/^-?\d+(?:\.\d{0,2})?/)[0]);

    let seguroSocial = parseFloat(((pending + vacacionesProporcionales + indemnizacion) * 0.0975).toString().match(/^-?\d+(?:\.\d{0,2})?/)[0]);
    let seguroSocialDecimo = parseFloat((decimo * 0.0725).toString().match(/^-?\d+(?:\.\d{0,2})?/)[0]);
    let seguroEducativo = parseFloat(((pending + vacacionesProporcionales + indemnizacion) * 0.0125).toString().match(/^-?\d+(?:\.\d{0,2})?/)[0]);

    let finalTotal = parseFloat((finalSalary - (seguroSocial + seguroSocialDecimo + seguroEducativo)).toString().match(/^-?\d+(?:\.\d{0,2})?/)[0]);

    details = {
        salary: {name: 'Salario por año', value: salary},
        pending: {name: 'Salario Pendiente', value: pending},
        indemnizacion: {name: 'Indemnización', value: indemnizacion},
        preaviso: {name: 'Preaviso', value: preaviso},
        vacacionesVencidas: {name: 'Vacaciones Vencidas', value: vacacionesVencidas},
        vacacionesProporcionales: {name: 'Vacaciones Proporcionales', value: vacacionesProporcionales},
        primaAntiguedad: {name: 'Prima de Antigüedad', value: primaAntiguedad},
        decimo: {name: 'Décimo Proporcional', value: decimo},
        finalSalary: {name: 'Salario Bruto', value: finalSalary},
        seguroSocial: {name: 'Seguro Social', value: seguroSocial},
        seguroSocialDecimo: {name: 'Seguro Social Décimo', value: seguroSocialDecimo},
        seguroEducativo: {name: 'Seguro Educativo', value: seguroEducativo},
        finalTotal: {name: 'Total a Pagar', value: finalTotal}
    }

    return details;
}