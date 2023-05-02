#include "main.h"
/**
 * *string_toupper - add a string to another string
 * @s: character
 * Return: 0
 */

char *string_toupper(char *s)
{
	int i;

	for (i = 0; s[i] != '\0'; i++)
	{
		if (s[i] >= 'a' && s[i] <= 'z')
		{
			s[i] = s[i] - ' ';
		}
	}
	return (s);
}
