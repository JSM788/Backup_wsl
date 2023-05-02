#include "variadic_functions.h"
#include <stdio.h>

/**
 * print_strings - check the code
 * @separator: pointer
 * @n: character
 */

void print_strings(const char *separator, const unsigned int n, ...)
{
	unsigned int i;
	char *cadena;

	va_list parametros;

	va_start(parametros, n);

	for (i = 0; i < n; i++)
	{
		cadena = va_arg(parametros, char *);
		if (cadena == NULL)
			cadena = "(nil)";

		if (separator == NULL)
			printf("%s", cadena);

		else if (i == 0)
			printf("%s", cadena);

		else
			printf("%s%s", separator, cadena);
	}
	va_end(parametros);
	printf("\n");
}
