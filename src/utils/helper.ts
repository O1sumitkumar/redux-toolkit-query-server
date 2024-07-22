export const formatValidationErrors = (error: any): string => {
  return Object.entries(error.errors)
    .map(([field, err]: [string, any]) => `${field}: ${err.message.replace('Path `', '').replace('` is required.', ' is required.')}`)
    .join(', ');
};
