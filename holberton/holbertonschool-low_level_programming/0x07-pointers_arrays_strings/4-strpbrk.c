#include <stdlib.h>
#include "main.h"

/**
 * *_strpbrk - check your code
 * @s: pointer
 * @accept: pointer
 * Return: NULL
 */

char *_strpbrk(char *s, char *accept)
{
char *vodka = accept;
	while (*s)
{
	vodka = accept;
	while (*vodka != '\0')
	{
	if (*vodka == *s)
	{
	return (s);
	}
	vodka++;
	}
	s++;
	}
return (NULL);
}

