#include "main.h"
#include <stdlib.h>

/**
 * *create_array - check your code
 * @size: size of the array
 * @c: character
 * Return: p
 */

char *create_array(unsigned int size, char c)
{
	char *p;
	unsigned int i;

	if (size == 0)
		return (NULL);
	p = malloc(sizeof(char) * size);

	if (p != NULL)
	{
	for (i = 0; i < size; i++)
	p[i] = c;
	}

	return (p);
}
