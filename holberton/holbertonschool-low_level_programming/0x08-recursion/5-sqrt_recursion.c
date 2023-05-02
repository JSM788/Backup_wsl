#include "main.h"

/**
 * _sqrt_recursion - prototype
 * @n: character
 * Return: -1
 */

int _sqrt_recursion(int n)
{
	int i = 1;

	if (n < 0)  /*validando que no sea negativo.. sino return -1*/
		return (-1);
	else
		return (prototype(n, i));
}


/**
 *  prototype - check your code
 *  @n: character
 *  @i: character
 *  Return: -1
 */

int prototype(int n, int i)
{
	if ((i * i) == n)
	{
		return (i);
	}
	if (i * i > n)
	{
		return (-1);
	}
	i++;
	return (prototype(n, i));
}
