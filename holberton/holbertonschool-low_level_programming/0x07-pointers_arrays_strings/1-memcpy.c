#include "main.h"

/**
 * _memcpy - prototype pointer
 * @n: character
 * @src: pointer
 * @dest: pointer
 * Return: dest
 */

char *_memcpy(char *dest, char *src, unsigned int n)
{
	unsigned int i;

	for (i = 0; i < n; i++)
		dest[i] = src[i];
	return (dest);
}
