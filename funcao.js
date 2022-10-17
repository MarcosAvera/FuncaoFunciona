function inicio_function(){
    var opcao = parseInt(prompt("Insira a função que deseja executar: \n 1). Pets \n 2). Lanche \n 3). Geometria \n 4). Fisica \n 5). Sair"));

    switch(opcao){

        case 1:

            calculo_Pet();
            inicio_function();

        case 2:

            calculo_Lanche();
            inicio_function();

        case 3: 

            calculo_Geometria();
            inicio_function();

        case 4:

            calculo_Fisica();
            inicio_function();

        case 5:

            sair();

        default:

            alert("Insira uma opção valida de 1 a 5");
            inicio_function();

    }

function calculo_Pet(){

        let opcao = parseInt(prompt("Selecione a opção que condiz com a especie do seu pet: \n 1). Cachorro \n 2). Gato \n 3). Hamster \n 4). Sair"));

        switch(opcao){

            case 1:

                idade_dog();
                calculo_Pet();

            case 2: 

                idade_cat();
                calculo_Pet();

            case 3: 

                idade_hamster();
                calculo_Pet();

            case 4:
            
                sair_funcao();

            default:

                alert("Opcao invalida! Insira uma opção de 1 a 4");
                calculo_Pet();
        }

        function idade_dog(){

            let nomePet = prompt("Insira o nome do seu pet: ");
                if(nomePet == "" || nomePet == Number){

                    alert("Dados inseridos não condizem com um nome válido, tente novamente!");
                    idade_dog();

                }

            let idadeAnimal = parseInt(prompt(`Insira a idade do(a) ${nomePet}:`));
                if(idadeAnimal == "" || idadeAnimal == NaN){

                    alert("Valor inválido! Tente novamente!");
                    idade_dog();
                }

            let idadeAnoHumano = 0;
            let contador = 0;
            const primeiroAnoDog = 15;
            const segundoAnoDog = 10;
            const terceiroAnoDog = 5;

            if(idadeAnimal == 1){

                idadeAnoHumano += primeiroAnoDog;
                alert(`${nomePet} tem ${idadeAnoHumano} anos em anos de verdade. A relação de ano animal e ano humano para cachorros em seu primeiro ano de vida é de 15 para 1 ano`);

            }else if(idadeAnimal == 2){

                idadeAnoHumano += primeiroAnoDog + segundoAnoDog;
                alert(`${nomePet} tem ${idadeAnoHumano} anos em anos de verdade. A relação de ano animal e ano humano para cachorros em seu segundo ano de vida é de 25 para 2 anos`)

            }else if(idadeAnimal > 0 && idadeAnimal > 2){

                idadeAnoHumano += primeiroAnoDog + segundoAnoDog;
                idadeAnimal -= 2;

                    while(contador < idadeAnimal){

                        idadeAnoHumano += terceiroAnoDog;
                        contador++;

                    }
                
                alert(`${nomePet} tem ${idadeAnoHumano} anos em anos de verdade. A relação de ano animal e ano humano para cachorros a partir de 3 anos de vida é de 5 anos para cada 1 ano`);

            }else{

                alert("Houve um erro! Tente novamente mais tarde!");
                inicio_function();

            }
            
        }

        function idade_cat(){
            let nomePet = prompt("Insira o nome do seu pet: ");
            if(nomePet == "" || nomePet == Number){

                alert("Dados inseridos não condizem com um nome válido, tente novamente!");
                idade_dog();

            }

            let idadeAnimal = parseInt(prompt(`Insira a idade do(a) ${nomePet}:`));
                if(idadeAnimal == "" || idadeAnimal == NaN){

                    alert("Valor inválido! Tente novamente!");
                    idade_dog();
                }

            let idadeAnoHumano = 0;
            let contador = 0;
            const primeiroAnoCat = 15;
            const segundoAnoCat = 10;
            const terceiroAnoCat = 4;

            if(idadeAnimal == 1){

                idadeAnoHumano += primeiroAnoCat;
                alert(`${nomePet} tem ${idadeAnoHumano} anos em anos de verdade. A relação de ano animal e ano humano para cachorros em seu primeiro ano de vida é de 15 para 1 ano`);

            }else if(idadeAnimal == 2){

                idadeAnoHumano += primeiroAnoCat + segundoAnoCat;
                alert(`${nomePet} tem ${idadeAnoHumano} anos em anos de verdade. A relação de ano animal e ano humano para cachorros em seu segundo ano de vida é de 25 para 2 anos`)

            }else if(idadeAnimal > 0 && idadeAnimal > 2){

                idadeAnoHumano += primeiroAnoCat + segundoAnoCat;
                idadeAnimal -= 2;

                    while(contador < idadeAnimal){

                        idadeAnoHumano += terceiroAnoCat;
                        contador++;

                    }
                
                alert(`${nomePet} tem ${idadeAnoHumano} anos em anos de verdade. A relação de ano animal e ano humano para cachorros a partir de 3 anos de vida é de 4 anos para cada 1 ano`);

            }else{

                alert("Houve um erro! Tente novamente mais tarde!");
                inicio_function();

            }
        }

       function idade_hamster(){

            alert("A idade de um hamster é medida por semestres");
            let nomePet = prompt("Insira o nome do seu pet: ");
            if(nomePet == "" || nomePet == Number){

                alert("Dados inseridos não condizem com um nome válido, tente novamente!");
                idade_dog();

            }

        let idadeAnimal = parseInt(prompt(`Insira a idade em semestres do(a) ${nomePet}:`));
            if(idadeAnimal == "" || idadeAnimal == NaN){

                alert("Valor inválido! Tente novamente!");
                idade_dog();
            }
            let idadeAnoHumano = 0;
            let contador = 0;
            const primeiroSemestre = 18;
            const segundoSemestre = 12;
            const terceiroSemestre = 15;

                if(idadeAnimal == 1){

                    idadeAnoHumano += primeiroSemestre;
                    alert(`${nomePet} tem ${idadeAnoHumano} anos em anos humanos, a relação de ano animal e anos humano para hamster de 1 semestre de vida é de 18 anos para 1 semestre`);

                }else if(idadeAnimal == 2){

                    idadeAnoHumano += primeiroSemestre + segundoSemestre;
                    alert(`${nomePet} tem ${idadeAnoHumano} anos em anos humanos, a relação de ano animal e anos humano para hamster de 2 semestres de vida é de 30 anos para 2 semestre`);

                }else if(idadeAnimal > 0 && idadeAnimal > 2){

                    idadeAnoHumano += primeiroSemestre + segundoSemestre;
                    idadeAnimal -= 2;
                        while(contador < idadeAnimal){

                            idadeAnoHumano += terceiroSemestre;
                            contador++;
                        }
                        console.log(contador);
                    
                    alert(`${nomePet} tem ${idadeAnoHumano} anos em anos humanos, a relação de ano animal e anos humano para hamster de a partir de 3 semestres de vida é de 15 anos para cada semestre`);

                }else{

                    alert("Houve algum erro! Tente novamente mais tarde!");
                    inicio_function();

                }
            }

            function sair_funcao(){

                let confirma = confirm("Deseja sair da Função Pet?");

                if(confirma){

                    inicio_function();

                }else{

                    calculo_Pet();

                }
        }
        
    }

function calculo_Lanche(){
    let idade = parseInt(prompt("Insira a sua idade:"));
        if(idade == "" || idade == NaN){

            alert("Valor inválido. Tente novamente");
            calculo_Lanche();

        }

    let qtdLanches_porDia = parseInt(prompt("Insira a quantidade de lanches que você consome por dia:"));
        if(qtdLanches_porDia == "" || qtdLanches_porDia == NaN){

            alert("Valor inválido. Tente novamente");
            calculo_Lanche();

        }

    const idadeFinal = 90;

    let idadeCalculo;
    let suprimentoVitalicio;
    let resultadoFinal;

    idadeCalculo = idadeFinal - idade; 
    suprimentoVitalicio = qtdLanches_porDia * 365;
    resultadoFinal = suprimentoVitalicio * idadeCalculo;

    alert(`Você precisara de ${resultadoFinal}  para durar até idade ${idadeFinal}`);
}

function calculo_Geometria(){

    let opcao = parseInt(prompt("Escolha a opção de calculo: \n 1). Circunferência \n 2). Área \n 3). Sair"));

    switch(opcao){

        case 1:

            circunferencia_calculo();
            calculo_Geometria();

        case 2: 

            area_calculo();
            calculo_Geometria();
        
        case 3: 

            sair_funcao2();
            break;

        default:

            alert("Insira uma opção válida de 1 a 3");

    }

    function circunferencia_calculo(){

        const pi = 3.14;
        let raio = parseFloat(prompt("Insira a medida do raio"));
            if(raio == "" || raio == NaN){

                alert("Valor inválido. Tente novamente");
                calculo_Geometria();

            }

        let calculo = (2 * pi) * raio;

        alert(`A circunferência é ${calculo}`);

    }

    function area_calculo(){

        let raio = parseFloat(prompt("Insira a medida do raio"));
            if(raio == "" || raio == NaN){

                alert("Valor Invalido. Tente Novamente");
                calculo_Geometria();

            }
        
            const pi = 3.14;

            let calculo = pi * (raio ** 2);

            alert(`A área é ${calculo}`);

    }

    function sair_funcao2(){

        let confirma_saida = confirm("Deseja sair?");

        if(confirma_saida){

            inicio_function();

        }else{

            calculo_Geometria();

        }
    }
}

function calculo_Fisica(){

    let opcao = parseFloat(prompt("Escolha a opção de conversão desejada: \n 1). Fahrenheit \n 2). Celsius \n 3). Sair"));

    switch(opcao){

        case 1:

            converte_fahrenheit();
            calculo_Fisica();

        case 2:

            converte_celsius();
            calculo_Fisica();

        case 3:

            sair_funcao3();

        default:

            alert("Opcao inválida, insira uma opção de 1 a 3");
            calculo_Fisica();

    }

    function converte_fahrenheit(){

        let tempCelsius = parseFloat(prompt("Insira a temperatura em Celsius para a conversão"));
        let conversãoFahrenheint = (tempCelsius * (9/5)) + 32;

        alert(`${tempCelsius}ºC é igual a ${conversãoFahrenheint}ºF`);

    }

    function converte_celsius(){

        let tempFahrenheit = parseFloat(prompt("Insira a temperatura em Fahrenheit para conversão"));
        let conversãoCelsius = (tempFahrenheit - 32) * 5/9;

        alert(`${tempFahrenheit}ºF é igual a ${conversãoCelsius}ºC`);

    }

    function sair_funcao3(){

        let confirma_sairFuncao3 = confirm("Deseja sair?");
        if(confirma_sairFuncao3){

            inicio_function();

        }else{

            calculo_Fisica();

        }
    }
}

function sair(){

    let sairPrograma = confirm("Deseja realmente sair do programa?");
        if(sairPrograma){

            alert("Obrigado, volte sempre!");
            window.close();

        }else{

            inicio_function();

        }
}

}

inicio_function();