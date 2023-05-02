#include "function_pointers.h"

/**
 * int_index - check the code
 * @array: pointer
 * @size: character
 * @cmp: pointer
 * Return: -1
 */

int int_index(int *array, int size, int (*cmp)(int))
{
	int i;

	if (array == NULL || size <= 0 || cmp == NULL)
	return (-1);

	for (i = 0; i < size; i++)
	{
		if (cmp(array[i]) != 0)
		return (i);
	}
	if (i == size)
		return (-1);

	return (-1);
}
