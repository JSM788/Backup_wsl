#include "search_algos.h"

/**
 * jump_search - looks up a value by jumping positions,
 * based on the square root of the size of the array.
 * @array: pointer pointing to array at index zero.
 * @size: size of array.
 * @value: value to search for.
 *
 * Return: prev or - 1
 *
 */

int jump_search(int *array, size_t size, int value)
{
	int len = size;
	int jump = sqrt(size);
	int prev = 0;

	if (array ==  NULL)
		return (-1);
	while (array[jump] < value)
	{
		printf("Value checked array[%d] = [%d]\n", jump, array[jump]);
		prev = jump;
		jump += sqrt(len);
	}

	printf("Value found between indexes [%d] and [%d]\n", prev, jump);
	while (array[prev] < value)
	{
		printf("Value checked array[%d] = [%d]\n", prev, array[prev]);
		prev++;
	}
	printf("Value checked array[%d] = [%d]\n", prev, array[prev]);

	if (array[prev] == value)
		return (prev);
	return (-1);
}
