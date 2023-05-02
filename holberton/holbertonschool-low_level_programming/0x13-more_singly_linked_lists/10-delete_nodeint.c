#include "lists.h"

/**
 * delete_nodeint_at_index - check the code
 * @head: double pointer
 * @index: character
 * Return: 1 or -1
 */

int delete_nodeint_at_index(listint_t **head, unsigned int index)
{
	listint_t *new_new = *head;
	listint_t *new;

	unsigned int i;

	if (*head == NULL)
		return (-1);

	if (index == 0)
	{
		*head = (*head)->next;
		free(new_new);
		return (1);
	}

	for (i = 0; i < index - 1; i++)
	{
		if (new_new == NULL)
			return (-1);

		new_new = new_new->next;
	}

	new = new_new->next;
	new_new->next = new->next;
	free(new);

	return (1);
}
