#include "main.h"
#include <stdlib.h>

/**
 * alloc_grid - Entry point
 * @width: character
 * @height: character
 * Return: NULL or p
 */

int **alloc_grid(int width, int height)
{
	int **p;
	int i;
	int a;

	if (height <= 0 || width <= 0)
		return (NULL);

	p = (int **) malloc(sizeof(int *) * height);

	if (p == NULL)
		return (NULL);

	for (i = 0; i < height; i++)
	{
		p[i] = (int *) malloc(sizeof(int) * width);
		if (p[i] == NULL)
		{
			free(p);
			for (a = 0; a <= i; a++)
				free(p[a]);
			return (NULL);
		}
	}

	for (i = 0; i < height; i++)
	{
		for (a = 0; a < width; a++)
		{
			p[i][a] = 0;
		}
	}
	return (p);
}

