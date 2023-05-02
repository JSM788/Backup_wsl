#include <stdlib.h>
#include "main.h"

/**
 * *_strchr - prototype pointer
 * @s: pointer
 * @c: character
 * Return: s
 */

char *_strchr(char *s, char c)
{
	do {
		if (*s == c)
		{
		return (s);
		}}

	while (*s++);

	return (NULL);
}
