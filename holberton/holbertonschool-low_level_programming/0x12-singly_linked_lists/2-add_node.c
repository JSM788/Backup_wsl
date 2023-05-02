#include "lists.h"

/**
 * add_node - check the code
 * @head: double pointer
 * @str:pointer
 * Return: *head
 */

list_t *add_node(list_t **head, const char *str)
{
	list_t *new;
	int len;

	for (len = 0; str[len] != '\0'; len++)
	{}
	new = malloc(sizeof(list_t));

	if (new == NULL)
		return (NULL);

	else
	{
		new->str = strdup(str);
		new->len = len;
		new->next = (*head);
		(*head) = new;
	}

	return (*head);
}
