#include "hash_tables.h"

/**
 * key_index - that gives you the index of a key
 *
 * @key: It's the key
 * @size: is the size
 * Return: the index
 */

unsigned long int key_index(const unsigned char *key, unsigned long int size)
{
	return (hash_djb2(key) % size);
}
