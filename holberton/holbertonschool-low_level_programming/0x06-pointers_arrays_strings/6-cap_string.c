#include "main.h"

/**
 * cap_string - prototype
 * @str: pointer
 * Return: str
 */

char *cap_string(char *str)
{
	int x, i;

	int spe[13] = {32, 9, 10, 44, 59, 46, 33, 63, 34, 40, 41, 123, 125};

	for (x = 0; str[x] != '\0'; x++)
	{
		if (x == 0 && str[x] >= 97 && str[x] <= 122)
		str[x] -= 32;

	for (i = 0; i < 13; i++)
	{
		if (str[x] == spe[i])
		{
		if (str[x + 1] >= 97 && str[x + 1] <= 122)
		{
		str[x + 1] -= 32;
		}
		}
	}
	}
	return (str);
}
