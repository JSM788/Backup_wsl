#include "main.h"
/**
 * print_line-This function prints dashes below
 * @n: Character
 */

void print_line(int n)
{
	int a;

	if (n <= 0)
	{
		_putchar(10);
	}

	else
	{
		for (a = 1; a <= n; a++)
	{
		_putchar('_');
	}
		_putchar(10);
	}
}
