/**
 * 1.0 Valores THRUTY = Valores considerados 'thruty' são valores que são aceitos como "true" num contexto booleano, onde se espera true or false de uma operação.
 * 	- 1.1 thruty são todos os valores que não são falsy
 * 
 * 2.0 Valores FALSY = Valores 'falsy' são valores que são considerados "false" num contexto booleano.
 * 	- 2.1 exemplo de valores falsy: 0, -0, NaN, undefined, null, false, empty string ("", '', ``) e mais alguns.
*/

// Ex1: 
var possuiGraduacao = 1; //thuthy
var possuiDoutorado = 0; //falsy

if (possuiDoutorado) {
	console.log('Possui graduação e doutorado');
} else if (possuiGraduacao) {
	console.log('Possui graduação, mas não possui doutorado');
} else {
	console.log('Não possui graduação');
}
// retorna Possui Graduação, mas não possui doutorado


/** --------
 * 3.0 OPERADORES - Operadores de comparação retornam true ou false como resultado da operação
 * 
 * 3.1 Double Equal "==" - Faz uma comparação onde não leva em consideração o tipo de dado que está sendo comparado, apenas o valor. Retorna boolean
 * 3.2 Triple Equal "===" - Faz uma comparação onde considera o valor e o tipo de dado comparado. Retorna boolean.
 * 3.3 Difference "!= ou !==" - A exclamação é um operador de negação, portanto interpretado como "diferente de".
 * 	- 3.3.1 "!=" é a negação equivalente a uma comparação Double Equal. "!==" é equivalente a Triple Equal.
*/

10 > 5; // true
5 > 10; // false
20 < 10; // false
10 <= 10; // true
10 >= 11; // false

10 == '10'; // true - Ambos tem o valor 10, apesar de serem de tipos diferentes o "==" não leva em consideração
10 == 10; // true

10 === '10'; // false - Ambos tem o valor 10, mas um é do tipo number outro é uma string, e o operador "===" o considera.
10 === 10; // true

10 != 15; // true ( OPERADOR DE DIFERENÇA)
10 != '10'; // false
10 !== '10'; // true ( DIFERENTE mas como se fosse ===)


/** --------
 * 4.0 Operador "&&" - "e" verifica se TODOS os valores em comparação retornam valores TRUTHY.
 * <> Se os valores forem truthy ele irá retornar o último valor truthy verificado. Se algum valor for FALSY ele irá retornar o mesmo e não irá continuar a verificar os próximos.	
*/

true && true; // true
true && false; // false
false && true; // false
'Gato' && 'Cão'; // 'Cão'
5 - 5 && 5 + 5; // 0
'Gato' && false; // false
5 >= 5 && 3 < 6; // true



/** --------
 * 5.0 Operador "||" - "ou" verifica se ALGUM valor comparado retorna um valor TRUTHY.
 * <> Retorna o primeiro valor truthy que encontrar e ignora o restante dos valores.
*/

true || true; // true
true || false; // true
false || true; // true
'Gato' || 'Cão'; // 'Gato'
5 - 5 || 5 + 5; // 10 (Pois 5-5 = 0, que é um valor falsy)
'Gato' || false; // Gato
5 >= 5 || 3 < 6; // true, pois são operações comparativas, que vão retornar um valor true ou falso. Por isso retorna o ultimo valor true como true, e nao o valor da operação em si

