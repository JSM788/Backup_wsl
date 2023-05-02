#include "lists.h"

/**
 * dlistint_len - this function counts a double linked list
 * @h: pointer
 * Return: counter
 */

size_t dlistint_len(const dlistint_t *h)
{
	size_t count;

	for (count = 0; h != NULL; count++)
	{
		h = h->next;
	}
	return (count);
}
