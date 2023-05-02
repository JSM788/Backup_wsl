#include "main.h"
#include <stdlib.h>

/**
 * str_concat - function pointer
 * @s1: pointer char
 * @s2: pointer char
 * Return: p
 */

char *str_concat(char *s1, char *s2)
{
	char *p;
	int lens1, lens2;

	if (s1 == NULL)
		s1 = "";
	if (s2 == NULL)
		s2 = "";

	for (lens1 = 0; s1[lens1]; lens1++)
	{}
	for (lens2 = 0; s2[lens2]; lens2++)
	{}

	p = malloc(sizeof(char) * (lens1 + lens2 + 1));

	if (p != NULL)
	{
		for (lens1 = 0; s1[lens1]; lens1++)
		{
			p[lens1] = s1[lens1];
		}
		for (lens2 = 0 ; s2[lens2]; lens2++)
		{
			p[lens1 + lens2] = s2[lens2];
	}
	p[lens1 + lens2] = s2[lens2];
	}

	return (p);
}
