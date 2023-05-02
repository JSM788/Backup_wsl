#include "main.h"

/**
 * puts2 - check the code
 * @str: character
 * Return: Always 0.
 */
void puts2(char *str)
{
	int i, y;

	for (i = 0; str[i] != '\0'; i++)
	{
	}
	for (y = 0; y < i; y += 2)
	{	_putchar(str[y]);
	}
	_putchar(10);
}
