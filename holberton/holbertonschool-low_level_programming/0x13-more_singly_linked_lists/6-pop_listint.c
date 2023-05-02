#include "lists.h"

/**
 * pop_listint - check the code
 * @head: double pointer
 * Return: i
 */

int pop_listint(listint_t **head)
{
	listint_t *new_new;
	int i;

	if (*head == NULL)
		return (0);

	i = (*head)->n;
	new_new = (*head)->next;
	free(*head);
	*head = new_new;

	return (i);
}
