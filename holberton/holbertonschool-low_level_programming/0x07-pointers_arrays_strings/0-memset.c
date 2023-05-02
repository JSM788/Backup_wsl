#include "main.h"

/**
 * *_memset - check your code
 * @n: character
 * @s: pointer
 * @b:character
 * Return: s
 */

char *_memset(char *s, char b, unsigned int n)
{
	unsigned int i;

	for (i = 0 ; i < n; i++)
		s[i] = b;
	return (s);
}
