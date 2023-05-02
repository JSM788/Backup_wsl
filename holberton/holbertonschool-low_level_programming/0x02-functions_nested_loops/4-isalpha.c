#include "main.h"
/**
 * _isalpha - check if it is alphabetic character or not
 * @c: character
 * Return: 1 if c is a letter, lowercase or uppercase
 */

int _isalpha(int c)
{
	return ((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z'));
}
