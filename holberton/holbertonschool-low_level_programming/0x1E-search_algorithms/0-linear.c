#include "search_algos.h"

/**
 * linear_search - function that search a value
 * @array: function pointing to array
 * @size: size of array
 * @value: value to seatch for
 *
 * Return: i or -1
 *
 */

int linear_search(int *array, size_t size, int value)
{
	size_t i;

	if (array == NULL)
		return (-1);

	for (i = 0; i < size; i++)
	{
		printf("Value checked array[%ld] = [%d]\n", i, array[i]);
		if (value == array[i])
		{
			return (i);
		}
	}
	return (-1);
}
