#include "lists.h"

/**
 * list_len - check the code
 * @h: pointer
 * Return: i
 */

size_t list_len(const list_t *h)
{
	size_t i;

	for (i = 0; h != NULL; i++)
	{
		h = h->next;
	}

	return (i);
}
