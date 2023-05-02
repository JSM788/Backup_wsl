#include "lists.h"

/**
 * free_list - check the code
 * @head: pointer
 */

void free_list(list_t *head)
{
	list_t *new;

	while (head != NULL)
	{
		new = head->next;
		free(head->str);
		free(head);
		head = new;
	}
}
