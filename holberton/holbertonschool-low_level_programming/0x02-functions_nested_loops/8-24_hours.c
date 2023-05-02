#include "main.h"

/**
 * jack_bauer - print
 *
 * Return: void
 */

void jack_bauer(void)
{
	int h, m, first_digit, last_digit;

	for (h  = 0; h < 24; h++)
	{
		for (m = 0; m < 60; m++)
		{
			last_digit = h % 10;
			first_digit = h / 10;

			_putchar('0' + first_digit);
			_putchar('0' + last_digit);
			_putchar(':');

			last_digit = m % 10;
			first_digit = m / 10;

			_putchar('0' + first_digit);
			_putchar('0' + last_digit);
		_putchar(10);
	}
	}
}
