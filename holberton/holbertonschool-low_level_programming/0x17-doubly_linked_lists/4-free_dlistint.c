#include "lists.h"

/**
 * free_dlistint - free the code
 * @head: pointer
 */

void free_dlistint(dlistint_t *head)
{
	dlistint_t *new;

	while (head != NULL)
	{
		new = head->next;
		free(head);
		head = new;
	}
}
