#include "main.h"
#include <stdlib.h>

/**
 * *_strdup - check your code
 * @str: pointer
 * Return: p
 */

char *_strdup(char *str)
{
	char *p;
	unsigned int i;

	if (str == NULL)
		return (NULL);

	for (i = 0; str[i]; i++)
	{}
	p = malloc(sizeof(char) * (i + 1));

	if (p != NULL)
	{
		for (i = 0; str[i]; i++)
			p[i] = str[i];
		p[i] = '\0';

	}
	return (p);
}
