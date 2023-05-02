#include "lists.h"

/**
 * get_nodeint_at_index - check the code
 * @head: pointer
 * @index: unsigned entero
 * Return: new_new
 */

listint_t *get_nodeint_at_index(listint_t *head, unsigned int index)
{
	listint_t *new_new = head;
	unsigned int i = 0;

	if (new_new == NULL)
		return (NULL);

	while (new_new != NULL && i < index)
	{
		new_new = new_new->next;
		i++;
	}

	return (new_new);
}
