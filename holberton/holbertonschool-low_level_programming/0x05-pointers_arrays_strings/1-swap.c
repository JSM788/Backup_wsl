#include "main.h"
#include <stdio.h>

/**
 * swap_int - check the code
 * @a: character
 * @b: character
 * Return: Always 0.
 */
void swap_int(int *a, int *b)
{	int aux;


	aux = *a;
	*a = *b;
	*b = aux;
}
