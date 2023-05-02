#include "lists.h"

/**
 * free_listint - check the code
 * @head: pointer
 */

void free_listint(listint_t *head)
{
	listint_t *new_new;

	while (head != NULL)
	{
		new_new = head->next;
		free(head);
		head = new_new;
	}
}
