#include "variadic_functions.h"
#include <stdio.h>

/**
 * sum_them_all - check the code
 * @n: character
 * Return: resultado
 */

int sum_them_all(const unsigned int n, ...)
{
	unsigned int i;
	int valores;
	int resultado = 0;

	va_list parametros;

	va_start(parametros, n);

	if (n == 0)
		return (0);

	for (i = 0; i < n; i++)
	{
		valores = va_arg(parametros, int);
		resultado += valores;
	}
	va_end(parametros);

	return (resultado);
}
