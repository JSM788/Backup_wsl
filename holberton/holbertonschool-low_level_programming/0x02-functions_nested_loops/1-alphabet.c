#include "main.h"

/**
 * print_alphabet-prints the alphabet
 */

void print_alphabet(void)
{
	char letter;

	letter = 'a';
	while (letter <= 'z')
	{
	_putchar(letter);
	letter++;
	}
	_putchar(10);
}

