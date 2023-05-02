#include "main.h"

/**
* binary_to_uint - check the code
* @b: pointer
* Return: result
*/

unsigned int binary_to_uint(const char *b)
{
	int i;
	unsigned int result = 0;

	if (b == NULL)
	return (0);

	for (i = 0; b[i] != '\0'; i++)
	{
		if (b[i] != '0' && b[i] != '1')
			return (0);

		else
			result = 2 * result + b[i] - '0';
	}

	return (result);
}
