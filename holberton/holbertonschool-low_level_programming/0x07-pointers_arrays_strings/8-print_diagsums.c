#include <stdio.h>
#include "main.h"

/**
 * print_diagsums - prototype
 * @a: pointer
 * @size: int
 */

void print_diagsums(int *a, int size)
{
	int i = 0;
	int SUM1 = 0;
	int SUM2 = 0;

	for (i = 0; i < size; i++)
	{
		SUM1 += a[i * (size + 1)];
		SUM2 += a[(i + 1) * (size - 1)];
	}
	printf("%d, %d\n", SUM1, SUM2);
}
