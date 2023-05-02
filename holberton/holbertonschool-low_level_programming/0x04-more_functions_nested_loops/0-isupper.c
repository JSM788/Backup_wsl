#include "main.h"

/**
 * _isupper - Check if a character is uppercase
 * @c: charactec
 * Return: returns 1 if uppercase and 0 is lowercase.
 */
int _isupper(int c)
{

	if (c >= 'A' && c <= 'Z')
	{
		return (1);
	}
	else
		return (0);
}
