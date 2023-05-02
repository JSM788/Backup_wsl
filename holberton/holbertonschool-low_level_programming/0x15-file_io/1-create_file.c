#include "main.h"

/**
 * create_file - chekc the code
 * @filename: pointer
 * @text_content: pointer
 * Return: -1 and 1
 */

int create_file(const char *filename, char *text_content)
{
	int fd;
	int i;
	int fw;

	if (filename == NULL)
		return (-1);

	fd = open(filename, O_CREAT | O_RDWR | O_TRUNC, 0600);
	if (fd == -1)
		return (-1);

	if (text_content != NULL)
	{
		for (i = 0; text_content[i] != '\0'; i++)
		{}
		fw = write(fd, text_content, i);
		if (fw == -1)
			return (-1);
	}
	close(fd);

	return (1);
}
