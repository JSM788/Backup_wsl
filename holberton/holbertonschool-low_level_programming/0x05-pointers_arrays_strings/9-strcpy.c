#include <stdio.h>
#include "main.h"

/**
 * *_strcpy - copies the string pointed
 * @dest: character
 * @src: character
 * Return: 0
 */
char *_strcpy(char *dest, char *src)
{
	int i, a;

	for (i = 0; src[i] != '\0'; i++)
	{}

	for (a = 0; a < i; a++)
	{
	dest[a] = src[a];
	}
	dest[a] = '\0';

	return (dest);
}
