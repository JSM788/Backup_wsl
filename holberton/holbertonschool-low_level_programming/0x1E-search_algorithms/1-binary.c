#include "search_algos.h"

/**
 * binary_search - function that search a value
 * @array: function pointing to array
 * @size: size of array
 * @value: value to search for
 *
 * Return: i or -1
 *
 */

int binary_search(int *array, size_t size, int value)
{
	size_t first = 0;
	size_t last = size - 1;
	size_t medium = 0;

	if (array == NULL)
		return (-1);

	for (; first <= last;)
	{
		binary_print(array, first, last);
		medium = (first + last) / 2;
		if (array[medium] > value)
		{
			last = medium - 1;
		}
		else if (array[medium] < value)
		{
			first = medium + 1;
		}
		else
			return (medium);
	}
	return (-1);
}


/**
 * binary_print - function that print a array
 * @array: pointer to array
 * @first: first position in the array
 * @last: last position in the array
 *
 * Return: void
 *
 */

void binary_print(int *array, int first, int last)
{
	printf("Searching in array: ");
	for (; first < last; first++)
	{
		printf("%d, ", array[first]);
	}
	printf("%d\n", array[first]);
}
