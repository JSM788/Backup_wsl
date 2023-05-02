#include "main.h"

/**
 * append_text_to_file - check the code
 * @filename: pointer
 * @text_content: pointer
 * Return: -1 and 1
 */

int append_text_to_file(const char *filename, char *text_content)
{
	int fd, i, fw;

	if (filename == NULL)
		return (-1);

	fd = open(filename, O_CREAT | O_WRONLY | O_APPEND);

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
