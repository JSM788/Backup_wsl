#include <stdio.h>

/**
 * main - Entry point
 * Return: 0
 */

int main(void)
{
	unsigned long int j, i;

	j = 612852475143;
	i = 2;
	while (j != i)
	{
		if (j % i == 0)
			j = j / i;
		else
		i++;
	}
	printf("%lu\n", j);
	return (0);
}
