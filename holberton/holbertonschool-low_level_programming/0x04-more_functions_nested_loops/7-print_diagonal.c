#include "main.h"

/**
 * print_diagonal - prints a pyramid depending on the value of n
 * @n: the value to form the pyramid
 */

void print_diagonal(int n)
{
	int a = 0;
	int b = 0;

	if (n > 0)
	{
		while (a < n)
		{
		while (b < a)
		{
			_putchar(' ');
	b++;
		}
	a++;
	b = 0;
		_putchar('\\');
		_putchar('\n');
	}
	}

	else
	_putchar('\n');
}
