#include "lists.h"
/**
 * check_cycle - check if there is a cycle
 * @list: pointer
 * Return: 0
 */

int check_cycle(listint_t *list)
{
	listint_t *_single = list;
	listint_t *_double = list;

	if (list == NULL)
		return (0);

	while (_single != NULL && _double != NULL && _double->next != NULL)
	{
		_single = _single->next;
		_double = _double->next->next;
		if (_double == _single)
			return (1);
	}

	return (0);
}
