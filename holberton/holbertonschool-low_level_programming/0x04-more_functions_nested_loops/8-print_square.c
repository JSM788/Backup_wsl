#include "main.h"

/**
 * print_square - This function prints a square
 * @size: character
 */

void print_square(int size)
{
	if (size <= 0)
	{
		_putchar(10);
	}

	else
	{
	int a, b;

	for (a = 1; a <= size; a++)
	{
		for (b = 1; b <= size; b++)
	{
		_putchar ('#');
		}
		_putchar (10);
	}
	}
}
