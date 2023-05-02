#include <stdio.h>

/**
* clear_bit - check the code
* @n: variable
* @index: variable
* Return: 1
*/

int clear_bit(unsigned long int *n, unsigned int index)
{
	unsigned long int i;

	i = ~(1 << index);

	if (index > 63)
		return (-1);

	if (*n == 0)
	{
		*n = 0;
		return (1);
	}

	*n = *n & i;

	return (1);
}
