#include "main.h"

/**
 * *_strncpy - add a string to another string
 * @dest: character
 * @src: character
 * @n: character
 * Return: 0
 */


char *_strncpy(char *dest, char *src, int n)
{
	int i;

	for (i = 0; src[i] != '\0' && i < n; i++)
	{
	dest[i] = src[i];
	}

	for (; i < n; i++)
	{
	dest[i] = '\0';
	}

	return (dest);
}
