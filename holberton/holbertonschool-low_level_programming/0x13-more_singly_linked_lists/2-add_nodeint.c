#include "lists.h"

/**
 * add_nodeint - check the code
 * @head: double pointer
 * @n: constante int
 * Return: i
 */

listint_t *add_nodeint(listint_t **head, const int n)
{
	listint_t *new;

	new = malloc(sizeof(listint_t));

	if (new == NULL)
		return (NULL);

	new->n = n;
	new->next = *head;
	*head = new;

	return (new);
}
