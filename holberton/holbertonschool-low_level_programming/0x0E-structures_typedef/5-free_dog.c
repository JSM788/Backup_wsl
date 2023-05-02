#include "dog.h"
#include <stdlib.h>
/**
 * free_dog - check the code
 * @d: pointer
 */

void free_dog(dog_t *d)
{
	if (d)
	{
		free(d->name);
		free(d->owner);
		free(d);
	}
}
