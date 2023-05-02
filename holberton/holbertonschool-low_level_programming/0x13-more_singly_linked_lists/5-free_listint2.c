#include "lists.h"

/**
 * free_listint2 - check the code
 * @head: double pointer
 */

void free_listint2(listint_t **head)
{
	listint_t *new_new;

	if (head == NULL)
		return;

	while (*head != NULL)
	{
		new_new = (*head)->next;
		free(*head);
		*head = new_new;
	}

	*head = NULL;
}
