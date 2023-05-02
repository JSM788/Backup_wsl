#include "main.h"
/**
 * print_rev - prototype
 * @s: funtion
 */

void print_rev(char *s)
{
	int i, a, b;

	for (i = 0; s[i] != '\0'; i++)
	{
	}

	b = i;

	for (a = b - 1; a >= 0; a--)
	{
	_putchar (s[a]);
	}
	_putchar (10);
}
