#include "main.h"

/**
* get_bit - check the code
* @n: variable
* @index: variable
* Return: 0
*/

int get_bit(unsigned long int n, unsigned int index)
{
	int result;

	if (index > 63)
		return (-1);

	else
		result = n >> index;

	result = result & 1;

	return (result);
}
