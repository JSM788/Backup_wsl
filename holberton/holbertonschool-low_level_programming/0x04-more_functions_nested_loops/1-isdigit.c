#include "main.h"

/**
 * _isdigit - Check if a digit
 * @c: charactec
 * Return: returns 1 if is a digit 0 if is this
 */
int _isdigit(int c)
{

	if (c >= '0' && c <= '9')
	{
		return (1);
	}
	else
		return (0);
}
