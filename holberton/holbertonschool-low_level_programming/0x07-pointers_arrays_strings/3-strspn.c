#include <stdlib.h>
#include "main.h"

/**
 * _strspn - check your code
 * @accept: pointer
 * @s: pointer
 * Return: 0
 */

unsigned int _strspn(char *s, char *accept)
{
	unsigned int i, j, lengh = 0, match = 0;

	for (i = 0; s[i] != '\0'; i++)
	{
		for (j = 0; accept[j] != '\0'; j++)
		{
			if (s[i] == accept[j])
			{
				lengh++;
				break;
			}
		}
		if (lengh != 0)
			match++;
		if (match != lengh)
			return (lengh);
	}
	return (0);
}
