#include "variadic_functions.h"
#include <stdio.h>

/**
 * print_all - function
 * @format: const
 */

void print_all(const char * const format, ...)
{
	int i = 0, n = 0, valor_c, valor_i;
	double valor_f;
	char *valor_s, *separator = ", ";

	va_list parametros;

	va_start(parametros, format);

	while (format && format[i])
		i++;
	while (format && format[n])
	{
		if (n == (i - 1))
			separator = "";

		switch (format[n])
		{
			case 'c':
				valor_c = va_arg(parametros, int);
				printf("%c%s", valor_c, separator);
				break;
			case 'i':
				valor_i = va_arg(parametros, int);
				printf("%d%s", valor_i, separator);
				break;
			case 'f':
				valor_f = va_arg(parametros, double);
				printf("%f%s", valor_f, separator);
				break;
			case 's':
				valor_s = va_arg(parametros, char *);
				if (valor_s == NULL)
				valor_s = "(nil)";
				printf("%s%s", valor_s, separator);
				break;
		}
		n++;
	}
	va_end(parametros);
	printf("\n");
}
