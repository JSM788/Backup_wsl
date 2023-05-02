#include <stdio.h>
#include <stdlib.h>
#include <limits.h>

/**
 * *malloc_checked - check the code
 * @b: character
 * Return: p
 */

void *malloc_checked(unsigned int b)
{
	char *p;

	p = malloc(b);
	if (p == NULL)
	exit(98);

	return (p);
}
