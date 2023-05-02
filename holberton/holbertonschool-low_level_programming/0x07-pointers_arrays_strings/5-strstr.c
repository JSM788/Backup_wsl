#include <stdlib.h>
#include "main.h"

/**
 * _strstr - prototype pointer
 * @haystack: pointer
 * @needle: pointer
 * Return: NULL
 */

char *_strstr(char *haystack, char *needle)
{
int i;
	int j = 0;

	for (i = 0; haystack[i] != '\0'; i++)
	{
		for (j = 0; needle[j] != '\0'; j++)
		{
			if (needle[j] != haystack[i + j])
			{
				break;
			}
	}
		if (needle[j] == 0)
		{
			return (&haystack[i]);
		}
	}
	return (NULL);
}
