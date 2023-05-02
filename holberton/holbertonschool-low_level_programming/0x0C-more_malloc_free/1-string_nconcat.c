#include "main.h"
#include <stdlib.h>

/**
 * string_nconcat - function pointer
 * @s1: char pointer
 * @s2: char pointer
 * @n: unsigned int
 * Return: p
 */

char *string_nconcat(char *s1, char *s2, unsigned int n)
{
	char *p;
	unsigned int lens1, lens2;
	unsigned int i = 0, a = 0;

	for (lens1 = 0; s1 && s1[lens1]; lens1++)
	{}
	for (lens2 = 0; s2 && s2[lens2]; lens2++)
	{}

	if (n < lens2)
		p = malloc(sizeof(char) * (lens1 + n + 1));
	else
		p = malloc(sizeof(char) * (lens1 + lens2 + 1));

	if (p == NULL)
		return (NULL);

	while (i < lens1)
	{
		p[i] = s1[i];
	i++;
	}

	while (n < lens2 && i < (lens1 + n))
		p[i++] = s2[a++];

	while (n >= lens2 && i < (lens1 + lens2))
		p[i++] = s2[a++];

	p[i] = '\0';

	return (p);
}
