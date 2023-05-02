#include "main.h"
/**
 * print_alphabet_x10-print the alphabet
 */

void print_alphabet_x10(void)
		{
int ch, i;

		for (i = 0; i < 10; i++)
		{
		for (ch = 'a'; ch <= 'z'; ch++)
		{
		_putchar(ch);
		}
		_putchar(10);
		}
		}
