#include "lists.h"

/**
 * print_dlistint - function print double linked list
 * @h: pointer
 * Return: counter
 */

size_t print_dlistint(const dlistint_t *h)
{
	size_t count;

	for (count = 0; h != NULL; count++)
	{
		printf("%d\n", h->n);
		h = h->next;
	}
	return (count);
}
